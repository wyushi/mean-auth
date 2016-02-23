'use strict';

var users = require('../../app/controllers/users.server.controller'),
    oauth2Controller = require('../../app/controllers/oauth2.server.controller'),
    requireRole = require('./utils/roles');

module.exports = function(app) {

  app.route('/oauth2/authorize')
    .get(oauth2Controller.authorization)
    .post(oauth2Controller.decision);

  app.route('/oauth2/token')
    .post(oauth2Controller.token);

};
