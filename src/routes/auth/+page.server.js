import { redirect, fail } from '@sveltejs/kit';
import { prisma } from '../../lib/server/prisma';
import bcrypt from 'bcrypt'
const cookieName = 'sessionId';

/** @type {import('./$types').PageLoad} */
export const load = async ({ cookies }) => {
	return { cookie: cookies.get(cookieName) };
};

/** @type {import('./$types').Actions} */
export const actions = {
	createUser: async ({ request, cookies }) => {
		const { email, password, name } = Object.fromEntries(await request.formData());

		// if(!email) {
		//     return fail(400, {email, register: true, emailMissing: true});
		// }

		try {
			const user = await prisma.users.create({
				data: {
					email,
					password: await bcrypt.hash(password, 10),
					name,
				}
			});

			cookies.set(cookieName, user.id);
		} catch (err) {
			if (err.code === 'P2002') {
				return fail(400, { email, used: true });
			}

			console.error(err);
			return 500, { message: 'Could not create user.' };
		}

		throw redirect(302, '/dashboard');
	},
	checkUser: async ({ cookies, request }) => {
		const { email, password } = Object.fromEntries(await request.formData());

		// if(!email && !password) {
		//     return fail(400, {email, login: true, passMissing: true, emailMissing: true});
		// }

		// if(!email) {
		//     return fail(400, {email, login: true, emailMissing: true});
		// }

		// if(!password) {
		//     return fail(400, {email, login: true, passMissing: true})
		// }

		try {
			const user = await prisma.users.findUnique({
				where: {
					email
				}
			});

			const userPassword = await bcrypt.compare(password, user.password)

			console.log(userPassword)

			if (!user || !userPassword) {
				return fail(400, { email, incorrect: true });
			}

			cookies.set(cookieName, user.id);

		} catch (err) {
			console.error(err);
			return 500, { message: 'Could not find user.' };
		}

		throw redirect(302, '/dashboard');
	}
};
