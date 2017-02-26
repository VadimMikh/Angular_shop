(function () {
  'use strict';

  angular
    .module('angularProject')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      /*.state('home', {
        url: '/',
        templateUrl: 'app/components/shop/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })*/
      .state('home', {
        url: '/',
        views: {
           "": { 
            templateUrl: 'app/main/main.html'
          },
          "inner@home": {
            templateUrl: 'app/components/shop/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
           }
        }
      })
      .state('home.category', {
        url: "category/:categoryId",
        templateUrl: 'app/components/shop/category.html',
        controller: 'CategoryController',
        controllerAs: 'category'
      })
      .state('product', {
        url: "/product/:id",
        templateUrl: 'app/components/shop/product.html',
        controller: 'ProductController',
        controllerAs: 'product'
      })
      .state('cart', {
        url: "/cart",
        templateUrl: 'app/components/shop/cart.html',
        controller: 'CartController',
        controllerAs: 'cart'
      });
     /* .state("otherwise", {
        url: "*path",
        templateUrl: "app/main/error.html"
      });*/

    $urlRouterProvider.otherwise('/');
  }

})();
