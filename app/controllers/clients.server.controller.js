'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    errorHandler = require('./errors.server.controller'),
    Client = mongoose.model('Client'),
    _ = require('lodash');

/**
 * Create a Client
 */
exports.create = function(req, res) {
  var client = new Client();
  client.name = req.body.name;
  client.id = req.body.id;
  client.secret = req.body.secret;
  client.userId = req.user._id;

  client.save(function(err) {
    if (err){
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(client);
    }
  });
};

/**
 * Show the current Client
 */
exports.read = function(req, res) {
  
};

/**
 * Update a Client
 */
exports.update = function(req, res) {

};

/**
 * Delete an Client
 */
exports.delete = function(req, res) {

};

/**
 * List of Clients
 */
exports.list = function(req, res) {
  Client.find().exec(function(err, clients) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(clients);
    }
  });
};
