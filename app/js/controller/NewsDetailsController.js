'use strict';

angular.module('myApp').controller('NewsDetailsController',
    ["$rootScope","$scope",
    function($rootScope,$scope) {
        console.info("NewsDetailsController") ;

        if ($rootScope.news.mapLocation) {
            $scope.newsDetailsUluru = {lat: $rootScope.news.mapLocation.lat, lng: $rootScope.news.mapLocation.lng};
            var dom_el = document.querySelector('[ng-controller="NewsDetailsController"]');
            var ng_el = angular.element(dom_el);
            var ng_el_scope = ng_el.scope();
            var newsDetailsUluru = ng_el_scope.newsDetailsUluru;
        }

        $scope.newsGalleryOptions = {
            "baseUrl": "",
            "preloadNext": true,
            "preloadDelay": 420,
            "theme": "whitegold",
            "thumbnail": {
                "height": 50, // thumbnail image height in pixel
                "index": false, // show index number on thumbnail
                "enabled": true, // enable/disable thumbnails
                "dynamic": false, // if true thumbnails visible only when mouseover
                "autohide": true, // hide thumbnail component when single image
                "click": {
                    "select": true, // set selected image when true
                    "modal": false // open modal when true
                },
                "hover": {
                    "preload": false, // preload image on mouseover
                    "select": false // set selected image on mouseover when true
                },
            },
            "modal": {
                "caption": {
                    "visible": true,
                    "position": "bottom"
                },
                "header": {
                    "enabled": true,
                    "dynamic": false
                },
                "transition": "rotateLR",
                "thumbnail": {
                    "height": 77,
                    "index": true
                }
            },
            "image": {
                "click": {
                    "modal": false
                },
                "transition": "rotateLR",
                "size": 'contain'
            },
            "autoplay": {
                enabled: true, // slideshow play enabled/disabled
                delay: 5000 // autoplay delay in millisecond
            },
        };
    }
    ]
);