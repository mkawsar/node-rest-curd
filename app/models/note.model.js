const mongooes = require('mongoose');

const NoteSchema = mongooes.Schema({
	title: String,
	content: String
}, {
	timestamps: true
});

module.exports = mongooes.model('note', NoteSchema);
