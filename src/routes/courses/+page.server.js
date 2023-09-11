import { prisma } from '../../lib/server/prisma';

/** @type {import('./$types').PageLoad} */
export async function load({cookies}) {
    try {
        const ongoing = await prisma.ongoing.findMany({
            select: {
                progress: true,
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
                updatedAt: 'desc'
            }
        });

        const completed = await prisma.completed.findMany({
            select: {
                finishAt: true,
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
                finishAt: 'desc'
            }
        });

        return { ongoing, completed };
    } catch (error) {
        console.log(error)
    }
}