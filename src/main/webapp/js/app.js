/**
 * Created by dman on 19/06/15.
 */

//var MemoryBank = {

     /**
     component: {
         controllers: {},
         directives: {},
         factories: {},
         filters: {},
         services: {}
     }*/


   /** home: {
        controllers: {
            HomeController: ['$scope',function ($scope) {
                //debugger;
                this.message = "Hello, I am the Angular JS Home Controller";
                var items = ["Car", "Bike", "House"]
                this.items = items;
            } ]
        },
        directives: {},
        factories: {},
        filters: {},
        services: {}
    }

}

var app = angular.module('yeela', []);
app.controller('HomeController', MemoryBank.home.controllers.HomeController) */
   /*require.config({
       // baseUrl: "js",
       paths: {
           "angular": "bower_components/angular/angular",
           "angular-resource": "bower_components/angular-resource/angular-resource"
       },
       shim: {
           "angular": {
               exports: "angular"
           },
           "angular-resource": {
               deps: ["angular"]
           }
       }
   });*/

  /* define("app", ["angular", "angular-resource"], function(angular) {
       var yeela = angular.module("yeela", ["ngResource"] );
       // you can do some more stuff here like calling app.factory()...
       return yeela;
   });*/

/*define([ 'app', 'angular-route'], function (angularAMD) {
    var yeela = angular.module("yeela", ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider.when("/home", angularAMD.route({
            templateUrl: 'views/home.html', controller: 'HomeCtrl',
            controllerUrl: 'ctrl/home'
        }))
    });
    return angularAMD.bootstrap(app);
    //return yeela;
}); */

/**
 *define([
 'angular',
 'app/components/home/controllers/HomeController'
 /*'./controllers/index',
 './directives/index',
 './filters/index',
 //'./services/index'
], function (ng) {
    'use strict';
    var app = ng.module('app', [
        /*'app.services',
         'app.controllers',
         'app.filters',
         'app.directives'
    ]);
    return  app;
});
 */


/**define([
   'angular',
    'app/components/home/controllers/HomeController'
    /*'./controllers/index',
    './directives/index',
    './filters/index',
    //'./services/index'
], function (ng) {
    'use strict';
    var app = ng.module('app', [
        /*'app.services',
         'app.controllers',
         'app.filters',
         'app.directives'
    ]);
    return  app;
});
  */


define(['require','angular' ], function (_require,angular) {
    var app = angular.module("webapp", ["ngResource"]);

    /*app.config(function ($routeProvider) {
        $routeProvider
            .when("/home", angularAMD.route({
                templateUrl: 'view_home.html', controller: 'HomeCtrl', controllerUrl: 'controller_home'
            }))
            .when("/view1", angularAMD.route({
                templateUrl: 'view_view1.html', controller: 'View1Ctrl', controllerUrl: 'controller_view1'
            }))
            .otherwise({redirectTo: "/home"});
    });

    return angularAMD.bootstrap(app);
    */
   /* require(['bower_components/domReady/domReady'], function (document) {
        angular.bootstrap(document, ['app']);
    }); */

    return app;
});



/*
define([
    'require',
    'angular',
    'app',
     'routes'
], function (require, ng) {
    'use strict';

    require(['bower_components/domReady/domReady'], function (document) {
        ng.bootstrap(document, ['app']);
    });
}); */



