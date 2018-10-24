'use strict';

angular.module('myApp').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',
                {
                    url: '/home',
                    templateUrl: 'view/home.html',
                    controller : function($window, $rootScope){
                        $window.scrollTo(0, 0);
                        $rootScope.home = {
                            images : [
                                "http://directremovals.ie/wp-content/uploads/2015/05/bannerRED2.png",
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
                            news : [
                                {
                                    id : 1,
                                    type:'UPDATE',
                                    title:'大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大',
                                    date : '2018-09-22',
                                    news:true
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
                            ],
                            events : [
                                {
                                    id : 99,
                                    imageUrl : "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg",
                                    date : "2018-10-11",
                                    name : "99"
                                },
                                {
                                    id : 98,
                                    imageUrl : "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2",
                                    date : "2018-10-12",
                                    name : "98"
                                },
                                {
                                    id : 97,
                                    imageUrl : "https://images.pexels.com/photos/65644/poppy-plant-nature-macro-65644.jpeg?auto=compress&cs=tinysrgb&dpr=2",
                                    date : "2018-10-27",
                                    name : "97"
                                }
                            ]
                        }
                    }
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
                    controller : function($window, $rootScope){
                        $window.scrollTo(0, 0);
                        $rootScope.purposeBanner = '' ;
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
                    controller : function($window, $rootScope){
                        $window.scrollTo(0, 0);
                        $rootScope.originBanner =  '' ;
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
                                content:"https://i.pinimg.com/originals/94/dd/57/94dd573e4b4de604ea7f33548da99fd6.jpg"
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
                    templateUrl: 'view/news/list.html',
                    controller : function($window, $rootScope){
                        $window.scrollTo(0, 0);
                        $rootScope.newsBanner = null ;
                        $rootScope.newsTotalNumber = 100 ;
                        $rootScope.newsCurrentPage = 1 ;

                        $rootScope.newsList = [
                            {
                                id : 1,
                                type:'EVENT',
                                title:'大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大',
                                date : '2018-09-22',
                                news:true
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
                            }
                        ]
                    }
                })
            .state('news.details',
                {
                    url: '/details/:id',
                    templateUrl: 'view/news/details.html',
                    controller : function($window, $rootScope, $stateParams){
                        $window.scrollTo(0, 0);
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
                            mapLocation : {lat:22.449514, lng:114.165924},
                            date : "2018-09-09"
                        }
                    }
                })
            .state('events',
                {
                    url: '/events',
                    abstract: true,
                    template: '<ui-view/>'
                })
            .state('events.list',
                {
                    url: '/list',
                    templateUrl: 'view/events/list.html',
                    controller : function($window, $rootScope){
                        $window.scrollTo(0, 0);
                        $rootScope.eventsBanner = '' ;
                        $rootScope.eventsList = [
                            {
                                id : 99,
                                imageUrl : "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg",
                                date : "2018-10-11",
                                name : "99"
                            },
                            {
                                id : 98,
                                imageUrl : "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2",
                                date : "2018-10-12",
                                name : "98"
                            },
                            {
                                id : 97,
                                imageUrl : "https://images.pexels.com/photos/65644/poppy-plant-nature-macro-65644.jpeg?auto=compress&cs=tinysrgb&dpr=2",
                                date : "2018-10-27",
                                name : "97"
                            },
                            {
                                id : 96,
                                imageUrl : "https://images.wallpaperscraft.com/image/beach_tropics_sea_sand_palm_trees_sunset_beautiful_84727_1280x720.jpg",
                                date : "2018-10-14",
                                name : "96"
                            }
                        ]
                        $rootScope.pagingIndex = 1 ;
                    }
                })
            .state('events.details',
                {
                    url: '/details/:id',
                    templateUrl: 'view/events/details.html',
                    controller : function($window, $rootScope, $stateParams){
                        $window.scrollTo(0, 0);
                        $rootScope.event = {
                            name : "出獅",
                            description : "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~\n" +
                                "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~\n"+
                                "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~\n"+
                                "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~\n"+
                                "文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~文字~\n",
                            date : "2018-10-14",
                            images : [
                                "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb",
                                "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg",
                                "https://i.pinimg.com/originals/94/dd/57/94dd573e4b4de604ea7f33548da99fd6.jpg",
                                "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2",
                                "https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg?auto=compress&cs=tinysrgb&dpr=2",
                                "https://images.pexels.com/photos/57434/macro-nature-reflection-beautiful-57434.jpeg?auto=compress&cs=tinysrgb&dpr=2"
                            ],
                            youtubes : [
                                "https://www.youtube.com/watch?v=XTaoHq0phs0",
                                "https://www.youtube.com/watch?v=yiDp4YAfVX0",
                                "https://www.youtube.com/watch?v=-Pb7XRisQUo"
                            ]
                        }
                    }
                })
            .state('clients',
                {
                    url: '/clients',
                    templateUrl: 'view/clients/clients.html',
                    controller : function($window, $rootScope){
                        $window.scrollTo(0, 0);
                        $rootScope.clientsBanner = '' ;
                    }
                })
            .state('contactUs',
                {
                    url: '/contactUs',
                    templateUrl: 'view/contactUs/contactUs.html',
                    controller : function($window,$rootScope){
                        $window.scrollTo(0, 0);
                        $rootScope.contactUsBanner = '' ;
                        $rootScope.contactUsDescription = [
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
                                content:"聯絡人: 徐志洪 師傅"
                            },
                            {
                                index:3,
                                type:"text",
                                brAmount:0,
                                content:"電話: (852) 9489 3963"
                            },
                            {
                                index:4,
                                type:"text",
                                brAmount:0,
                                content:"Email: fungfotong.hk@gmail.com"
                            },
                            {
                                index:5,
                                type:"text",
                                brAmount:0,
                                content:"地址: 大埔XXX"
                            }
                        ]
                    }
                })
            .state('disclaimer',
                {
                    url: '/disclaimer',
                    templateUrl: 'view/disclaimer.html',
                    controller : function($window){
                        $window.scrollTo(0, 0);
                    }
                })
            .state('copyright',
                {
                    url: '/copyright',
                    templateUrl: 'view/copyright.html',
                    controller : function($window){
                        $window.scrollTo(0, 0);
                    }
                })

        $urlRouterProvider.otherwise('/home');
    }
]);