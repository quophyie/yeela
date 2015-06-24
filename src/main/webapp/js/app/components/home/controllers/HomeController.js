/**
 * Created by dman on 23/06/15.
 */

/*require(["yeela"], function(app) {
    yeela.controller(
        "HomeController",
        function($scope) {
            $scope.sayHello = function() {
                return "Hello";

            }
            //debugger;
            $scope.message = "Hello, I am the Angular JS Home Controller";
            var items = ["Car", "Bike", "House"]
            $scope.items = items;

        }
    );
});*/

define(['HomeController'], function (yeela) {
    yeela.controller('HomeController', function ($scope) {
        $scope.message = "Message from HomeCtrl";
        $scope.message = "Hello, I am the Angular JS Home Controller";
        var items = ["Car", "Bike", "House"]
        $scope.items = items;
    });
});