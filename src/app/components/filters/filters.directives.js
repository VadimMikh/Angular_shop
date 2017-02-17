(function () {
	'use strict';

	angular
		.module('angularProject')
		.directive('filmlist', function () {
            return {
                restrict: "EA",
                replace: true,
                scope: {
                    status: "&",
                    films: "=",
                    order: "=",
                    liked: "=",
                    mode: "="
                },
                templateUrl: "app/components/filters/filmlist.html"
            };
        });

})();