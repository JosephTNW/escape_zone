import { redirect } from '@sveltejs/kit';
import { prisma } from '../../lib/server/prisma';

const generateLevels = async (startValue, increment, groupSize, length) => {
    let result = [];

    for (let i = 0; i < length; i++) {
        const groupIndex = Math.floor(i / groupSize)
        const currentValue = startValue + groupIndex * increment;
        result.push(currentValue);   
    }

    return result;
}

const generateCumulValue = async (arr) => {
    let cumulArr = [...arr]
    cumulArr.forEach((num, index) => {
        if(index !== 0) {
            cumulArr[index] = (cumulArr[index-1] + cumulArr[index])
        }
    })

    return cumulArr;
}

const findLevel = async (cumulExp, exp) => {
    let upperLimit = Infinity
    let level;

    cumulExp.forEach((num, index) => {
        if(num > exp && num < upperLimit) {
            upperLimit = num;
            level = index;
        }
    });

    if(upperLimit === Infinity) {
        return null;
    } else {
        return (upperLimit, level);
    }
}

/** @type {import('./$types').PageLoad} */
export async function load({cookies}) {
    try {
        const ongoing = await prisma.ongoing.findMany({
            where: {
                userId: cookies.get("sessionId")
            }
        });

        const user = await prisma.users.findUniqueOrThrow({
            where: {
                id: cookies.get("sessionId")
            }
        });

        const levels = await generateLevels(2, 1, 5, 50);
        const array = await generateCumulValue(levels)
        user.level = await findLevel(array, user.exp)

        
        if(user.level !== 0) {
            user.expInHand = user.exp - array[user.level - 1] 
            user.totalExpToLvlUp = array[user.level] - array[user.level - 1]
        } else {
            user.expInHand = 0;
            user.totalExpToLvlUp = array[0]
        }

        const completed = await prisma.completed.findMany({
            where: {
                userId: cookies.get("sessionId")
            }
        })

        if(ongoing.length){
            return {
                user, ongoing, completed
            }
        }

        const randomCourse = await prisma.$queryRaw`SELECT * FROM "Courses" ORDER BY random() LIMIT 4`

        return {
            user, ongoing, randomCourse, completed
        }
    } catch(err) {
        if(err.code === 'P2025'){
            throw redirect(302, "/auth")
        }
    }
    
}

/** @type {import('./$types').Actions} */
export const actions = {
    logout: async ({cookies}) => {
        cookies.delete("sessionId");

        throw redirect(302, "/auth");
    }
};