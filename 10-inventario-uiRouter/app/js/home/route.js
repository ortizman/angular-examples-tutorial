angular.module('myapp.home')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home', {
		url:'/home',
		views:{
			'main':{
				templateUrl: 'js/home/views/home.html'
			}
		}
	});

	$urlRouterProvider.otherwise('/home');
}]);
