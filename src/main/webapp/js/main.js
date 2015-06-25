/**
 * Created by dman on 23/06/15.
 */

require.config({
   // baseUrl: "js",
    paths: {
        "angular": "bower_components/angular/angular",
        "angular-resource": "bower_components/angular-resource/angular-resource",
        "angular-route": "bower_components/angular-route/angular-route",
        'angularAMD': 'bower_components/angularAMD/angularAMD'
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
        }
    },
    //Load the app
    //deps: ['bootstrap']
    deps: ['app']
});

/*require(['angular', 'app'], function (angular, app) {
    'use strict';*/

    /*require(['bower_components/domReady/domReady'], function (document) {
    	angular.bootstrap(document, ['app']);
    });*/
    /*if (document.readyState === 'interactive' || document.readyState === 'complete') {
        angular.bootstrap(document.documentElement, ['yeelawebapp']);
    	// angular.bootstrap(app);
    }*/ /*else {
        document.onreadystatechange = function () {
            if (document.readyState === 'interactive') {
                angular.bootstrap(document.documentElement, [app.name]);
            }
        };
    }*/
//});

/*define("app", ["angular", "angular-resource"], function(angular) {
    var app = angular.module("app", ["ngResource"] );
    // you can do some more stuff here like calling app.factory()...
    return app;
}); */

/*require(['app'],
    function() {
        angular.bootstrap(document, ['yeela']);
    }
);*/

/*require(['angular', 'app'], function (app) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['yeela']);
    });
}); */





