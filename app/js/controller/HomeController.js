'use strict';

angular.module('myApp').controller('HomeController',
    ["$rootScope","$scope",
    function($rootScope,$scope) {
        $scope.homeGalleryOptions = {
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

        $scope.updateNew = function(newPageNews){
            var code = "" ;
            angular.forEach(newPageNews, function (obj, key) {
                code += "<div class='news col-md-12'>" ;
                if (obj.type==='UPDATE'){
                    code += "<div class='badge badge-status left badge-warning float-left' style='margin-right: 10px''>更新" ;
                }else if (obj.type==='INFO') {
                    code += "<div class='badge badge-status left badge-info float-left' style='margin-right: 10px'>公告" ;
                }
                code += "</div>" ;
                if (obj.news){
                    code += "<span class='badge badge-status badge-danger' style='margin-left: 10px'>NEW!</span>" ;
                }
                code += "<div class='date'>" + obj.date + "</div>" ;
                code += "<a class='col-md-6 one-line-text' href='#!/news/details/" + obj.id + "'>" + obj.title + "</a>" ;
                code += "</div>" ;
            });
            angular.element(document.getElementById("newsContent")).html(code);
        }

        //init News
        $scope.updateNew($rootScope.home.news) ;
    }
    ]
);