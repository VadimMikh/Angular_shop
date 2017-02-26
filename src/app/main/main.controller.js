(function() {
  'use strict';

  angular
    .module('angularProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, ShopService) {
    var vm = this;

     vm.cartCount = ShopService.goodsInCartCount() || 0;

     vm.addToCart = function (el) {
        ShopService.addToCart(el);
        vm.cartCount = ShopService.goodsInCartCount();
    };
  }

})();
