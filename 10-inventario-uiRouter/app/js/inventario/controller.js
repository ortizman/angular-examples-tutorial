angular.module('myapp.inventario')
.controller('InventarioCtrl', ['$scope', 'IntentarioService', function($scope, IntentarioService){

	$scope.nuevo = function() {
		$scope.item = {};
	};

	$scope.guardar = function(it){
		IntentarioService.saveItem(it);
		$scope.item = {};
	};

	$scope.items = function() {
		return IntentarioService.getItems();
	};

	$scope.borrar = function(index){
			IntentarioService.borrarItem(index);
	};

}]);
