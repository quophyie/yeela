/**
 * Created by dman on 23/06/15.
 */

require.config({
   // baseUrl: "js",
    paths: {
        "angular": "bower_components/angular/angular",
        "angular-resource": "bower_components/angular-resource/angular-resource",
        "angular-route": "bower_components/angular-route/angular-route",
        'angularAMD': 'bower_components/angularAMD/angularAMD',
        'angular-animate':'bower_components/angular-animate/angular-animate' ,
        'toaster':'bower_components/angularjs-toaster/toaster',
        'ngDialog':'bower_components/ngDialog/js/ngDialog'
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "angular-resource": {
            deps: ["angular"]
        },
        angularAMD: {
            deps: ["angular"]
        },
        
        "angular-route": {
            deps: ["angular"]
        },
        'toaster':{
            deps:['angular', 'angular-animate']
        },
        'ngDialog' :{
            deps: ["angular"]
        }
    },
    //Load the app
    deps: ['app']
});


