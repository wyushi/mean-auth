  'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
  BasicStrategy = require('passport-http').BasicStrategy,
  User = require('mongoose').model('User');

module.exports = function() {
  // Use Basic strategy
  passport.use(new BasicStrategy(
    function(userid, password, done) {
      User.findOne({ username: userid }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.authenticate(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));
};
