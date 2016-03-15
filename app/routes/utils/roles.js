'use strict';

module.exports = function (role) {
  return function (req, res, next) {
    console.log('check role: ' + req.user.roles + '?' + role);
    if (req.user && req.user.roles.indexOf(role) !== -1) {
      console.log('pass role check');
      next();
    } else {
      res.send(403);
    }
  };
};
