const { authJwt } = require('../middlewares');
const UserController = require('../controllers/user.controller');


module.exports = (app) => {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	app.get('/user/all', [authJwt.verifyToken, authJwt.isAdmin], UserController.getAllUser);
}
