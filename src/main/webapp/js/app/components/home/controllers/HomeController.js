/**
 * Created by dman on 23/06/15.
 */
define(['app'], function (app) {
    return app.controller('HomeController', ['$scope',function ($scope) {
        $scope.message = "Message from View1Ctrl";
        var items = ["Car", "Bike", "House"]
        $scope.items = items;
    }]);
});
