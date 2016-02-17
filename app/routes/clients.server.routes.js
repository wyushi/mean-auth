'use strict';

var clients = require('../../app/controllers/clients.server.controller');

module.exports = function(app) {
	// Routing logic   
	app.route('/clients')
    .post(clients.create)
    .get(clients.list);
};
