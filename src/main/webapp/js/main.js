/**
 * Created by dman on 23/06/15.
 */

require.config({
    //baseUrl: "/yeela/js",
    paths: {
        "angular": "bower_components/angularjs/angular",
        "ngResource": "bower_components/angular-resource/angular-resource",
        "ngRoute": "bower_components/angular-route/angular-route",
        'angularAMD': 'bower_components/angularAMD/angularAMD',
        'ngAnimate':'bower_components/angular-animate/angular-animate' ,
        'toaster':'bower_components/angularjs-toaster/toaster',
        'ngDialog':'bower_components/ngDialog/js/ngDialog',
        'base64':'bower_components/angular-base64/angular-base64'
        //AuthenticationService:'app/shared/services/authentication/AuthenticationService'
        //'jquery':'bower_components/jquery/dist/jquery'*/
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        ngResource: {
            deps: ["angular"]
        },
            angularAMD: {
            deps: ['angular']
        },
        
        ngRoute: {
           deps: ["angular"]
        },

        ngAnimate :{
            deps: ["angular"]
        },
        jquery: {
            exports: 'jquery'
          },
        toaster:{
            deps:['angular','ngAnimate']//,
            //exports: 'toaster'
          
        	 //deps: ['jquery']
        },
        ngDialog : ["angular"]
        ,
        base64:{
        	deps: ["angular"]
        }/*,
        AuthenticationService:{
            exports:'AuthenticationService'
        }  */
        
    }/*,
    //Load the app
    deps: ['app'] */
});

//(function(){
require(['app'], function (app) {
   // require(['bower_components/angular/angular'],function( angular){
       angular.bootstrap(document, ['yeelawebapp']);
    //});
});

