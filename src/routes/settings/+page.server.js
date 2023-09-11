import { prisma } from '../../lib/server/prisma';

/** @type {import('./$types').PageLoad} */
export async function load({cookies}) {
    try {
        const user = await prisma.users.findFirstOrThrow({
            where: {
                id: cookies.get('sessionId')
            }
        })

        return { user }
    } catch (error) {
        if (error.code === 'P2025') {
            throw 302, '/auth'
        }
    }
}