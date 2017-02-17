(function() {
	'use strict';

	angular
		.module('angularProject')
		.controller('LoginController', loginCtrl);

		function loginCtrl (Registrate, $state, $mdToast) {
			var vm = this;

			var last = {
				bottom: false,
				top: true,
				left: false,
				right: true
			};

			vm.toastPosition = angular.extend({}, last);

			vm.getToastPosition = function () {
				sanitizePosition();

				return Object.keys(vm.toastPosition)
					.filter(function (pos) { return vm.toastPosition[pos]; })
					.join(' ');
			};

			function sanitizePosition() {
				var current = vm.toastPosition;

				if (current.bottom && last.top) current.top = false;
				if (current.top && last.bottom) current.bottom = false;
				if (current.right && last.left) current.left = false;
				if (current.left && last.right) current.right = false;

				last = angular.extend({}, current);
			}

			var pinTo = vm.getToastPosition();

			vm.login = function ($event) {
				$event.preventDefault();
				var userExist = Registrate.getUser(vm.name, vm.pass);
				if (userExist) {
					$state.go('projects');
				} else {
					$mdToast.show(
						$mdToast.simple()
							.textContent('User not exist')
							.position(pinTo)
							.hideDelay(3000)
					);
				}
			}
		}

})();