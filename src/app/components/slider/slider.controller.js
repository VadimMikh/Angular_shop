(function () {
    'use strict';

    angular
        .module('angularProject')
        .controller('SliderController', sliderCntrl);

    function sliderCntrl() {
        var vm = this;

        vm.activeItem = 0;

        vm.slides = [
            'assets/images/pic1.jpg',
            'assets/images/pic2.jpg',
            'assets/images/pic3.jpg',
            'assets/images/pic4.jpg',
            'assets/images/pic5.jpg',
            'assets/images/pic6.jpg',
            'assets/images/pic7.jpg',
            'assets/images/pic8.jpg',
            'assets/images/pic9.jpg',
            'assets/images/pic10.jpg'
        ];

        vm.changeSlide = function (current) {
            if (angular.isNumber(current)) {
                vm.activeItem = current;
            } else if (current === 'prev') {
                if (vm.activeItem < 1) vm.activeItem = vm.slides.length - 1;
                else vm.activeItem -= 1;

            } else if (current === 'next') {
                if (vm.activeItem >= vm.slides.length - 1) vm.activeItem = 0;
                else vm.activeItem += 1;
            }
        };
    }
})();
