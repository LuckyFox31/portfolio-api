require('dotenv').config();

const app = require('fastify')({logger: process.env.API_LOGGER});

app.register(require('./src/routes/UserRoutes'), {prefix: '/user'});

function start(){
	try{
		app.listen({port: process.env.API_PORT})
			.then((address) => {
				console.info(`Server listening on ${address}`);
			});
	} catch (error){
		app.log.error(error);
		process.exit(1);
	}
}

start();