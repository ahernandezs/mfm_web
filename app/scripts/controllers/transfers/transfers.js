'use strict';
/**
 * The connection controller
 */
angular.module('spaApp')
.controller('TransfersCtrl', function($scope,$http,$location,$rootScope,$log) {
	$scope.specialist =  'David Torres Fernandez';

	$scope.agregarBeneficiario=function(){
		$location.path('transfer/add/beneficiary');
	}

	$scope.load_conection = function () {
		$('.page_conection').css({
			'opacity': '0'
		});
		setTimeout(function(){
			$('.page_conection').animate({
				'opacity': '1'
			},300);
		},500);
	    setTimeout(function(){
	    	$('.conexion_btn').each(function(){
		    	$(this).removeClass('desactivo').addClass('activo');
		    	$(this).find('i').css('display','block');
		    });
	    },500);
	};
});
