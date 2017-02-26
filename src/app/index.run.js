(function () {
  'use strict';

  angular
    .module('angularProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($state, $rootScope, $location, $log) {

    var root = $rootScope;

    root.$on('$locationChangeStart', function (event, next) {

      if (/category/gi.test(next)) {
        //event.preventDefault();
        $rootScope.category = true;
      } else {
        $rootScope.category = false;
      }

    });

    $log.debug('runBlock end');
  }

})();
