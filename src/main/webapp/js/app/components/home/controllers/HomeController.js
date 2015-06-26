/**
 * Created by dman on 23/06/15.
 */
define(['app'], function (app) {
    return app.controller('HomeController', ['$scope','toaster','ngDialog',function ($scope,toaster,ngDialog) {
        $scope.message = "Message from View1Ctrl";
        var items = ["Car", "Bike", "House"]
        $scope.items = items;
       // toaster.pop('success', "title", "text");
        $scope.pop = function(){
           // toaster.pop('success', "title", "text");
        }
        $scope.showDialog = false;
        $scope.$on('$viewContentLoaded', function() {
            //call it here
            //toaster.pop('success', "title", "text");
            $scope.showDialog = true;
            ngDialog.open({
                //template:'<p>Hello George</p>' //'dialog/defaultDialog'//,
                template:'dialog/defaultDialog'//,
                //controller: 'SomeController'
            });
        });
    }]);
});
