(function() {
	'use strict';

	angular
		.module('angularProject')
		.controller('TAreaController', tAreaCtrl);

	function tAreaCtrl (TAreaChecker) {
		var vm = this;

		vm.text = '';
		vm.max = 100;
		vm.full = false;
		vm.counter = 100;
		vm.check = function () {
			if (vm.text.length > 90) {
				vm.full = true;
			} else {			
				vm.full = false;
			}
			if (vm.text.length > 100) {
				vm.text = TAreaChecker.stop(vm.text);
			} else {
				vm.counter = TAreaChecker.checker(vm.text, vm.max);
			}
		};
	}

})();