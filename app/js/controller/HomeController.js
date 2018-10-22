'use strict';

angular.module('myApp').controller('HomeController',
    ["$rootScope","$scope",
    function($rootScope,$scope) {
        $scope.homeGalleryOptions = {
            debug: false, // image load, autoplay, etc. info in console.log
            hashUrl: true, // enable/disable hash usage in url (#asg-nature-4)
            baseUrl: '', // url prefix
            duplicates: false, // enable or disable same images (url) in gallery
            fields: {
                source: {
                    modal: 'url', // required, image url for modal component (large size)
                    panel: 'url', // image url for panel component (thumbnail size)
                    image: 'url', // image url for image (medium or custom size)
                    placeholder: null // image url for preload lowres image
                },
                title: 'title', // title field name
                description: 'description', // description field name
            },
            autoplay: {
                enabled: true, // slideshow play enabled/disabled
                delay: 5000 // autoplay delay in millisecond
            },
            theme: 'default', // css style [default, darkblue, darkred, whitegold]
            preloadNext: false, // preload next image (forward/backward)
            preloadDelay: 770, // preload delay for preloadNext
            loadingImage: 'preload.svg', // loader image
            preload: [], // preload images by index number
            modal: {
                title: '', // modal window title
                subtitle: '', // modal window subtitle
                caption: {
                    disabled: false, // disable image caption
                    visible: true, // show/hide image caption
                    position: 'top' // caption position [top, bottom]
                },
                header: {
                    enabled: true, // enable/disable modal menu
                    dynamic: false, // show/hide modal menu on mouseover
                    buttons: ['playstop', 'index', 'prev', 'next', 'pin', 'size', 'transition', 'thumbnails', 'fullscreen', 'help', 'close'],
                },
                help: false, // show/hide help
                arrows: {
                    enabled: true, // show/hide arrows
                    preload: true, // preload image on mouseover
                },
                click: {
                    close: true // when click on the image close the modal
                },
                thumbnail: {
                    height: 50, // thumbnail image height in pixel
                    index: false, // show index number on thumbnail
                    enabled: true, // enable/disable thumbnails
                    dynamic: false, // if true thumbnails visible only when mouseover
                    autohide: true, // hide thumbnail component when single image
                    click: {
                        select: true, // set selected image when true
                        modal: false // open modal when true
                    },
                    hover: {
                        preload: true, // preload image on mouseover
                        select: false // set selected image on mouseover when true
                    },
                },
                transition: 'slideLR', // transition effect
                size: 'cover', // contain, cover, auto, stretch
                keycodes: {
                    exit: [27], // esc
                    playpause: [80], // p
                    forward: [32, 39], // space, right arrow
                    backward: [37], // left arrow
                    first: [38, 36], // up arrow, home
                    last: [40, 35], // down arrow, end
                    fullscreen: [13], // enter
                    menu: [77], // m
                    caption: [67], // c
                    help: [72], // h
                    size: [83], // s
                    transition: [84] // t
                }
            },
            thumbnail: {
                height: 50, // thumbnail image height in pixel
                index: false, // show index number on thumbnail
                dynamic: false, // if true thumbnails visible only when mouseover
                autohide: true, // hide thumbnail component when single image
                click: {
                    select: true, // set selected image when true
                    modal: false // open modal when true
                },
                hover: {
                    preload: true, // preload image on mouseover
                    select: false // set selected image on mouseover when true
                },
            },
            panel: {
                visible: true,
                item: {
                    class: 'col-md-3', // item class
                    caption: false, // show/hide image caption
                    index: false, // show/hide image index
                },
                hover: {
                    preload: true, // preload image on mouseover
                    select: true // set selected image on mouseover when true
                },
                click: {
                    select: true, // set selected image when true
                    modal: true // open modal when true
                },
            },
            image: {
                transition: 'zlideLR', // transition effect
                size: 'contain', // contain, cover, auto, stretch
                arrows: {
                    enabled: true,  // show/hide arrows
                    preload: true, // preload image on mouseover
                },
                click: {
                    modal: false // when click on the image open the modal window
                },
                height: null, // height in pixel
                heightMin: null, // min height in pixel
                heightAuto: {
                    initial: true, // calculate div height by first image
                    onresize: false // calculate div height on window resize
                }
            }
        };

        $rootScope.$broadcast('ASG-gallery-edit', {
            id: 'homeGallery',
            update: $rootScope.home.images
        });

        $scope.updateNew = function(newPageNews){
            var code = "" ;
            angular.forEach(newPageNews, function (obj, key) {
                code += "<div class='news col-md-12'>" ;
                if (obj.type==='UPDATE'){
                    code += "<div class='badge badge-status left badge-warning float-left' style='margin-right: 10px''>活動" ;
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