/**
 * New node file
 */
define(['app'], function(app){
	return app.register.controller('LoginController', ['$scope', '$http', '$resource','AuthenticationService', function($scope, $http, $resource, authService){
		
		var loginResponse = authService.query();
		var response = "";
		
	}]);
	
});