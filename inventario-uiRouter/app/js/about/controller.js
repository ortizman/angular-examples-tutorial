angular.module('myapp.about')
.controller('AboutCtrl', ['$scope', function($scope){
	$scope.personas = [
		{nombre: 'Manuel', apellido: 'Ortiz'},
		{nombre: 'Juan', apellido: 'Perez'}
	]
}]);