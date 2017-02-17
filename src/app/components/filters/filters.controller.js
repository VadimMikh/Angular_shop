(function () {
    'use strict';

    angular
        .module('angularProject')
        .controller('FilmsController', filmsCtrl);

    function filmsCtrl($log, $filter, ProjectsService, showLikedFilter) {
        var vm = this;

        vm.films = angular.fromJson(localStorage.getItem('locFilms')) || [
            {
                id: 1,
                name: 'Game of Trones',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nisi alias maiores. Quo ullam, explicabo maxime fuga beatae temporibus, cupiditate officiis dolorem nihil eius quidem ipsam ut deleniti quasi autem eum eligendi accusamus voluptates, doloribus alias veniam perferendis nobis voluptatibus? Nostrum in laborum cumque facilis delectus sint, nam quae fugit quia qui doloribus neque officia expedita aperiam sunt suscipit aliquid optio provident tenetur, voluptatibus ipsum esse similique, est velit! Culpa.',
                picture: 'http://images.techtimes.com/data/images/full/251811/games-of-thrones.png',
                liked: true
            },
            {
                id: 2,
                name: 'Breaking Bad',
                desc: 'Tenetur nisi alias maiores. Quo ullam, explicabo maxime fuga beatae temporibus, cupiditate officiis dolorem nihil eius quidem ipsam ut deleniti quasi autem eum eligendi accusamus voluptates, doloribus alias veniam perferendis nobis voluptatibus? Nostrum in laborum cumque facilis delectus sint, nam quae fugit quia qui doloribus neque officia expedita aperiam sunt suscipit aliquid optio provident tenetur, voluptatibus ipsum esse similique, est velit! Culpa.',
                picture: 'http://s1.dmcdn.net/WsJaZ.jpg',
                liked: false
            },
            {
                id: 3,
                name: 'Vikings',
                desc: 'Quo ullam, explicabo maxime fuga beatae temporibus, cupiditate officiis dolorem nihil eius quidem ipsam ut deleniti quasi autem eum eligendi accusamus voluptates, doloribus alias veniam perferendis nobis voluptatibus? Nostrum in laborum cumque facilis delectus sint, nam quae fugit quia qui doloribus neque officia expedita aperiam sunt suscipit aliquid optio provident tenetur, voluptatibus ipsum esse similique, est velit! Culpa.',
                picture: 'http://www.merchandisingplaza.co.uk/137105/Poster-Vikings-Vikings-Grid-Maxi-Poster-s.jpg',
                liked: false
            }
        ];

        vm.mode = 'full';

        vm.likeSwitch = function (id) {
            var curObj = ProjectsService.currentObj(vm.films, id);
            curObj.liked = !curObj.liked;

            var filmsListNew = angular.toJson(vm.films);
            localStorage.setItem('locFilms', filmsListNew);
        };

        vm.likedFl = false;
        vm.nameSorted = false;
        vm.descSorted = false;

        vm.order = null;

        vm.showLiked = function () {
            vm.likedFl = !vm.likedFl;
        };

        vm.orderByName = function () {
            if (!vm.nameSorted) {
                vm.order = ('name');
                vm.nameSorted = true;
                vm.descSorted = false;
            } else {
                vm.order = null;
                if (vm.liked) vm.films = showLikedFilter(vm.films);
                vm.nameSorted = false;
            }
        };

        vm.orderByDesc = function () {
            if (!vm.descSorted) {
                vm.order= ('desc');
                vm.descSorted = true;
                vm.nameSorted = false;
            } else {
                vm.order = null;
                if (vm.liked) vm.films = showLikedFilter(vm.films);
                vm.descSorted = false;
            }
        };

    }
})();