// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', 'ui.bootstrap']).
    config(['$routeProvider', function ($routeProvider) {
        "use strict";

        $routeProvider.when('/', {
            templateUrl: '/partial/index',
            controller: 'IndexCtrl'
        });
        $routeProvider.when('/contact', {
            templateUrl: '/partial/contact',
            controller: 'PagesCtrl'
        });
        $routeProvider.when('/about', {
            templateUrl: '/partial/about',
            controller: 'PagesCtrl'
        });
    }]);
