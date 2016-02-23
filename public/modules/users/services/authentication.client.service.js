'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', [
	function() {
		var _this = this;

		_this._data = {
			user: window.user,
		};

    _this._data.isOauthClient = function () {
      return _this._data.user && _this._data.user.roles.indexOf('oauthClient') !== -1;
    };

		return _this._data;
	}
]);
