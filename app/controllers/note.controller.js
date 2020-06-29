const note = require('../models/note.model');

exports.create = (req, res) => {
	if (!req.body.content)
	{
		return res.status(400).send({
			message: 'Note content can not be empty'
		});
	}
}
