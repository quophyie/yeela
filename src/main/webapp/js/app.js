/**
 * Created by dman on 19/06/15.
 */

define(['angular', 'ngResource', 'ngRoute','angularAMD', 'toaster','ngDialog', 'ngAnimate'], function (angular, angularResource, angularRoute,angularAMD, toaster, ngDialog, ngAnimate ) {
	'use strict'
	//Pass shimmed objects/modules ('ngRoute','ngResource', 'toaster','ngDialog') as dependencies to the app i.e. 'yeela'
    var app = angular.module("yeelawebapp", ['ngRoute','ngResource', 'toaster','ngDialog']);

    app.config(['$routeProvider',function ($routeProvider) {
        $routeProvider
	        .when("/",angularAMD.route({
	            templateUrl: '/yeela/home', controller: 'HomeController', controllerUrl: 'app/components/home/controllers/HomeController'
	        }))
            .when("/home",angularAMD.route({
                templateUrl: '/yeela/home', controller: 'HomeController',controllerUrl: 'app/components/home/controllers/HomeController'
            }))
            .when("/view1", angularAMD.route({
                templateUrl: 'view_view1.html', controller: 'View1Ctrl', controllerUrl: 'app/components/home/controllers/HomeController'
            }))
            .otherwise({redirectTo: "/home"});
    }]);

    return angularAMD.bootstrap(app);;
});
    