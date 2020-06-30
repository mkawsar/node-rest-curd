const { check } = require('express-validator/check');

exports.createUserValidation = [
	check("username", "Please Enter a Valid Username")
		.not()
		.isEmpty(),
	check("email", "Please enter a valid email").isEmail(),
	check('password', 'The password must be 6+ chars long and contain a number')
		.not().isIn(['123', 'password', 'god'])
		.withMessage('Do not use a common word as the password')
		.isLength({ min: 6 })
		.matches(/\d/)
];

exports.loginValidation = [
	check("username", "Please Enter a Valid Username")
		.not()
		.isEmpty(),
	check('password', 'The password must be 6+ chars long and contain a number')
		.not().isIn(['123', 'password', 'god'])
		.isLength({ min: 6 })
		.matches(/\d/)
];
