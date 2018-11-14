'use strict';

angular.module('myApp').controller('EventsController',
    ["$rootScope","$scope", "constantVariable", "BackendService",
    function($rootScope,$scope,constantVariable, BackendService) {
        $scope.loadMore = function(){
            $rootScope.pagingIndex++ ;
            BackendService.getEventsPageContent($rootScope.pagingIndex)
                .then(
                    function (response) {
                        $scope.newList = response ;
                        angular.forEach($scope.newList, function(event) {
                            $rootScope.eventsList.push(event)
                        });
                    },
                    function (errResponse) {
                    }
                );
        }
    }
    ]
);