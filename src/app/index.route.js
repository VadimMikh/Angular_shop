(function () {
  'use strict';

  angular
    .module('angularProject')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/components/shop-home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
        // views: { 
        //   "": { templateUrl: 'app/components/projects/projects.html' },
        //   "projectList@projects": { templateUrl: 'app/components/projects/projectlist.html' },
        //   "userData@projects": { templateUrl: 'app/components/projects/userdata.html' }
      });
     /* .state("otherwise", {
        url: "*path",
        templateUrl: "app/main/error.html"
      });*/

    $urlRouterProvider.otherwise('/');
  }

})();
