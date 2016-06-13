angular.module('myapp.inventario')
.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/inventario', {
		templateUrl: 'js/inventario/views/inventario.html',
		controller: 'InventarioCtrl'
	})
}])