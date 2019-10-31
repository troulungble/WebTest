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
            .state('contactUs',
                {
                    url: '/contactUs',
                    templateUrl: 'view/contactUs/contactUs.html',
                    resolve: {
                        content: function ($q, BackendService) {
                            var deferred = $q.defer();
                            BackendService.getContactUsPageContent().then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        }
                    },
                    controller : function($window,$rootScope, content){
                        $window.scrollTo(0, 0); ;
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