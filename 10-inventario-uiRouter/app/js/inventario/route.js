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
					templateUrl: 'js/inventario/views/listItems.html',
					controller: 'InventarioCtrl',
					resolve: {
						items:['IntentarioService', function(IntentarioService) {
							return IntentarioService.getItems();
						}]
					}
				}
			}
		})
		.state('home.inventario.nuevo', {
			url: '/inventario/nuevo',
			views:{
				'sub-body': {
					templateUrl: 'js/inventario/views/nuevoItem.html',
					controller: 'InventarioCtrl'
				}
			}
		});
}]);
