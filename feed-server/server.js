'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const PORT = process.env.PORT || 3000;
const mongoose = require('./config/mongoose');
const express = require('./config/express');

const db = mongoose();
const app = express();

app.listen(PORT, function () {
	console.log("Server running at http://localhost:" + PORT + "/");
});