'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	email: String,
	message: String
});

mongoose.model('Post', PostSchema);

