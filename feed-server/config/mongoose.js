'use strict';

const config = require('./config');
const mongoose = require('mongoose');

module.exports = function() {
	 const db = mongoose.connect(config.db);
	 require('../models/post.model.js');
	 
	 return db;
};