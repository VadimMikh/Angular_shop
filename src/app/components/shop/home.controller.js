(function () {
    'use strict';

    angular
        .module('angularProject')
        .controller('HomeController', homeCtrl)
        .controller('CategoryController', categoryCtrl)
        .controller('ProductController', productCtrl)
        .controller('CartController', cartCtrl);

    function homeCtrl($log, $state, $rootScope, ShopService) {
        var vm = this;

        vm.cartCount = ShopService.goodsInCartCount() || 0;

        vm.data = ShopService.getSidebar();

        vm.openDir = function (product) {
            //$log.info(id);
            var params = product;
            $state.go('product', params );
        };

        vm.products = ShopService.getProduts();

        vm.enterCategory = function (id) {
            var params = {categoryId: id};
            $state.go('home.category', params );
        };

        vm.category = false;

        var root = $rootScope;
        root.$on('$locationChangeStart', function() {
            vm.category = $rootScope.category;
        });

        (function getCatStatus () {
            vm.category = $rootScope.category;
        })();

        vm.addToCart = function (el) {
            ShopService.addToCart(el);
            vm.cartCount = ShopService.goodsInCartCount();
        };

    }

    function categoryCtrl ($stateParams, $log, $rootScope, ShopService) {
        var vm = this;
        $log.info($stateParams.categoryId);
        vm.catProducts = ShopService.caterotyProducts($stateParams.categoryId);

    }

    function productCtrl ($stateParams, $log, $rootScope, ShopService) {
        var vm = this;
        var currentProduct =  ShopService.getCurrentProduct($stateParams);

        vm.name = currentProduct.name;

        vm.desc = currentProduct.description;

        vm.price = currentProduct.price;

        vm.id = currentProduct.id;

        vm.count = currentProduct.count;

        vm.inCart = false;

        vm.change = function () {
            ShopService.countChange(currentProduct, vm.count);
            if (vm.count === 0) {
                ShopService.cartItemRemove(null, vm.id);
                vm.inCart = false;
            }
        };

        (function() {
           if (ShopService.getProductInCart(currentProduct)) vm.inCart = true;
           else vm.inCart = false;
        })();

        vm.addToCart = function () {
            ShopService.addToCart(currentProduct, vm.count);
            vm.cartCount = ShopService.goodsInCartCount();
            vm.inCart = true;
        };
        
    }

    function cartCtrl ($state, $stateParams, $log, $rootScope, ShopService) {
        var vm = this;

        vm.items = ShopService.getCartProduts();

        vm.totalCnt = function () {
            return ShopService.totalCount(vm.items);
        };

        vm.totalSm = function () {
            return ShopService.totalSumm(vm.items);
        };

        vm.thanks = false;

        vm.buy = function () {
            vm.thanks = !vm.thanks;
        };

        vm.remove = function (id) {
            vm.items = ShopService.cartItemRemove(vm.items, id);
        };

        vm.openDir = function (product) {
            var params = product;
            $state.go('product', params);
        };

    }

})();