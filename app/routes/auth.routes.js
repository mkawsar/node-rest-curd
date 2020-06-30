module.exports = (app) => {
	const UserController = require('../controllers/auth.controller');
	const UserValidation = require('../validator/user.validation');

	app.post('/user/signup', UserValidation.createUserValidation, UserController.signup);
	app.post('/user/login', UserValidation.loginValidation, UserController.signin);
}
