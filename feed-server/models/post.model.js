'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	email: String,
	message: String,
	date: Number
});

mongoose.model('Post', PostSchema);

