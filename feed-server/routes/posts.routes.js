'use strict';

const posts = require('../controllers/posts.controller.js');
module.exports = function(app) {
	app.route('/posts').post(posts.create).get(posts.list);
};

