/**
 * Created by dman on 23/06/15.
 */

require.config({
   // baseUrl: "js",
    paths: {
        "angular": "bower_components/angular/angular",
        "ngResource": "bower_components/angular-resource/angular-resource",
        "ngRoute": "bower_components/angular-route/angular-route",
        'angularAMD': 'bower_components/angularAMD/angularAMD',
        'ngAnimate':'bower_components/angular-animate/angular-animate' ,
        'toaster':'bower_components/angularjs-toaster/toaster',
        'ngDialog':'bower_components/ngDialog/js/ngDialog'/*,
        'jquery':'bower_components/jquery/dist/jquery'*/
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
        ngDialog :{
            deps: ["angular"]
        }
        
    },
    //Load the app
    deps: ['app']
});


