'use strict';

angular.module('myApp').config(['$stateProvider', '$urlRouterProvider', 'constantVariable', "$httpProvider",
    function($stateProvider, $urlRouterProvider, constantVariable, $httpProvider) {
        if (!$httpProvider.defaults.headers.get){
            $httpProvider.defaults.headers.get = {} ;
        }
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest' ;
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache' ;
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache' ;

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home',
                {
                    url: '/home',
                    templateUrl: 'view/home.html',
                    resolve: {
                        content: function ($q, BackendService) {
                            var deferred = $q.defer();
                            BackendService.getHomePageContent().then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        }
                    },
                    controller : function($window, $rootScope, content){
                        $window.scrollTo(0, 0);
                        $rootScope.home = content ;
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
                    resolve: {
                        banner: function ($q, BackendService) {
                            var deferred = $q.defer();
                            BackendService.getBanner("PURPOSE").then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        },
                        content: function ($q, BackendService) {
                            var deferred = $q.defer();
                            BackendService.getPurposePageContent().then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        }
                    },
                    controller : function($window, $rootScope,constantVariable, banner, content){
                        $window.scrollTo(0, 0);

                        if (banner)
                            $rootScope.purposeBanner = constantVariable.BACKEND_BANNER_URL + "PURPOSE" ;
                        else
                            $rootScope.purposeBanner = '' ;

                        $rootScope.purposeDescription = content ;
                    }
                })
            .state('aboutUs.origin',
                {
                    url: '/origin',
                    templateUrl: 'view/aboutUs/origin.html',
                    resolve: {
                        banner: function ($q, BackendService) {
                            var deferred = $q.defer();
                            BackendService.getBanner("ORIGIN").then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        },
                        content: function ($q, BackendService) {
                            var deferred = $q.defer();
                            BackendService.getOriginPageContent().then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        }
                    },
                    controller : function($window, $rootScope, constantVariable, banner, content){
                        $window.scrollTo(0, 0);

                        if (banner)
                            $rootScope.originBanner = constantVariable.BACKEND_BANNER_URL + "ORIGIN" ;
                        else
                            $rootScope.originBanner = '' ;

                        $rootScope.originDescription = content ;
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
                    resolve: {
                        banner: function ($q, BackendService) {
                            var deferred = $q.defer();
                            BackendService.getBanner("NEWS").then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        },
                        content: function ($q, BackendService) {
                            var deferred = $q.defer();
                            BackendService.getNewsPageContent(0).then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        }
                    },
                    controller : function($window, $rootScope, constantVariable, banner, content){
                        $window.scrollTo(0, 0);
                        if (banner)
                            $rootScope.newsBanner = constantVariable.BACKEND_BANNER_URL + "NEWS" ;
                        else
                            $rootScope.newsBanner = '' ;

                        $rootScope.newsTotalNumber = content.totalNumber ;
                        $rootScope.newsCurrentPage = content.currentPage ;
                        $rootScope.newsList = content.news ;
                    }
                })
            .state('news.details',
                {
                    url: '/details/:id',
                    templateUrl: 'view/news/details.html',
                    resolve: {
                        content: function ($q, BackendService,$stateParams) {
                            var deferred = $q.defer();
                            BackendService.getNewsDetailsPageContent($stateParams.id).then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        }
                    },
                    controller : function($window, $rootScope, $stateParams, constantVariable, content){
                        $window.scrollTo(0, 0);
                        $rootScope.news = content ;
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
                    resolve: {
                        banner: function ($q, BackendService) {
                            var deferred = $q.defer();
                            BackendService.getBanner("EVENTS").then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        },
                        content: function ($q, BackendService) {
                            var deferred = $q.defer();
                            BackendService.getEventsPageContent(0).then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        }
                    },
                    controller : function($window, $rootScope, constantVariable, banner, content){
                        $window.scrollTo(0, 0);
                        if (banner)
                            $rootScope.eventsBanner = constantVariable.BACKEND_BANNER_URL + "EVENTS" ;
                        else
                            $rootScope.eventsBanner = '' ;
                        $rootScope.eventsList = content ;
                        $rootScope.pagingIndex = 0 ;
                    }
                })
            .state('events.details',
                {
                    url: '/details/:id',
                    templateUrl: 'view/events/details.html',
                    resolve: {
                        content: function ($q, BackendService,$stateParams) {
                            var deferred = $q.defer();
                            BackendService.getEventDetailsContent($stateParams.id).then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        }
                    },
                    controller : function($window, $rootScope, $stateParams, constantVariable, content){
                        $window.scrollTo(0, 0);
                        $rootScope.event = content ;
                    }
                })
            .state('clients',
                {
                    url: '/clients',
                    templateUrl: 'view/clients/clients.html',
                    resolve: {
                        banner: function ($q, BackendService) {
                            var deferred = $q.defer();
                            BackendService.getBanner("CLIENTS").then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        },
                        content: function ($q, BackendService) {
                            var deferred = $q.defer();
                            BackendService.getClientsPageContent().then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        }
                    },
                    controller : function($window, $rootScope, banner, content){
                        $window.scrollTo(0, 0);
                        if (banner)
                            $rootScope.clientsBanner = constantVariable.BACKEND_BANNER_URL + "CLIENTS" ;
                        else
                            $rootScope.clientsBanner = '' ;
                        $rootScope.clientsDescription = content ;
                    }
                })
            .state('contactUs',
                {
                    url: '/contactUs',
                    templateUrl: 'view/contactUs/contactUs.html',
                    resolve: {
                        banner: function ($q, BackendService) {
                            var deferred = $q.defer();
                            BackendService.getBanner("CONTACT_US").then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        },
                        content: function ($q, BackendService) {
                            var deferred = $q.defer();
                            BackendService.getContactUsPageContent().then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        }
                    },
                    controller : function($window,$rootScope,banner, content){
                        $window.scrollTo(0, 0);
                        if (banner)
                            $rootScope.contactUsBanner = constantVariable.BACKEND_BANNER_URL + "CONTACT_US" ;
                        else
                            $rootScope.contactUsBanner = '' ;
                        $rootScope.contactUsDescription = content ;
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
    }
]);