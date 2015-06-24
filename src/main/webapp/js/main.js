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
    deps: ['app']
});


/*require(['app'],
    function() {
        angular.bootstrap(document, ['yeela']);
    }
);
 */
/*require(['angular', 'app'], function (app) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['yeela']);
    });
}); */


