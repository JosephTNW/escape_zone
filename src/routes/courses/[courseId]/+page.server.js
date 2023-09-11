import { redirect } from '@sveltejs/kit';
import { prisma } from '../../../lib/server/prisma';

let totalSubSects = 0;
let currProgress, questions, course, lTotalSub;

const expInc = 2;
const coinInc = 5;

const adjustFracToNewDenom = async (num, denom, newDenom) => {
	return {
		numerator: Math.ceil((num * newDenom) / denom),
		denominator: newDenom
	};
};

/** @type {import('./$types').PageLoad} */
export async function load({ params, cookies }) {
	try {
		course = await prisma.courses.findFirstOrThrow({
			select: {
				title: true,
				mainSection: {
					select: {
						id: true,
						title: true,
						subSection: true
					}
				}
			},
			where: {
				id: params.courseId
			}
		});

		lTotalSub = 0;

		course.mainSection.forEach((main) => {
			lTotalSub += main.subSection.length;
		});

		totalSubSects = lTotalSub;

		try {
			currProgress = await prisma.ongoing.findFirstOrThrow({
				where: {
					courseId: params.courseId,
					userId: cookies.get('sessionId')
				}
			});

			if (currProgress.doneQuiz === false) {
				questions = await prisma.questions.findMany({
					select: {
						question: true,
						choices: {
							select: {
								answer: true,
								isCorrect: true
							}
						}
					},
					where: {
						courseId: params.courseId
					}
				});

				return { currProgress, questions, course };
			}
		} catch (error) {
			if (error.code === 'P2025') {
				try {
					currProgress = await prisma.completed.findFirstOrThrow({
						where: {
							courseId: params.courseId,
							userId: cookies.get('sessionId')
						}
					});

				} catch (error) {
					if (error.code === 'P2025') {
						currProgress = await prisma.ongoing.create({
							data: {
								userId: cookies.get('sessionId'),
								courseId: params.courseId,
								progress: `1 / ${totalSubSects}`
							}
						});
					}
				}
			}
		}

		console.log(currProgress)
		return { course, currProgress, questions };
	} catch (error) {
		console.log(error);
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	updateProgress: async ({ request, params, cookies }) => {
		const { currentPos } = Object.fromEntries(await request.formData());

		await prisma.ongoing.update({
			where: {
				userId_courseId: {
					userId: cookies.get('sessionId'),
					courseId: params.courseId
				}
			},
			data: {
				progress: `${currentPos} / ${totalSubSects}`,
				updatedAt: new Date()
			}
		});

		throw redirect(302, `/courses/${params.courseId}`);
	},
	complete: async ({ params, cookies }) => {
		let totalDone = currProgress.progress.match(/(\d+)\s*\/\s*(\d+)/)[1] * 1;
		let totalSubSects = currProgress.progress.match(/(\d+)\s*\/\s*(\d+)/)[2] * 1;

		if (totalDone !== totalSubSects) {
			return;
		}

		try {
			await prisma.ongoing.delete({
				where: {
					userId_courseId: {
						userId: cookies.get('sessionId'),
						courseId: params.courseId
					}
				}
			});
		} catch (err) {
			return 500, { message: 'Oops something went wrong' };
		}

		try {
			await prisma.completed.create({
				data: {
					userId: cookies.get('sessionId'),
					courseId: params.courseId
				}
			});

			await prisma.users.update({
				data: {
					exp: {
						increment: expInc
					},
					coin: {
						increment: coinInc
					}
				},
				where: {
					id: cookies.get('sessionId')
				}
			});

			return 200, { message: 'Congrats for finishing the course', coins: coinInc, exps: expInc };
		} catch (error) {
			return 500, { message: 'Oops something went wrong' };
		}
	},
	skipQuiz: async ({ params, cookies }) => {
		try {
			await prisma.ongoing.update({
				data: {
					doneQuiz: true
				},
				where: {
					userId_courseId: {
						userId: cookies.get('sessionId'),
						courseId: params.courseId
					}
				}
			});
		} catch (error) {
			console.log(error);
		}
	},
	submitTest: async ({ request, cookies, params }) => {
		const { result } = Object.fromEntries(await request.formData());

		const res = JSON.parse(result);

		let correct = 0;
		res.forEach((q) => {
			if (q.selected === undefined) {
				console.log('not answ');
				return;
			}
			console.log(q.choices[q.selected]);
			if (q.choices[q.selected].isCorrect) {
				correct++;
			}
		});

		const newFrac = await adjustFracToNewDenom(correct, res.length, totalSubSects)

		try {
			await prisma.ongoing.update({
				data: {
					doneQuiz: true,
					progress: `${newFrac.numerator} / ${newFrac.denominator}`
				},
				where: {
					userId_courseId: {
						userId: cookies.get('sessionId'),
						courseId: params.courseId
					}
				}
			})
		} catch (error) {
			console.log(error)			
		}
	}
};
