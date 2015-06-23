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

   define("app", ["bower_components/angular/angular", "bower_components/angular-resource/angular-resource"], function(angular) {
       var app = angular.module("app", ["ngResource"] );
       // you can do some more stuff here like calling app.factory()...
       return app;
   });
