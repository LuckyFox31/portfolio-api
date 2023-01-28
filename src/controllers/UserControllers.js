// Dependencies
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient, Prisma } = require('@prisma/client');
const errorHandler = require('../utils/errorHandler');

// Controllers
async function registerUserController(request, reply){
	const prisma = new PrismaClient();

	try{
		const {email, password} = request.body;

		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(password, salt);

		const user = await prisma.User.create({
			data: {
				email: email,
				password: hash
			}
		});

		const accessToken = jwt.sign(
			{
				email: user.email
			},
			process.env.ACCESS_TOKEN_SECRET,
			{
				expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
			}
		);

		return reply
			.code(201)
			.send({
				status: 201,
				message: 'The user has been registered successfully!',
				user: {
					email: email
				},
				accessToken: accessToken,
			});
	} catch (error) {
		if(error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002'){
			return errorHandler(
				reply,
				409,
				'This email address is already associated with a user.'
			)
		}

		return errorHandler(reply, error.code || 500, error);
	} finally {
		prisma.$disconnect();
	}
}

module.exports = {
	registerUserController
}