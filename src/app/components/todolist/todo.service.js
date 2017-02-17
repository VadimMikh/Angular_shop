(function() {

	angular
		.module('angularProject')
		.factory('TodoFactory', todoFactory);

	/** @ngInject */
	function todoFactory() {
		var tasks = [],
			doneTasks = [];
			
		return {
			addItem: function (val) {
				if (val !== '' && val) {
					tasks.push(val.task);
					return tasks;
				}
				return tasks;
			},
			removeItem: function (el) {
				var ind = el.$index;
				tasks.splice(ind, 1);
				return tasks;
			},
			doneItem: function (el) {
				var ind = el.$index;
				tasks.splice(ind, 1);
				doneTasks.push(el.task);
				this.tasksT = tasks;
				this.tasksTDone = doneTasks;
			},
			unDoneItem: function (el) {
				var ind = el.$index;
				doneTasks.splice(ind, 1);
				tasks.push(el.task);
				this.tasksT = tasks;
				this.tasksTDone = doneTasks;
			},
			removeDoneItem: function (el) {
				var ind = el.$index;
				doneTasks.splice(ind, 1);
				return doneTasks;
			}
		};
	}

})();