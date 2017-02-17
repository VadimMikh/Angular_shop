(function () {
	'use strict';

	angular
		.module('angularProject')
		.directive('tasklist', function () {
            return {
                restrict: 'EA',
                replace: true,
                scope: {
                    tasks: "=",
                    remove: "&",
                    status: "&"
                },
                templateUrl: 'app/components/projects/tasklist.html'
            };
        });

})();