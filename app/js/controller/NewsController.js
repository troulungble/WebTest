'use strict';

angular.module('myApp').controller('NewsController',
    ["$rootScope","$scope",
    function($rootScope,$scope) {
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
                code += "<div class='news-content'>" ;
                if (obj.id){
                    code += "<a href='#!/home.html' ng-show='new.id'>" + obj.title + "</a>"
                }else{
                    code += "<span>" + obj.title + "</span>" ;
                }
                if (obj.news){
                    code += "<div class='badge badge-status badge-danger'>NEW!</div>" ;
                }
                code += "<span class='float-right' style='font-weight: normal'>" + obj.date + "</span>" ;
                code += "</div></div>"
            });
            angular.element(document.getElementById("newsContent")).html(code);
        }

        //init News
        $scope.updateNew($rootScope.news) ;

        angular.element(document.getElementById("page-selection")).bootpag({
            total: $rootScope.newsTotalNumber,
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
            console.info("update Page");
            // jQuery("#newsContent").html("Page " + num);
            var newPageNews = [
                {
                    type:'INFO',
                    title:'網站成立' + num,
                    id: null,
                    date : '2018-09-22',
                    news:true
                },
                {
                    type:'UPDATE',
                    title:'大埔出獅' + num,
                    id: 1259,
                    date : '2018-09-22',
                    news:false
                }
            ] ;

            $scope.updateNew(newPageNews) ;
        });


    }
    ]
);