(function () {
	'use strict';

	angular
		.module('angularProject')
		.directive('slider', function () {
			return {
				restrict: 'EA',
				replace: true,
				scope: {
					slides: "="
				},
				templateUrl: 'app/components/slider/slidertemp.html',
				controller: 'SliderController',
				controllerAs: 'slider' 
			};
		})
		.directive('slidesPagination', function () {
			return {
				restrict: 'EA',
				replace: true,
				scope: {
					index: "@index",
					changesl: "&"
				},
				template: '<span class="dot" ng-click="changesl({current:+index})" title="{{+index+1}}"></span>'
			};
		})
		.directive('arrow', function () {
			return {
				restrict: 'EA',
				replace: true,
				scope: {
					changesl: "&",
					type: "@"
				},
				template: function (elem, attr) {
					// var text = attr.type === "prev" ? '&lt;' : '&gt;';
					var className = attr.type === "prev" ? 'arrow_prev' : 'arrow_next';
					return '<div class="arrow ' + className + '" ng-click="changesl({current: type})"></div>';
				}
			};
		});
})();