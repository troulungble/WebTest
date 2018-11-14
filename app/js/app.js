'use strict';

angular.module('myApp',[
    'ui.router',
    'ezfb',
    'ngAnimate',
    'ngTouch',
    'angularSuperGallery',
    'ngYoutubeEmbed'
]);

angular.module('myApp').config(function(ezfbProvider) {
    ezfbProvider.setLocale('zh_TW');
    ezfbProvider.setInitParams({
        appId: 269753377206775
    });
});

angular.module('myApp').constant('constantVariable', {
    PAGE_SIZE : 15,
    BACKEND_URL : "http://localhost:4260/adminPortal/webPageApi",
    BACKEND_HOME : "/home",
    BACKEND_PURPOSE: "/purpose",
    BACKEND_ORIGIN : "/origin",
    BACKEND_NEWS : "/news/",
    BACKEND_NEWS_DETAILS : "/newsDetails/",
    BACKEND_EVENTS : "/events/",
    BACKEND_EVENT_DETAILS : "/eventDetails/",
    BACKEND_CLIENTS : "/clientUs",
    BACKEND_CONTACT_US : "/contactUs",
    BACKEND_BANNER_URL : "http://localhost:4260/adminPortal/downloadImages/banner/",
});

angular.module('myApp').filter('range', function() {
    return function(input, total) {
        total = parseInt(total);

        for (var i=0; i<total; i++) {
            input.push(i);
        }

        return input;
    };
});
// angular.module('myApp').run(function($rootScope) {
//     $rootScope.range = function(min, max, step) {
//         step = step || 1;
//         var input = [];
//         for (var i = min; i <= max; i += step) {
//             input.push(i);
//         }
//         console.info(input) ;
//         return input;
//     };
// });
