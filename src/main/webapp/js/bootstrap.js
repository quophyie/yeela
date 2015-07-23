/**
 * Created by dman on 24/06/15.
 */
/**
 * bootstraps angular onto the window.document node
 */define([
    'require',
    'bower_components/angular/angular',
    'app',
    'routes'
], function (require, angular) {
    'use strict';

    require(['bower_components/domReady/domReady'], function (document) {
    	angular.bootstrap(document, ['yeelawebapp']);
    });
});
