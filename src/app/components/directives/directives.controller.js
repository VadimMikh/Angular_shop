(function() {
	'use strict';

	angular
		.module('angularProject')
		.controller('Dir1Controller', function () {
			var vm = this;
			vm.name = "Film1";
			vm.desc = "Desc1";
		})
		.controller('Dir2Controller', function () {
			var vm = this;
			vm.name = "Film2";
			vm.desc = "Desc2";
		})
		.controller('Dir3Controller', function () {
			var vm = this;
			vm.name = "Film3";
			vm.desc = "Desc3";
		})
		.directive('film', function () {
			return {
				restrict: 'E',
				replace: true,
			vm: {
					name: '@',
					desc: '@'
				},
				template: '<div><h1>{{dirItem.name}}</h1><p>{{dirItem.desc}}</p></div>'
			}
		});
})();