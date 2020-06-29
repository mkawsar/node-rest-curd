module.exports = (app) => {
	const notes = require('../controllers/note.controller');

	app.post('/notes/create', notes.create);
	app.get('/notes/list', notes.getAll);
	app.get('/notes/:noteId/details', notes.details);
	app.put('/notes/:noteId/update', notes.update);
	app.delete('/notes/:noteId/delete', notes.delete);
}
