/**
 * Created by dman on 19/06/15.
 */


var appDependencies = [
    'angular', 'ngResource', 'ngRoute',/*'angularAMD',*/ 'toaster','ngDialog', 'ngAnimate','base64',
    'app/components/home/controllers/HomeController',
    //'app/shared/services/authentication/AuthenticationService'

    //'app/components/login/controllers/LoginController'

    //3rd party modules


];
define(appDependencies, function (angular, angularResource, angularRoute,/*angularAMD,*/ toaster, ngDialog, ngAnimate,base64,HomeController ) {
	'use strict'
	
	
	
	//Pass shimmed objects/modules ('ngRoute','ngResource', 'toaster','ngDialog') as dependencies to the app i.e. 'yeela'
    var app = angular.module("yeelawebapp", ['ngRoute','ngResource', 'toaster','ngDialog','base64'/*,'HomeController'*/]);

    /*app.config(['$resourceProvider', function($resourceProvider) {
		  // Don't strip trailing slashes from calculated URLs
		  $resourceProvider.defaults.stripTrailingSlashes = false;
		}]);*/

    var homeCntrller = app.controller('TestHomeController', ['$scope','toaster', function($scope, toaster){
        var items = ["Car", "Bike", "House"]
        $scope.items = items;
        $scope.pop = toaster.pop('success', "title", "text");
    }]);

    app.config(['$routeProvider','$controllerProvider',
        '$compileProvider', '$filterProvider', '$provide', '$httpProvider','$resourceProvider',function ($routeProvider,$controllerProvider,
                                                                                     $compileProvider, $filterProvider, $provide, $httpProvider,$resourceProvider) {
            // Don't strip trailing slashes from calculated URLs
            $resourceProvider.defaults.stripTrailingSlashes = false;
            app.register =
            {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };
        /*$routeProvider
	        .when("/",angularAMD.route({
	            templateUrl: '/yeela/home', controller: 'HomeController', controllerUrl: 'app/components/home/controllers/HomeController'
	        }))
            .when("/home",angularAMD.route({
                templateUrl: '/yeela/home', controller: 'HomeController',controllerUrl: 'app/components/home/controllers/HomeController'
            }))
            .when("/view1", angularAMD.route({
                templateUrl: 'view_view1.html', controller: 'View1Ctrl', controllerUrl: 'app/components/home/controllers/HomeController'
            }))
            .otherwise({redirectTo: "/home"}); */


            /*$routeProvider
                .when("/",{
                    templateUrl: '/yeela/home', controller: 'HomeController', controllerUrl: '/js/app/components/home/controllers/HomeController'
                })
                .when("/home",{
                    templateUrl: '/yeela/home', controller: 'HomeController',controllerUrl: '/js/app/components/home/controllers/HomeController'
                })
                .when("/view1", {
                    templateUrl: 'view_view1.html', controller: 'HomeController', controllerUrl: '/js/app/components/home/controllers/HomeController'
                })
                .otherwise({redirectTo: "/home"});*/



            $routeProvider
                .when("/",{
                    templateUrl: '/yeela/home', controller: 'HomeController'//, controllerUrl: 'app/components/home/controllers/HomeController'
                })
                .when("/home",{
                    templateUrl: '/yeela/home', controller: 'HomeController'//,controllerUrl: 'app/components/home/controllers/HomeController'
                })
                .when("/view1", {
                    templateUrl: 'view_view1.html', controller: 'HomeController'//,  controllerUrl: 'app/components/home/controllers/HomeController'
                })
                .otherwise({redirectTo: "/home"});

        }]);

   // app.run();

     //angularAMD.bootstrap(app);

    return app;
});
    