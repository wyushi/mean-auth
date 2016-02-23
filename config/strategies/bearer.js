'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
  url = require('url'),
  BearerStrategy = require('passport-http-bearer').Strategy,
  Token = require('mongoose').model('Token'),
  User = require('mongoose').model('User');

module.exports = function() {

  passport.use(new BearerStrategy (
    function(accessToken, callback) {
      console.log('bearer auth: ' + accessToken);
      Token.findOne({value: accessToken }, function (err, token) {
        if (err) { return callback(err); }

        // No token found
        if (!token) { return callback(null, false); }

        console.log('user: ' + token.userId);

        User.findOne({ _id: token.userId }, function (err, user) {
          if (err) { return callback(err); }

          // No user found
          if (!user) { return callback(null, false); }
          console.log('user: ' + user);

          // Simple example with no scope
          callback(null, user);
        });
      });
    }
  ));

};
