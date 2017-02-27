(function () {
    'use strict';

    angular
        .module('angularProject')
        .factory('ShopService', shopService);

    function shopService($log, $timeout, $http) {

        var goodsInCart = [];

        function getCurrent (arr, param) {
            var obj = {};
            for (var i = arr.length - 1; i >= 0; i--) {
                obj = arr[i];
                if (obj.id == param.id) {
                    return obj;
                }
            }
        }

        function getCurrentCnt (arr, elem, c) {
            //var obj = {};
            for (var i = arr.length - 1; i >= 0; i--) {
                if (arr[i].id == elem.id) {
                    arr[i].count += c;
                }
            }
        }

        function change (arr, elem, c) {
            //var obj = {};
            for (var i = arr.length - 1; i >= 0; i--) {
                if (arr[i].id == elem.id) {
                    arr[i].count = c;
                }
            }
        }

        /*var products2 = [
            {
                'id': 1,
                'title': 'Бытовая техника',
                'subCategory': [
                    {
                        'id': 11,
                        'title': 'Крупная бытовая техника',
                        'goods': [
                            {
                                name: "Холодильник Samsung",
                                description: "Большой двухкамерный холодьник",
                                category: [1, 11],
                                id: 111 
                            }
                        ]
                    },
                    {
                        'id': 12,
                        'title': 'Оргтехника',
                        'goods': [
                            {
                                name: "Принтер HP",
                                description: "Лазерный принтер",
                                category: [1, 12],
                                id: 122
                            }
                        ]
                    }
                ]
            },
            {
                'id': 2,
                'title': 'Компьютеры',
                'subCategory': [
                    {
                        'id': 21,
                        'title': 'Системные блоки',
                        'goods': [
                            {
                                name: "Системный блок Asus",
                                description: "Игоровой системный блок",
                                category: [2, 21],
                                id: 211
                            }
                        ]
                    },
                    {
                        'id': 22,
                        'title': 'Ноутбуки',
                        'goods': [
                             {
                                name: "MacBook Air pro",
                                description: "MacBool",
                                category: [2, 22],
                                id: 222
                            }
                        ]
                    }
                ]
            },
            {
                'id': 3,
                'title': 'Телефоны',
                'subCategory': [
                    {
                        'id': 31,
                        'title': 'Смартфоны',
                        'goods': [
                            {
                                name: "Samsung Galaxy S7",
                                description: "Изгогнутые края экрана",
                                category: [3, 31],
                                id: 311
                            },
                            {
                                name: "iPhone 7",
                                description: "Последняя модель iPhone",
                                category: [3, 31],
                                id: 312
                            }
                        ]
                    }
                ]
            }
        ];*/

        var data = [
            {
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
            }, 
            {
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
            }, 
            {
                'id': 3,
                'title': 'Телефоны',
                'nodes': [
                    {
                        'id': 31,
                        'title': 'Смартфоны',
                        'nodes': []
                    },
                    {
                        'id': 32,
                        'title': 'Кнопочные',
                        'nodes': []
                    }
                ]
            }
        ];

        var products = [
            {
                name: "Холодильник Samsung",
                description: "Большой двухкамерный холодьник",
                category: [1, 11],
                price: 750,
                count: 1,
                id: 111
            },
            {
                name: "Принтер HP",
                description: "Лазерный принтер",
                category: [1, 12],
                price: 70,
                count: 1,
                id: 122
            },
            {
                name: "Системный блок Asus",
                description: "Игоровой системный блок",
                category: [2, 21],
                price: 1150,
                count: 1,
                id: 211
            },
            {
                name: "MacBook Air pro",
                description: "MacBool",
                category: [2, 22],
                price: 1550,
                count: 1,
                id: 222
            },
            {
                name: "Samsung Galaxy S7",
                description: "Изгогнутые края экрана",
                category: [3, 31],
                price: 750,
                count: 1,
                id: 311
            },
            {
                name: "iPhone 7",
                description: "Последняя модель iPhone",
                category: [3, 31],
                price: 850,
                count: 1,
                id: 312
            },
            {
                name: "Nokia 3210",
                description: "Самый крутой телефон",
                category: [3, 32],
                price: 20,
                count: 1,
                id: 313
            }
        ];

        return {
            fetch: function() {
                return $timeout(function() {
                    return $http.get('app/components/shop/sidebar.json').then(function(response) {
                        $log.info('res');
                        return response.data;
                    });
                }, 30);
            },

            getSidebar: function () {
                return data;
            },

            getProduts: function () {
                return products;
            },

            getCartProduts: function () {
                return goodsInCart;
            },

            caterotyProducts: function (id) {

                var obj = {}, newArr = [];

				for (var i = products.length - 1; i >= 0; i--) {
					obj = products[i];
					if (obj.category.indexOf(parseInt(id)) != -1) {
						newArr.push(obj);
					}
				}
				return newArr;


                /*function req (arg) {
                    for (var i = 0; i < arg.length; i++) {  
                        console.info('1: '+ arg[i]['category']);
                        
                        var a = arg[i].length - 1;

                        if (arg[i]['category'] === undefined) {
                            req(arg[i][a]);
                        } else {
                            console.info('2: '+ arg[i]);
                        }
                    }
                }
                req(products2);*/
            },

            addToCart: function (el, count) {
                var cnt = count || 1;
                if (!getCurrent(goodsInCart, el)) {
                    el.count = cnt;
                    goodsInCart.push(el);
                }
                else {
                    getCurrentCnt(goodsInCart, el, cnt);
                }

                $log.info(goodsInCart);
            },

            countChange: function (el, count) {
                var cnt = count;
                change(goodsInCart, el, cnt);
            },

            goodsInCartCount: function () {
                return goodsInCart.length;
            },

            getProductInCart: function (param) {
                var cur = getCurrent(goodsInCart, param);
				return cur;
			},

            getCurrentProduct: function (param) {
                var cur = getCurrent(products, param);
				return cur;
			},

            totalCount: function (arr) {
                var totalItems = 0;
                for (var i = arr.length - 1; i >= 0; i--) {
                    totalItems += arr[i].count;
                }
                return totalItems;
            },

            totalSumm: function (arr) {
                var totalSumm = 0;
                for (var i = arr.length - 1; i >= 0; i--) {
                    totalSumm += arr[i].count * arr[i].price;
                }
                return totalSumm;
            },

            cartItemRemove: function (array, id) {
                var arr = array || goodsInCart;
                var newArr = arr.filter(function (el) {
                    return el.id !== id;
                });
                goodsInCart = newArr;
                return newArr;
            }
        };
    }

})();