'use strict';

angular.module('myApp').controller('NewsController',
    ["$rootScope","$scope", "constantVariable",
    function($rootScope,$scope,constantVariable) {
        $scope.updateNew = function(newPageNews){
            var code = "" ;
            angular.forEach(newPageNews, function (obj, key) {
                code += "<div class='news'>" ;
                if (obj.type==='UPDATE'){
                    code += "<div class='badge badge-status left badge-warning'>更新" ;
                }else if (obj.type==='INFO') {
                    code += "<div class='badge badge-status left badge-info'>公告" ;
                }
                code += "</div>" ;
                code += "<div class='date'>" + obj.date + "</div>" ;
                code += "<div class='news-content'>" ;
                code += "<a href='#!/newsDetails/" + obj.id + "'>" + obj.title + "</a>"
                if (obj.news){
                    code += "<div class='badge badge-status badge-danger'>NEW!</div>" ;
                }
                code += "</div>" ;
                code += "</div>" ;
            });
            angular.element(document.getElementById("newsContent")).html(code);
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
            var newPageNews = [
                {
                    id : 1,
                    type:'INFO',
                    title:'網站成立' + num,
                    date : '2018-09-22',
                    news:true
                },
                {
                    id : 2,
                    type:'UPDATE',
                    title:'大埔出獅' + num,
                    date : '2018-09-22',
                    news:false
                }
            ] ;

            $scope.updateNew(newPageNews) ;
        });
    }
    ]
);