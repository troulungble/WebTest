'use strict';

angular.module('myApp').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',
                {
                    url: '/home',
                    templateUrl: 'view/home.html'
                })
            .state('news',
                {
                    url: '/news',
                    templateUrl: 'view/news.html',
                    controller : function($rootScope){
                        $rootScope.newsTotalNumber = 100 ;
                        $rootScope.newsCurrentPage = 1 ;

                        $rootScope.news = [
                            {
                                type:'UPDATE',
                                title:'大埔出獅',
                                id: 123456,
                                date : '2018-09-22',
                                news:false
                            },
                            {
                                type:'INFO',
                                title:'網站成立',
                                id: null,
                                date : '2018-09-22',
                                news:true
                            },
                            {
                                type:'INFO',
                                title:'網站成立',
                                id: null,
                                date : '2018-09-22',
                                news:true
                            },
                            {
                                type:'INFO',
                                title:'網站成立',
                                id: null,
                                date : '2018-09-22',
                                news:false
                            }
                        ]
                    }
                }) ;

        $urlRouterProvider.otherwise('/news');
    }
]);