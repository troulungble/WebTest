'use strict';

angular.module('myApp').factory('BackendService',
    function ($http, $q, constantVariable, $state, $rootScope, $sce) {
        var factory = {
            getHomePageContent: getHomePageContent,
            getPurposePageContent: getPurposePageContent,
            getOriginPageContent: getOriginPageContent,
            getNewsPageContent: getNewsPageContent,
            getNewsDetailsPageContent: getNewsDetailsPageContent,
            getEventsPageContent: getEventsPageContent,
            getEventDetailsContent : getEventDetailsContent,
            // getClientsPageContent : getClientsPageContent,
            getContactUsPageContent : getContactUsPageContent,
            getBanner: getBanner,
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

        function getPurposePageContent() {
            var deferred = $q.defer();
            $http.get(constantVariable.BACKEND_URL + constantVariable.BACKEND_PURPOSE)
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

        function getOriginPageContent() {
            var deferred = $q.defer();
            $http.get(constantVariable.BACKEND_URL + constantVariable.BACKEND_ORIGIN)
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

        function getNewsPageContent(pageIndex) {
            var deferred = $q.defer();
            $http.get(constantVariable.BACKEND_URL + constantVariable.BACKEND_NEWS + pageIndex)
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

        function getNewsDetailsPageContent(id) {
            var deferred = $q.defer();
            $http.get(constantVariable.BACKEND_URL + constantVariable.BACKEND_NEWS_DETAILS + id)
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

        function getEventsPageContent(pageIndex) {
            var deferred = $q.defer();
            $http.get(constantVariable.BACKEND_URL + constantVariable.BACKEND_EVENTS + pageIndex)
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

        function getEventDetailsContent(id) {
            var deferred = $q.defer();
            $http.get(constantVariable.BACKEND_URL + constantVariable.BACKEND_EVENT_DETAILS + id)
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

        function getBanner(type) {
            var deferred = $q.defer();
            $http.get(constantVariable.BACKEND_BANNER_URL + type)
                .then(
                    function (response) {
                        deferred.resolve(true);
                    },
                    function (errResponse) {
                        deferred.reject(false);
                    }
                );
            return deferred.promise;
        }
    }
);