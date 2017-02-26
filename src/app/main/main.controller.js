(function() {
  'use strict';

  angular
    .module('angularProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(ShopService) {
    var vm = this;

     vm.cartCount = ShopService.goodsInCartCount() || 0;
  }

})();
