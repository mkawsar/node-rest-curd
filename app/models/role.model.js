const mongoose = require('mongoose');

const RoleSchema = mongoose.Schema({
	name: String
}, {
	timestamps: true
});

module.exports = mongoose.model('role', RoleSchema);
