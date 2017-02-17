(function() {
  'use strict';

  angular
    .module('angularProject')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider/*, $urlRouterProvider*/) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/components/login/login.html',
        controller: 'LoginController',
        controllerAs: 'user'
      })
      .state('registrate', {
        url: '/registrate',
        templateUrl: 'app/components/registrate/registrate.html',
        controller: 'RegistrateController',
        controllerAs: 'reg'
      })
      .state('old', {
        url: '/old',
        templateUrl: 'app/main/main.html'
      })
      .state('projects', {
        url: '/',
        views: { 
          "": { templateUrl: 'app/components/projects/projects.html' },
          "projectList@projects": { templateUrl: 'app/components/projects/projectlist.html' },
          "userData@projects": { templateUrl: 'app/components/projects/userdata.html' }
        }
      })
      .state('projectsItem', {
        url: "/project/:projectId",
        templateUrl: 'app/components/projects/project_item.html'
      })
      .state('projectsItem.inner', {
        url: "/tasklist",
        templateUrl: 'app/components/projects/tasklist.tpl.html',
        controller: 'ProjectPageInnerController',
        controllerAs: 'tasklist'
      })
      .state('directives', {
        url: "/dirs",
        templateUrl: 'app/components/directives/directives.html'
      })
      .state('slider', {
        url: "/slider",
        templateUrl: 'app/components/slider/slider.html'
      })
      .state('films', {
        url: "/films",
        templateUrl: 'app/components/filters/films.html'
      })
      .state("otherwise", {
        url: "*path",
        templateUrl: "app/main/error.html"
      });

    //$urlRouterProvider.otherwise('/login');
  }

})();
