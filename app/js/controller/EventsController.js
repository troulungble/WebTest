'use strict';

angular.module('myApp').controller('EventsController',
    ["$rootScope","$scope", "constantVariable",
    function($rootScope,$scope,constantVariable) {
        $scope.loadMore = function(){
            $rootScope.pagingIndex++ ;
            $scope.newList = [
                {
                    id : 95,
                    imageUrl : "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg",
                    date : "2018-11-11",
                    name : "95"
                },
                {
                    id : 94,
                    imageUrl : "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2",
                    date : "2018-11-12",
                    name : "94"
                },
                {
                    id : 93,
                    imageUrl : "https://images.pexels.com/photos/65644/poppy-plant-nature-macro-65644.jpeg?auto=compress&cs=tinysrgb&dpr=2",
                    date : "2018-11-27",
                    name : "93"
                },
                {
                    id : 92,
                    imageUrl : "https://images.wallpaperscraft.com/image/beach_tropics_sea_sand_palm_trees_sunset_beautiful_84727_1280x720.jpg",
                    date : "2018-11-14",
                    name : "92"
                }
            ]
            angular.forEach($scope.newList, function(event) {
                $rootScope.eventsList.push(event)
            });
        }
    }
    ]
);