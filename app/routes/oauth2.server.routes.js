'use strict';

var users = require('../../app/controllers/users.server.controller'),
    oauth2Controller = require('../../app/controllers/oauth2.server.controller'),
    requireRole = require('./utils/roles');

module.exports = function(app) {

  app.route('/oauth2/authorize')
    .get(users.requiresLogin, requireRole('user'), oauth2Controller.authorization)
    .post(users.requiresLogin, requireRole('user'), oauth2Controller.decision);

  app.route('/oauth2/token')
    .post(users.requiresLogin, requireRole('oauthClient'), oauth2Controller.token);

};
