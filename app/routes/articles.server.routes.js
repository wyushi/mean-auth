'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
    articles = require('../../app/controllers/articles.server.controller'),
    requireRole = require('./utils/roles');

module.exports = function(app) {
	// Article Routes
	app.route('/articles')
		.get(users.requiresLogin, articles.list)
		.post(users.requiresLogin, requireRole('user'), articles.create);

  app.route('/api/articles')
    .get(users.isAuthenticated, articles.list);

	app.route('/articles/:articleId')
		.get(articles.read)
		.put(users.requiresLogin, requireRole('user'), articles.hasAuthorization, articles.update)
		.delete(users.requiresLogin, requireRole('user'), articles.hasAuthorization, articles.delete);

	// Finish by binding the article middleware
	app.param('articleId', articles.articleByID);
};
