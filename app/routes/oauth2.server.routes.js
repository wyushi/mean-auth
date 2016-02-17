'use strict';

var oauth2Controller = require('../../app/controllers/oauth2.server.controller');

module.exports = function(app) {

  app.route('/oauth2/authorize')
    .get(oauth2Controller.authorization)
    .post(oauth2Controller.decision);

  app.route('/oauth2/token')
    .post(oauth2Controller.token);

};
