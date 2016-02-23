'use strict';

module.exports = function (role) {
  return function (req, res, next) {
    if (req.user && req.user.roles.indexOf(role) !== -1) {
      next();
    } else {
      res.send(403);
    }
  };
};
