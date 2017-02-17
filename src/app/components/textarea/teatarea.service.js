(function() {
	'use strict';

	angular
		.module('angularProject')
		.service('TAreaChecker', tAreaCheckerService);

	function tAreaCheckerService () {
		var newCount;

		this.checker = function (val, max) {
			var l = val.length;
			newCount = max - l;
			return newCount;
		};

		this.stop = function (val) {
			var arr = Array.prototype.slice.call(val);
			arr.pop();
			val = arr.join('');
			return val;
		}; 
	}

})();