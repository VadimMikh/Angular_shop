(function() {
  'use strict';

  angular
    .module('angularProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, $log, $timeout, ShopService) {
    var vm = this;

     vm.cartCount = ShopService.goodsInCartCount() || 0;

     vm.addToCart = function (el) {
        ShopService.addToCart(el);
        vm.cartCount = ShopService.goodsInCartCount();
    };

    vm.test = function () {
      $timeout(function () {
        var f = ShopService.fetch();
        $log.info(f);
      }, 50);
    };
  }

})();
