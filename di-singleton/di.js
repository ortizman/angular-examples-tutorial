var app = angular.module('principal', []);
app.service('saludoService', [function(){
	var saludar = function() { return "hola, Mundo!"};
	return {
		saludar: saludar
	};
}]);

app.controller('saludoCtrl', ['saludoService', '$scope', 
	function(saludoService, $scope){
		var count = 0; // cuanta la cantidad de saludos
		$scope.hello = []; //inicializo el array vacio
		$scope.saludo = function() {
			$scope.hello.push(count++ + " - " +saludoService.saludar());
		}

		$scope.remove = function(index) {
			$scope.hello.splice(index, 1);
		}
}])