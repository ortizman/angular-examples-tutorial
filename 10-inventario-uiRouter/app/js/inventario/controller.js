angular.module('myapp.inventario')


.controller('InventarioCtrl', ['$scope', 'IntentarioService', '$stateParams',
function($scope, IntentarioService, $stateParams){

	if($stateParams && $stateParams.itemSelected){ //Si item selected esta definido
		$scope.item = $stateParams.itemSelected;
		$scope.index = $stateParams.index;
		$scope.isEdit = true;
	}

	$scope.nuevo = function() {
		$scope.isEdit = false;
		$scope.item = {};
	};

	$scope.guardar = function(it){
		IntentarioService.saveItem(it);
		$scope.item = {};
	};

	$scope.editar = function(it, index){
		IntentarioService.editItem(it, index);
		$scope.item = {};
	};

	$scope.items = function() {
		return IntentarioService.getItems();
	};

	$scope.borrar = function(index){
			IntentarioService.borrarItem(index);
	};

}]);
