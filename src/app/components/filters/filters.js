(function () {
    'use strict';

    angular
        .module('angularProject')
        .filter('showLiked', function () {
            return function (items, flag) {
                var filtered = [],
                    arr = items || [];
                if (flag) {
                    filtered = arr.filter(function (el) {
                        return el.liked === true;
                    });
                } else {
                    filtered = arr;
                }
                return filtered;
            };
        })
        .filter('selectMode', function () {
            return function (input, type) {
                var out;
                if (type === 'full') {
                    out = input;
                } else if (type !== 'full' && angular.isString(input)) {
                    out = input.length > 50 ? input.substring(0, 50) + '...' : input;
                }
                return out;
            };
        });
})();