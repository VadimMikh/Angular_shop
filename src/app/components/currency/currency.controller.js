(function() {
	'use strict';

	angular
		.module('angularProject')
		.controller('CurrencyController', currencyExchangeCtrl);

	function currencyExchangeCtrl (CurrencyExchange) {
		var vm = this;

		vm.curr1 = '';
		vm.curr2 = '';
		vm.summ = '';
		vm.result = '';

		vm.count = function () {
			if (vm.curr1 !== '' && vm.curr2 !== '') {
				vm.result = CurrencyExchange.exchange(vm.curr1, vm.curr2, vm.summ);
			}
		}
	}

})();