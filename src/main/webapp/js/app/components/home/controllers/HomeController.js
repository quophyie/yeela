/**
 * Created by dman on 23/06/15.
 */

require(["app"], function(app) {
    app.controller(
        "HelloController",
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
});