/**
 * Created by dman on 23/06/15.
 */

require.config({
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
    } ,
    deps: ['./bootstrap']
    //deps: ['./app']
});


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





