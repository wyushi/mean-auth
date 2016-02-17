'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
  url = require('url'),
  BearerStrategy = require('passport-http-bearer').Strategy,
  Token = require('../../app/models/token.server.model'),
  User = require('../../app/models/user.server.model');

module.exports = function() {

  passport.use(new BearerStrategy(
    function(accessToken, callback) {
      Token.findOne({value: accessToken }, function (err, token) {
        if (err) { return callback(err); }

        // No token found
        if (!token) { return callback(null, false); }

        User.findOne({ _id: token.userId }, function (err, user) {
          if (err) { return callback(err); }

          // No user found
          if (!user) { return callback(null, false); }

          // Simple example with no scope
          callback(null, user, { scope: '*' });
        });
      });
    }
  ));

};
