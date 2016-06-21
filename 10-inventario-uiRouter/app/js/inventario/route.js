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
					controller: 'InventarioCtrl'
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
		})
		.state('home.inventario.edit', {
			url: '/inventario/nuevo/:index',
			views:{
				'sub-body': {
					templateUrl: 'js/inventario/views/nuevoItem.html',
					controller: 'InventarioCtrl'
				}
			},
			params: {
					itemSelected: null
			}
		});
		// .state('home.inventario.edit', {
		// 	url: '/inventario/edit',
		// 	views:{
		// 		'sub-body': {
		// 			templateUrl: 'js/inventario/views/nuevoItem.html',
		// 			controller: 'InventarioEditCtrl',
		// 			resolve:{
		// 				itemSelected: ['$stateParams', function($stateParams) {
		// 					return $stateParams.itemSelected;
		// 				}]
		// 			}
		// 		}
		// 	},
		// 	params: {
		// 		itemSelected: null
		// 	}
		// });
}]);
