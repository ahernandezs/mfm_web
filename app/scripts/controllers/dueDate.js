'use strict';

angular.module('spaApp')
.controller('dueDateCtrl', function ($scope,$http,$log,$location,$stateParams) {
	
	$scope.mySelections = [];
	$scope.gridOptions = { 
			data: 'myData',
			multiSelect: false,
			selectedItems: $scope.mySelections,
			columnDefs: [
				{field:'_account_id', displayName:'No. de Operación'}, 
				{field:'account_type', displayName:'Cliente'},
				{field:'name', displayName:'Fecha Vencimiento'},
				{field:'alias', displayName:'Monto a Pagar'},
				{field:'currency', displayName:'Divisa'}]
	};	

	$http({
		//Enviar con $stateParams.account_id
		url: 'http://mfm.jit.su/api/accounts/1',
		method: 'GET'
	}).
	success(function(data, status, headers) {
		$scope.myData = data.accounts;
	}).
	error(function(data, status) {
		$log.error('Error: '+data, status);
		$location.path( '/login' );
	});
});