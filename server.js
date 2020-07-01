const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/db.config');

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

const db = require("./app/models");
const Role = db.role;

// Connecting to database

db.mongoose
	.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log("Successfully connect to MongoDB.");
		initial();
	})
	.catch(err => {
		console.error("Connection error", err);
		process.exit();
	});

function initial() {
	Role.estimatedDocumentCount((err, count) => {
		if (!err && count === 0)
		{
			new Role({
				name: "user"
			}).save(err => {
				if (err)
				{
					console.log("error", err);
				}

				console.log("added 'user' to roles collection");
			});

			new Role({
				name: "moderator"
			}).save(err => {
				if (err)
				{
					console.log("error", err);
				}

				console.log("added 'moderator' to roles collection");
			});

			new Role({
				name: "admin"
			}).save(err => {
				if (err)
				{
					console.log("error", err);
				}

				console.log("added 'admin' to roles collection");
			});
		}
	});
}


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
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// listen for requests
app.listen(3000, () => {
	console.log("Server is listening on port 3000");
});
