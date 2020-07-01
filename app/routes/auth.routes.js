module.exports = (app) => {
	const AuthController = require('../controllers/auth.controller');
	const UserValidation = require('../validator/user.validation');

	app.post('/user/signup', UserValidation.createUserValidation, AuthController.signup);
	app.post('/user/login', UserValidation.loginValidation, AuthController.signin);
}
