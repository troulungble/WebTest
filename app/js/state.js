'use strict';

angular.module('myApp').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',
                {
                    url: '/home',
                    templateUrl: 'view/home.html'
                })
            .state('aboutUs',
                {
                    url: '/aboutUs',
                    abstract: true,
                    template: '<ui-view/>'
                })
            .state('aboutUs.purpose',
                {
                    url: '/purpose',
                    templateUrl: 'view/aboutUs/purpose.html',
                    controller : function($rootScope){
                        $rootScope.purposeBanner = "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb" ;
                        $rootScope.purposeDescription = [
                            {
                                index:1,
                                type:"image",
                                brAmount:0,
                                content:"https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg"
                            },
                            {
                                index:2,
                                type:"text",
                                brAmount:0,
                                content:"文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~" +
                                    "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~" +
                                    "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~" +
                                    "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~" +
                                    "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~" +
                                    "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~" +
                                    "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~" +
                                    "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~"
                            },
                            {
                                index:3,
                                type:"image",
                                brAmount:0,
                                content:"https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg"
                            },
                            {
                                index:4,
                                type:"text",
                                brAmount:0,
                                content:"文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~" +
                                    "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~" +
                                    "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~" +
                                    "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~" +
                                    "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~"
                            }
                        ]
                    }
                })
            .state('aboutUs.origin',
                {
                    url: '/origin',
                    templateUrl: 'view/aboutUs/origin.html',
                    controller : function($rootScope){
                        $rootScope.originBanner = "https://i.pinimg.com/originals/94/dd/57/94dd573e4b4de604ea7f33548da99fd6.jpg" ;
                        $rootScope.originDescription = [
                            {
                                index:1,
                                type:"image",
                                brAmount:0,
                                content:"https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg"
                            },
                            {
                                index:2,
                                type:"text",
                                brAmount:0,
                                content:"文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~" +
                                    "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~" +
                                    "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~" +
                                    "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~" +
                                    "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~" +
                                    "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~" +
                                    "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~" +
                                    "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~"
                            },
                            {
                                index:3,
                                type:"image",
                                brAmount:0,
                                content:"https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg"
                            },
                            {
                                index:4,
                                type:"text",
                                brAmount:0,
                                content:"文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~" +
                                    "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~" +
                                    "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~" +
                                    "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~" +
                                    "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~"
                            }
                        ]
                    }
                })
            .state('news',
                {
                    url: '/news',
                    abstract: true,
                    template: '<ui-view/>'
                })
            .state('news.list',
                {
                    url: '/list',
                    templateUrl: 'view/news/news.html',
                    controller : function($rootScope){
                        $rootScope.newsTotalNumber = 100 ;
                        $rootScope.newsCurrentPage = 1 ;

                        $rootScope.newsList = [
                            {
                                id : 1,
                                type:'UPDATE',
                                title:'大埔出獅',
                                date : '2018-09-22',
                                news:false
                            },
                            {
                                id : 2,
                                type:'INFO',
                                title:'網站成立',
                                date : '2018-09-22',
                                news:true
                            },
                            {
                                id : 3,
                                type:'INFO',
                                title:'網站成立',
                                date : '2018-09-22',
                                news:true
                            },
                            {
                                id : 4,
                                type:'INFO',
                                title:'網站成立',
                                date : '2018-09-22',
                                news:false
                            },
                            {
                                id : 5,
                                type:'INFO',
                                title:'網站成立',
                                date : '2018-09-22',
                                news:false
                            }
                        ]
                    }
                })
            .state('news.details',
                {
                    url: '/details/:newsId',
                    templateUrl: 'view/news/newsDetails.html',
                    controller : function($rootScope, $stateParams){
                        console.info($stateParams.newsId);
                        $rootScope.news = {
                            id : 1,
                            title : "標題",
                            type: "UPDATE",
                            description : [
                                "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~",
                                "地址:1591232",
                                "時間:16599"
                            ],
                            eventId : 159,
                            images : [
                                "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb",
                                "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg",
                                "https://i.pinimg.com/originals/94/dd/57/94dd573e4b4de604ea7f33548da99fd6.jpg",
                                "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2",
                                "https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg?auto=compress&cs=tinysrgb&dpr=2",
                                "https://images.pexels.com/photos/57434/macro-nature-reflection-beautiful-57434.jpeg?auto=compress&cs=tinysrgb&dpr=2",
                                "https://images.pexels.com/photos/65644/poppy-plant-nature-macro-65644.jpeg?auto=compress&cs=tinysrgb&dpr=2",
                                "https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg",
                                "https://wallpaperbrowse.com/media/images/cat-1285634_960_720.png",
                                "https://images.wallpaperscraft.com/image/beach_tropics_sea_sand_palm_trees_sunset_84729_1280x720.jpg",
                                "https://images.wallpaperscraft.com/image/beach_tropics_sea_sand_palm_trees_sunset_beautiful_84727_1280x720.jpg",
                                "https://images.wallpaperscraft.com/image/beach_tropics_sea_sand_palm_trees_beautiful_84742_1280x720.jpg"
                            ],
                            location : [
                                22.449514,
                                114.165924
                            ],
                            date : "2018-09-09"
                        }
                    }
                })
            .state('contactUs',
                {
                    url: '/contactUs',
                    templateUrl: 'view/contactUs/contactUs.html',
                    controller : function($rootScope){
                    }
                }) ;


        $urlRouterProvider.otherwise('/home');
    }
]);