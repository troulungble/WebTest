'use strict';

angular.module('myApp',[
    'ui.router',
    'ezfb'
]);

angular.module('myApp').config(function(ezfbProvider) {
    ezfbProvider.setLocale('zh_TW');
    ezfbProvider.setInitParams({
        appId: 269753377206775
    });
});