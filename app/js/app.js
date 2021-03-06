'use strict';

var app = angular.module('myApp',[
    'ui.router',
    'ui.router.state.events',
    'ngAnimate',
    'ngTouch',
    'angularSuperGallery',
    'angular-spinkit',
    'bw.paging'
]);

app.constant('constantVariable', {
    PAGE_SIZE : 15,
    BACKEND_URL : "http://localhost:<...>/<...>/webPageApi",
    BACKEND_HOME : "/home",
    BACKEND_CONTACT_US : "/contactUs",
});

app.filter('range', function() {
    return function(input, total) {
        total = parseInt(total);

        for (var i=0; i<total; i++) {
            input.push(i);
        }

        return input;
    };
});

app.run(function($rootScope){
    $rootScope.loading = true ;
    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams){
            if ($rootScope.loading) {
                $rootScope.loading = true ;
            }
        }
    );

    $rootScope
        .$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams){
                if ($rootScope.loading){
                    $rootScope.loading = false ;
                }
            });
});