'use strict';

angular.module('myApp').factory('BackendService',
    function ($http, $q, constantVariable, $state, $rootScope, $sce) {
        var factory = {
            getHomePageContent: getHomePageContent,
            getContactUsPageContent : getContactUsPageContent,
        };
        return factory;

        function getHomePageContent() {
            var deferred = $q.defer();
            $http.get(constantVariable.BACKEND_URL + constantVariable.BACKEND_HOME)
                .then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        deferred.reject(errResponse);
                    }
                );
            return deferred.promise;
        }

        function getContactUsPageContent() {
            var deferred = $q.defer();
            $http.get(constantVariable.BACKEND_URL + constantVariable.BACKEND_CONTACT_US)
                .then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        deferred.reject(errResponse);
                    }
                );
            return deferred.promise;
        }
    }
);