(function () {
	'use strict';

	angular
		.module('angularProject')
		.controller('RegistrateController', registrationCtrl);

	function registrationCtrl($mdToast, Registrate) {
		var vm = this;

		vm.regUser = function () {
			var status = Registrate.setUser(vm.name, vm.pass, vm.conf_pass, vm.type);
			Registrate.setUser(vm.name, vm.pass, vm.conf_pass, vm.type);

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

			$mdToast.show(
				$mdToast.simple()
					.textContent(status || 'error')
					.position(pinTo)
					.hideDelay(3000)
			);
		};
	}

})();