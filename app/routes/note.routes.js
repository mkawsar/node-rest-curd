module.exports = (app) => {
	const notes = require('../controllers/note.controller');

	app.post('/notes/create', notes.create);
}
