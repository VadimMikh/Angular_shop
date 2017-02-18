(function() {
  'use strict';

  angular
    .module('angularProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($state, $rootScope, $location, $log) {
    $log.debug('runBlock end');
  }

})();
