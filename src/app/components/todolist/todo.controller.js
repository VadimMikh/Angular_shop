(function() {
	'use strict';

	angular
		.module('angularProject')
		.controller('TodoController', toDoController);

	/** @ngInject */
	function toDoController(TodoFactory) {
		var vm = this;

		vm.notEmpty = false;
		vm.doneNotEmpty = false;

		vm.task = '';
		vm.tasks = [];
		vm.doneTasks = [];

		vm.clear = function () {
			return vm.task = '';
		}
		vm.add = function (val) {
			if (val) {
				vm.tasks = TodoFactory.addItem(val);
				_headerToggler(vm.tasks);	
			}
		}
		vm.remove = function(el) {
			vm.tasks = TodoFactory.removeItem(el);
			_headerToggler(vm.tasks);
		}
		vm.done = function (el) {
			TodoFactory.doneItem(el);
			vm.tasks = TodoFactory.tasksT;
			vm.doneTasks = TodoFactory.tasksTDone;
			_headerToggler(vm.tasks);
			_doneHeaderToggler(vm.doneTasks);
		}
		vm.unDone = function (el) {
			TodoFactory.unDoneItem(el);
			vm.tasks = TodoFactory.tasksT;
			vm.doneTasks = TodoFactory.tasksTDone;
			_headerToggler(vm.tasks);
			_doneHeaderToggler(vm.doneTasks);
		}
		vm.removeDone = function(el) {
			vm.doneTasks = TodoFactory.removeDoneItem(el);
			_doneHeaderToggler(vm.doneTasks);
		}

		function _headerToggler () {
			if (vm.tasks.length) {	
				vm.notEmpty = true;
			} else  {
				vm.notEmpty = false;
			}
		}

		function _doneHeaderToggler () {
			if (vm.doneTasks.length) {	
				vm.doneNotEmpty = true;
			} else  {
				vm.doneNotEmpty = false;
			}
		}
	}

})();