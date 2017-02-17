(function() {
	'use strict';

	angular
		.module('angularProject')
		.factory('CurrencyExchange', currencyExchangeFactory);

	function currencyExchangeFactory () {
		var result, curs, temp;

		return {
			exchange: function (firstVal, secondVal, summ) {
				if (firstVal === 'dol' && secondVal === 'eur') curs = 0.7;
				if (firstVal === 'dol' && secondVal === 'pnd') curs = 0.6;
				if (firstVal === 'eur' && secondVal === 'dol') curs = 1.3;
				if (firstVal === 'eur' && secondVal === 'pnd') curs = 0.8;
				if (firstVal === 'pnd' && secondVal === 'dol') curs = 1.75;
				if (firstVal === 'pnd' && secondVal === 'eur') curs = 1.45;
				if (firstVal === secondVal) curs = 1;

				temp = summ*curs;

				result = temp.toFixed(2);

				if (summ === '' || isNaN(result)) result = 0;

				return result;
			}
		}
	}

})();