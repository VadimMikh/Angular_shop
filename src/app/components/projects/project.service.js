(function() {
	'use strict';

	angular
		.module('angularProject')
		.service('ProjectsService', projectsService);

		function projectsService () {
			this.nameChangeServ = function (name, projects, id) {
				var obj = {};
				for (var i = projects.length - 1; i >= 0; i--) {
					obj = projects[i];
					if (obj.id == id) {
						obj.name = name;
					}
				}
				return obj;
			};

			this.descChangeServ = function (desc, projects, id) {
				var obj = {};
				for (var i = projects.length - 1; i >= 0; i--) {
					obj = projects[i];
					if (obj.id == id) {
						obj.desc = desc;
					}
				}
				return obj;
			};

			this.usersChangeServ = function (users, projects, id) {
				var obj = {};
				for (var i = projects.length - 1; i >= 0; i--) {
					obj = projects[i];
					if (obj.id == id) {
						obj.users = users;
					}
				}
				return obj;
			};

			this.addTask = function (val) {
				var newObj = {},
					date = new Date(),
					components = [
						date.getYear(),
						date.getMonth(),
						date.getDate(),
						date.getHours(),
						date.getMinutes(),
						date.getSeconds(),
						date.getMilliseconds()
					];

				newObj.name = val;
				newObj.done = false;
				newObj.id = components.join("");

				return newObj;
			};

			this.currentObj = function (list, param) {
				var obj = {};
				for (var i = list.length - 1; i >= 0; i--) {
					obj = list[i];
					if (obj.id == param) {
						return obj;
					}
				}
			};
		}

})();