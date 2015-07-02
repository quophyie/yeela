/**
 * New node file
 */
define('app', function(app){
	'use strict';
	 return app.factory('AuthenticationService', ['$resource','$base64', function($resource,$base64){
		 var username = 'quophyie', password = 'password1';
		 var encodedCredentials  = $base64.encode(username+':'+password);
		 var authorizationHeader= 'Basic '+encodedCredentials;
		 /*return*/ $resource('/login',{},{
			
			
			query:{
				method:'GET',
				headers:{ Authorization:authorizationHeader }
				}
		});
	 }]);
		
	
})