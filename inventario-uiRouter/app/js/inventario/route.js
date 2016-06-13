angular.module('myapp.inventario')
.config(['$stateProvider',function($stateProvider) {
	$stateProvider
		.state('home.inventario', {
			url: '/inventario',
			views:{
				'content': {
					templateUrl: 'js/inventario/views/body.html',
					controller: 'InventarioCtrl'
				}
			}
		})
		.state('home.inventario.list-inventario', {
			url: '/inventario-list',
			views:{
				'sub-body': {
					templateUrl: 'js/inventario/views/body.html',
					controller: 'InventarioCtrl'
				}
			}
		});		
}]);