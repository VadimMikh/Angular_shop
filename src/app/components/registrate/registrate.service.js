(function() {
	'use strict';

	angular
		.module('angularProject')
		.service('Registrate', registrate);

		function registrate ($state, $log) {
			var users = angular.fromJson(localStorage.getItem('usersLoc')) || [];
				
			$log.info(users);

			this.setUser = function (name, pass, conf_pass, type) {
				var newUser = {};

				var exist = false;

				for (var i = users.length - 1; i >= 0; i--) {
					var obj = users[i];
					if (obj.name === name) {
						exist = true;
					}
				}

				if (pass === conf_pass && name && type && !exist) {
					newUser.name = name;
					newUser.pass = conf_pass;
					newUser.type = type;
					newUser.id = users.length + 1;

					users.push(newUser);

					var usersLoc = angular.toJson(users);
					localStorage.setItem('usersLoc', usersLoc);

					$state.go('login');

					return 'You have been successfully registed as ' + name;
					
				} else if (pass !== conf_pass) {
					return 'Not the same passwords';
				} else if (exist) {
					return 'User with this name already exist';
				} else {
					return 'Registration error';
				}

			}

			this.getUser = function (uName, uPass) {
				
				var exist = false;

				for (var i = users.length - 1; i >= 0; i--) {
					var obj = users[i];
					if (obj.name === uName && obj.pass === uPass) {
						var usersIdent = angular.toJson(obj);
						sessionStorage.setItem('usersIdent', usersIdent);

						exist = true;
					}
				}
				return exist;
			}
		}

})();