(function() {
  'use strict';

  angular
    .module('angularProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($state, $rootScope, $location, $log) {

		var usersIdent1 = angular.fromJson(sessionStorage.getItem('usersIdent')) || '';
		var projectsListOld = angular.fromJson(localStorage.getItem('projectsList'));

		$log.debug(projectsListOld);

		//var user = usersIdent1.name;

		if (!projectsListOld) {
			var projectsList = [
			{
				name: "Project1",
				desc: "Dedcription1",
				id: 1,
				users: [1,2,3,4],
				tasks: [
					{
						id: 1,
						name: 'Test1',
						done: false
					}
				]
			},
			{
				name: "Project2",
				desc: "Dedcription2",
				id: 2,
				users: [1,2,3,4],
				tasks: [
					{
						id: 2,
						name: 'Test2',
						done: false
					}
				]
			},
			{
				name: "Project3",
				desc: "Dedcription3",
				id: 3,
				users: [1,2,3,4],
				tasks: [
					{
						id: 3,
						name: 'Test3',
						done: false
					}
				]
			}
		];
		var plTemp = angular.toJson(projectsList);
		localStorage.setItem('projectsList', plTemp);
	}


		if (!usersIdent1.name) {
			$location.path('/login');
		}

		var root = $rootScope;

		root.$on('$locationChangeStart', function(event, next) {
			var usersIdent2 = angular.fromJson(sessionStorage.getItem('usersIdent')) || '';
			if (angular.isUndefined(usersIdent2.name) && !/registrate/gi.test(next)) {
				//event.preventDefault();
				$state.go('login');
			}
		});

    $log.debug('runBlock end');
  }

})();
