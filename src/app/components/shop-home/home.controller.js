(function () {
    'use strict';

    angular
        .module('angularProject')
        .controller('HomeController', homeCtrl);

    function homeCtrl($log) {
        var vm = this;

        vm.cartCount = 0;

        vm.data = [{
            'id': 1,
            'title': 'Бытовая техника',
            'nodes': [
                {
                    'id': 11,
                    'title': 'Крупная бытовая техника',
                    'nodes': []
                },
                {
                    'id': 12,
                    'title': 'Оргтехника',
                    'nodes': []
                }
            ]
        }, {
            'id': 2,
            'title': 'Компьютеры',
            'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
            'nodes': [
                {
                    'id': 21,
                    'title': 'Системные блоки',
                    'nodes': []
                },
                {
                    'id': 22,
                    'title': 'Ноутбуки',
                    'nodes': []
                }
            ]
        }, {
            'id': 3,
            'title': 'Телефоны',
            'nodes': [
                {
                    'id': 31,
                    'title': 'Смартфоны',
                    'nodes': []
                }
            ]
        }];

        vm.openDir = function (id) {
            $log.info(id);
        };
}

})();