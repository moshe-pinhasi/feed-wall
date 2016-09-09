'use strict';

var Post = require('mongoose').model('Post');
var exports = {};

exports.create = function(req, res, next) {
	var post = new Post(req.body);
	post.save(function(err) {
		if (err) {
			return next(err);
		} else {
			res.json(post);
		}
	});
};

exports.list = function(req, res, next) {
	Post.find({}, function(err, posts) {
		if (err) {
			return next(err);
		} else {
			res.json(posts);
		}
	});
};

//exports.read = function(req, res) {
// 	res.json(req.user);
//};
//
//exports.userId = function(req, res, next, id) {
//	User.findOne({
//		_id: id
//	},  function(err, user) {
//			if (err) {
//				return next(err);
//			} else {
//				req.user = user;
//				next();
//			}
//		}
//	);
//};
//
//exports.userId = function(req, res, next, id) {
//	User.findOne({
//			_id: id
//		},  function(err, user) {
//			if (err) {
//				return next(err);
//			} else {
//				req.user = user;
//				next();
//			}
//		}
//	);
//};
//
//var updateOptions = {new: true};
//exports.update = function(req, res, next) {
//	User.findByIdAndUpdate(req.user.id, req.body, updateOptions, function(err, user) {
//		if (err) {
//			return next(err);
//		} else {
//			res.json(user);
//		}
//	});
//};
//
//exports.delete = function(req, res, next) {
//	req.post.remove(function(err) {
//		if (err) {
//			return next(err);
//		} else {
//			res.json(req.user);
//		}
//	});
//};


module.exports = exports;