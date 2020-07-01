const db = require('../models');
const User = db.user;
const Role = db.role;

exports.getAllUser = (req, res) => {
	User.find()
		.populate("roles", "-__v")
		.exec((err, users) => {
			if (err)
			{
				res.status(500).send({ message: err });
				return;
			}

			var roles = [];
			let id = '';
			let name = '';
			let username = '';
			let email = '';

			users.forEach(user => {
				for (let i = 0; i < user.roles.length; i++)
				{
					roles.push("ROLE_" + user.roles[i].name.toUpperCase());
				}
				name = user.name;
				id = user._id;
				username = user.username;
				email = user.email;
			});
			res.status(200).send({
				id: id,
				name: name,
				username: username,
				email: email,
				roles: roles
			});
		})
};
