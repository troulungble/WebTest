'use strict';

angular.module('myApp').config(['$stateProvider', '$urlRouterProvider', '$qProvider', '$translateProvider', 'LightboxProvider',
    function($stateProvider, $urlRouterProvider, $qProvider, $translateProvider,LightboxProvider) {
        $qProvider.errorOnUnhandledRejections(false) ;

        $translateProvider.useStaticFilesLoader({
            'prefix': 'locale/',
            'suffix': '.json'
        });
        $translateProvider.preferredLanguage('ZH_HK');
        $translateProvider.useSanitizeValueStrategy('escapeParameters') ;

        LightboxProvider.fullScreenMode = true ;

        $stateProvider
            .state('home',
            {
                url: '/home',
                templateUrl: 'view/home',
                controller : function($rootScope){
                    //reset message
                    $rootScope.successMessage = undefined;
                    $rootScope.errorMessage = undefined;

                    $rootScope.currentPageParentName = "/" ;
                    $rootScope.currentPagePath = 'home' ;
                    $rootScope.currentPageBreadcrumb = ['BC_HOME'] ;
                }
            })
            .state('profile',
            {
                url: '/profile',
                templateUrl: 'view/profile',
                data: {
                    css: [
                        'css/bootstrap/fileinput/fileinput.css',
                        'bootstrap/fileinput/themes/explorer-fa/theme.css'
                    ]
                },
                controller : function($rootScope, UserService){
                    //reset message
                    $rootScope.successMessage = undefined;
                    $rootScope.errorMessage = undefined;

                    $rootScope.currentPageParentName = "/" ;
                    $rootScope.currentPagePath = 'profile' ;
                    $rootScope.currentPageBreadcrumb = ['BC_PROFILE'] ;

                    UserService.refreshCurrentUser($rootScope.currentPagePath);
                }
            })
            .state('user',
                {
                url: '/user',
                templateUrl: 'view/userManagement.user',
                resolve: {
                    users: function ($q, UserService) {
                        var deferred = $q.defer();
                        UserService.loadAllUsers().then(deferred.resolve, deferred.resolve);
                        return deferred.promise;
                    },
                    userGroups: function ($q, UserGroupService) {
                        var deferred = $q.defer();
                        UserGroupService.loadAllUserGroups().then(deferred.resolve, deferred.resolve);
                        return deferred.promise;
                    }
                },
                controller : function($rootScope){
                    //reset message
                    $rootScope.successMessage = undefined;
                    $rootScope.errorMessage = undefined;

                    $rootScope.currentPageParentName = 'USER_MANAGEMENT' ;
                    $rootScope.currentPagePath = 'user' ;
                    $rootScope.currentPageBreadcrumb = ['BC_USER_MANAGEMENT','BC_USERS'] ;

                    //reset Filter
                    $rootScope.defaultParameters = undefined ;
                }
            })
            .state('userGroup',
            {
                url: '/userGroup',
                templateUrl: 'view/userManagement.userGroup',
                resolve: {
                    userGroups: function ($q, UserGroupService) {
                        var deferred = $q.defer();
                        UserGroupService.loadAllUserGroups().then(deferred.resolve, deferred.resolve);
                        return deferred.promise;
                    },
                    authorities : function ($q, AuthorityService) {
                        var deferred = $q.defer();
                        AuthorityService.loadAllAuthorities().then(deferred.resolve, deferred.resolve);
                        return deferred.promise;
                    }
                },
                controller : function($rootScope){
                    //reset message
                    $rootScope.successMessage = undefined;
                    $rootScope.errorMessage = undefined;

                    $rootScope.currentPageParentName = 'USER_MANAGEMENT' ;
                    $rootScope.currentPagePath = 'userGroup' ;
                    $rootScope.currentPageBreadcrumb = ['BC_USER_MANAGEMENT','BC_USER_GROUPS'] ;

                    //reset Filter
                    $rootScope.defaultParameters = undefined ;
                }
            })
            .state('member',
            {
                url: '/member',
                templateUrl: 'view/member.member',
                resolve: {
                    members: function ($q, MemberService) {
                        var deferred = $q.defer();
                        MemberService.loadAllMembers().then(deferred.resolve, deferred.resolve);
                        return deferred.promise;
                    }
                },
                controller : function($rootScope){
                    //reset message
                    $rootScope.successMessage = undefined;
                    $rootScope.errorMessage = undefined;

                    $rootScope.currentPageParentName = 'MEMBER' ;
                    $rootScope.currentPagePath = 'member' ;
                    $rootScope.currentPageBreadcrumb = ['BC_MEMBERS'] ;

                    //reset Filter
                    $rootScope.defaultParameters = undefined ;
                }
            })
            .state('sponsor',
            {
                url: '/sponsor',
                templateUrl: 'view/sponsor.sponsor',
                resolve: {
                    members: function ($q, SponsorService) {
                        var deferred = $q.defer();
                        SponsorService.loadAllSponsors().then(deferred.resolve, deferred.resolve);
                        return deferred.promise;
                    }
                },
                controller : function($rootScope){
                    //reset message
                    $rootScope.successMessage = undefined;
                    $rootScope.errorMessage = undefined;

                    $rootScope.currentPageParentName = 'SPONSOR' ;
                    $rootScope.currentPagePath = 'sponsor' ;
                    $rootScope.currentPageBreadcrumb = ['BC_SPONSORS'] ;

                    //reset Filter
                    $rootScope.defaultParameters = undefined ;
                }
            });

        $urlRouterProvider.otherwise('/');
    }
]);