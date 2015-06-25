/**
 * Created by dman on 24/06/15.
 */
/**
 * bootstraps angular onto the window.document node
 */
define([
    'require',
    'angular',
    'app'/*,
    'routes'   */
], function (require, ng) {
    'use strict';

    require(['bower_components/domReady/domReady'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});
