import { prisma } from '../../lib/server/prisma';

/** @type {import('./$types').PageLoad} */
export async function load({cookies}) {
    try {
        const courses = await prisma.courses.findMany();
        const users = await prisma.users.findMany();

        const user = await prisma.users.findUniqueOrThrow({
            where: {
                id: cookies.get('sessionId')
            }
        })

        return {courses, users, user}
    }catch(err) {
        console.log(err)
    }
}