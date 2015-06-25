/**
 * Created by dman on 19/06/15.
 */

define(['angular', 'angular-resource', 'angular-route','angularAMD'], function (angular, angularResource, angularRoute,angularAMD ) {
	'use strict'
    var app = angular.module("yeelawebapp", ['ngRoute','ngResource']);

    app.config(['$routeProvider',function ($routeProvider) {
        $routeProvider
	        .when("/",angularAMD.route({
	            templateUrl: '/yeela/home', controller: 'HomeController', controllerUrl: 'app/components/home/controllers/HomeController'
	        }))
            .when("/home",ngularAMD.route({
                templateUrl: '/yeela/home', controller: 'HomeController',controllerUrl: 'app/components/home/controllers/HomeController'
            }))
            .when("/view1", angularAMD.route({
                templateUrl: 'view_view1.html', controller: 'View1Ctrl', controllerUrl: 'app/components/home/controllers/HomeController'
            }))
            .otherwise({redirectTo: "/home"});
    }]);

    return angularAMD.bootstrap(app);;
});
    