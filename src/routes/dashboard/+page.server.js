import { redirect } from '@sveltejs/kit';
import { prisma } from '../../lib/server/prisma';

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