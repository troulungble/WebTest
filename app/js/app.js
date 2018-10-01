'use strict';

angular.module('myApp',[
    'ui.router',
    'ezfb',
    'ngAnimate',
    'ngTouch',
    'angularSuperGallery'
]);

angular.module('myApp').config(function(ezfbProvider) {
    ezfbProvider.setLocale('zh_TW');
    ezfbProvider.setInitParams({
        appId: 269753377206775
    });
});

angular.module('myApp').constant('constantVariable', {
    PAGE_SIZE : 15
});