import { redirect } from '@sveltejs/kit';
import { prisma } from '../../lib/server/prisma';

const generateLevels = async (startValue, increment, groupSize, length) => {
	let result = [];

	for (let i = 0; i < length; i++) {
		const groupIndex = Math.floor(i / groupSize);
		const currentValue = startValue + groupIndex * increment;
		result.push(currentValue);
	}

	return result;
};

const generateCumulValue = async (arr) => {
	let cumulArr = [...arr];
	cumulArr.forEach((num, index) => {
		if (index !== 0) {
			cumulArr[index] = cumulArr[index - 1] + cumulArr[index];
		}
	});

	return cumulArr;
};

const findLevel = async (cumulExp, exp) => {
	let upperLimit = Infinity;
	let level;

	cumulExp.forEach((num, index) => {
		if (num > exp && num < upperLimit) {
			upperLimit = num;
			level = index;
		}
	});

	if (upperLimit === Infinity) {
		return null;
	} else {
		return upperLimit, level;
	}
};

/** @type {import('./$types').PageLoad} */
export async function load({ cookies }) {
	try {
		let ongoing;

		const onGoingCount = await prisma.ongoing.count({
			where: {
				userId: cookies.get('sessionId')
			}
		});

		const completedCount = await prisma.completed.count({
			where: {
				userId: cookies.get('sessionId')
			}
		})

		const user = await prisma.users.findUniqueOrThrow({
			select: {
				coin: true,
				name: true,
				exp: true,
				role: true,
				premium: true
			},
			where: {
				id: cookies.get('sessionId')
			}
		});

		const users = await prisma.users.findMany({
			select: {
				name: true,
				exp: true,
				points: true
			},
			orderBy: {
				exp: 'desc'
			},
			take: 4
		});

		const events = await prisma.events.findMany({
			select: {
				title: true,
				heldAt: true,
				platform: true,
				host: {
					select: {
						name: true
					}
				}
			},
			orderBy: {
				heldAt: 'desc'
			},
			take: 3
		});

		const levels = await generateLevels(2, 1, 5, 50);
		const array = await generateCumulValue(levels);
		user.level = await findLevel(array, user.exp);

		users.forEach(async (user) => {
			user.level = await findLevel(array, user.exp);
		});

		if (user.level !== 0) {
			user.expInHand = user.exp - array[user.level - 1];
			user.totalExpToLvlUp = array[user.level] - array[user.level - 1];
		} else {
			user.expInHand = 0;
			user.totalExpToLvlUp = array[0];
		}

		if (onGoingCount) {
			ongoing = await prisma.ongoing.findMany({
				select: {
					course: {
						select: {
							id: true,
							title: true,
							category: true,
							duration: true,
							author: {
								select: {
									name: true
								}
							}
						}
					}
				},
				where: {
					userId: cookies.get('sessionId')
				},
				orderBy: {
					progress: 'asc'
				}
			});

			return {
				users,
				user,
				onGoingCount,
				ongoing,
				completedCount,
				events
			};
		} else {
			const randomCourse = await prisma.$queryRaw`SELECT c.id, c.title, c.duration, c.category, u.name 
			FROM "Courses" AS c 
			INNER JOIN "Users" AS u ON c."authorId" = u.id 
			WHERE c.id NOT IN (
				SELECT "courseId" FROM "Completed" WHERE "userId" = ${cookies.get('sessionId')}
			)
			ORDER BY random() 
			LIMIT 4;`;
	
			return {
				users,
				user,
				onGoingCount,
				randomCourse,
				completedCount,
				events
			};
		}
	} catch (err) {
		if (err.code === 'P2025') {
			throw redirect(302, '/auth');
		}
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	logout: async ({ cookies }) => {
		cookies.delete('sessionId');

		throw redirect(302, '/auth');
	},
	addCourse: async ({ request, cookies }) => {
		const { title, categ, hours, minutes, courseContent, qna } = Object.fromEntries(await request.formData());

		const mainSections = JSON.parse(courseContent);

		const questions = JSON.parse(qna);

        try {
            const course = await prisma.courses.create({
                data: {
                    title,
                    category: categ,
                    published: true,
                    authorId: cookies.get('sessionId'),
                    duration: `${hours}.${minutes/60}`
                }
            })

            mainSections.forEach( async (main, mainIndex) => {
                let mainSect = await prisma.mainSection.create({
                    data: {
                        courseId: course.id,
                        order: mainIndex,
                        title: main.name
                    }
                })    

                main.subArray.forEach( async (sub, subIndex) => {
                    await prisma.subSection.create({
                        data: {
                            order: subIndex,
                            parentId: mainSect.id,
                            title: sub.name,
                            content: sub.content,
                        }
                    })
                })
            });

			questions.forEach( async (q) => {
				let qS = await prisma.questions.create({
					data: {
						courseId: course.id,
						question: q.question
					}
				})

				q.answers.forEach( async (a, aIndex) => {
					await prisma.choices.create({
						data: {
							answer: a,
							isCorrect:  aIndex === q.correctPos,
							qId: qS.id
						}
					})
				})
			})
            
        } catch (error) {
            console.log(error)
        }
	}
};
