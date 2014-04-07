'use strict';


angular.module('spaApp')
.controller('LoginCtrl', function ($scope,$http,$location,$rootScope,$log,$stateParams) {
	/**
	 * the login function connect the Rest-API: if the response status is OK, redirect to route "homePage",
	 * else put an error message in the scope
	 */
	 $scope.login=function(){
	 	//$http.defaults.useXDomain = true;
	 	$http({
			url: $rootScope.restAPIBaseUrl + 'login',
	 		method: 'POST',
	 		data: JSON.stringify({'username':$scope.username, 'password':$scope.password,'access_media': 'SPA'}),
	 		headers: {'Content-Type': 'application/json','X-BANK-TOKEN': '1'}
	 	}).
	 	success(function(data, status, headers) {
			//get the session token from the response and store it in the user service
			//userInformationService.setUserSessionId(headers('X-AUTH-TOKEN'));
			//get the user information from the response content
			$location.path( '/accounts' );
		}).
			error(function(data, status) {
			//put an error message in the scope
			$scope.errorMessage = 'login failed';
			$scope.status = status;
		});
	};
});
