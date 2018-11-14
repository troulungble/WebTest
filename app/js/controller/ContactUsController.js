'use strict';

angular.module('myApp').controller('ContactUsController',
    ["$rootScope","$scope",
    function($rootScope,$scope) {
        $scope.uluru = $rootScope.contactUsDescription.mapLocation;
        var dom_el = document.querySelector('[ng-controller="ContactUsController"]');
        var ng_el = angular.element(dom_el);
        var ng_el_scope = ng_el.scope();
        var uluru = ng_el_scope.uluru;
    }
    ]
);