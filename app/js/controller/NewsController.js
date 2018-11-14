'use strict';

angular.module('myApp').controller('NewsController',
    ["$rootScope","$scope", "constantVariable", "BackendService", "$window",
    function($rootScope,$scope,constantVariable, BackendService, $window) {
        $scope.updateNew = function(newPageNews){
            var code = "" ;
            angular.forEach(newPageNews, function (obj, key) {
                code += "<div class='news'>" ;
                if (obj.type==='EVENT'){
                    code += "<div class='badge badge-status left badge-success'>活動" ;
                }else if (obj.type==='INFO') {
                    code += "<div class='badge badge-status left badge-info'>公告" ;
                }else if (obj.type==='UPDATE') {
                    code += "<div class='badge badge-status left badge-warning'>更新";
                }
                code += "</div>" ;
                code += "<div class='date'>" + obj.date + "</div>" ;
                code += "<div class='content'>" ;
                code += "<a href='#!/news/details/" + obj.id + "'>" + obj.title + "</a>"
                if (obj.news){
                    code += "<span class='badge badge-status badge-danger' style='margin-left: 10px'>NEW!</span>" ;
                }
                code += "</div>" ;
                code += "</div>" ;
            });
            angular.element(document.getElementById("newsContent")).html(code);
            $window.scrollTo(0, 0);
        }

        //init News
        $scope.updateNew($rootScope.newsList) ;

        angular.element(document.getElementById("page-selection")).bootpag({
            total: Math.ceil($rootScope.newsTotalNumber/constantVariable.PAGE_SIZE),
            page: $rootScope.newsCurrentPage,
            maxVisible: 5,
            leaps: true,
            firstLastUse: true,
            first: '←',
            last: '→',
            wrapClass: 'pagination',
            activeClass: 'active',
            disabledClass: 'disabled',
            nextClass: 'next',
            prevClass: 'prev',
            lastClass: 'last',
            firstClass: 'first'
        }).on("page", function(event, num){
            BackendService.getNewsPageContent(num-1)
                .then(
                    function (response) {
                        $rootScope.newsTotalNumber = response.totalNumber ;
                        $rootScope.newsCurrentPage = response.currentPage ;
                        $rootScope.newsList = response.news ;
                        var newPageNews = response.news ;
                        $scope.updateNew(newPageNews) ;
                    },
                    function (errResponse) {
                        $rootScope.newsTotalNumber = 0;
                        $rootScope.newsCurrentPage = 0 ;
                        $rootScope.newsList = [] ;
                        var newPageNews = [] ;
                        $scope.updateNew(newPageNews) ;
                    }
                );
        });
    }
    ]
);