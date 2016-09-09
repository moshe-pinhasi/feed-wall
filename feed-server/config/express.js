'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = function() {
	app.use(cors({origin: ['http://localhost:8082']}));
	app.use(bodyParser.json());
	require('../routes/posts.routes.js')(app);

	return app;
};
