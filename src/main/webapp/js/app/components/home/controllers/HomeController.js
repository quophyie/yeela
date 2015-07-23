/**
 * Created by dman on 23/06/15.
 */

define([], function () {
    ///var cntrllr = null;
    require(['app','app/shared/services/authentication/AuthenticationService'], function (app, AuthenticationService){
        return  app.register.controller('HomeController', ['$scope','toaster','ngDialog','AuthenticationService' ,function ($scope,toaster,ngDialog, AuthenticationService) {
        'use strict'
        var loginResponse = AuthenticationService.query();
        var response = "";
        this.message = "Message from View1Ctrl";
        var items = ["Car", "Bike", "House"]
        $scope.items = items;
        toaster.pop('success', "title", "text");
        $scope.pop = function () {
            toaster.pop('success', "title", "text");
        }
        $scope.showDialog = true;
        $scope.$on('$viewContentLoaded', function () {
            //call it here
            //toaster.pop('success', "title", "text");
            $scope.showDialog = true;
            ngDialog.open({
                //template:'<p>Hello George</p>' //'dialog/defaultDialog'//,
                template: 'dialog/loginDialog',//,
                controller: 'HomeController',
                closeByDocument: false
            });
        });

    }]);

    }) ;


     //return cntrllr;
});
