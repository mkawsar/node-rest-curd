const express = require('express');
const mongooes = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./db');

// Create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a simple route
app.get('/', (req, res) => {
	res.json({ "message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes." });
});

mongooes.Promise = global.Promise;

// Connecting to database

mongooes.connect(db.url, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
}).then(() => {
	console.log("Successfully connected to the database");
}).catch(err => {
	console.log('Could not connect to the database. Exiting now...', err);
	process.exit();
})


exports.create = (req, res) => {
	if (req.body.content)
	{
		return res.status(400).send({
			message: "Note content can not be empty"
		})
	}
}

// Require Notes routes
require('./app/routes/note.routes')(app);

// listen for requests
app.listen(3000, () => {
	console.log("Server is listening on port 3000");
});
