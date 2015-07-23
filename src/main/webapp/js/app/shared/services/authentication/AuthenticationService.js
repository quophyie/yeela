/**
 * New node file
 */
define([],function(){
	'use strict';
	require(['app'], function(app){
	 	return app.register.factory('AuthenticationService', ['$resource','$base64', function($resource,$base64){
		//return app.factory('AuthenticationService', ['$resource','$base64', function($resource,$base64){
		 var username = 'quophyie', password = 'password1';
		 var encodedCredentials  = $base64.encode(username+':'+password);
		 var authorizationHeader= 'Basic '+encodedCredentials;
		 return $resource('login',{},{
			
			
			query:{
				method:'GET',
				headers:{ 'Content-Type': 'application/json',Authorization:authorizationHeader }
				}
		});
	 }]);
	});
	
});