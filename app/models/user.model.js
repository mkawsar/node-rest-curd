const mongoose = require('mongoose');
const Role = require('./role.model');

const UserSchema = mongoose.Schema({
	name: String,
	email: {
		type: String,
		required: true,
		unique: true
	},
	username: { type: String, required: true, index: { unique: true } },
	password: { type: String, required: true },
	phone: String,
	roles: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: Role
		}
	]
}, {
	timestamps: true
});

module.exports = mongoose.model('user', UserSchema);
