// Schemas
const {registerUserSchema} = require('../schemas/UserSchemas');

// Controllers
const {registerUserController} = require('../controllers/UserControllers');

// Routes
module.exports = function UserRoutes(app, options, done){
	app.post('/register', {schema: registerUserSchema, handler: registerUserController});

	done();
}