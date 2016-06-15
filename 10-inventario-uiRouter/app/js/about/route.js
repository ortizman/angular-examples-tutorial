angular.module('myapp.about')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home.about', {
		url: '/about',
		views:{
			'content':{
				templateUrl: 'js/about/views/about.html',
				controller: 'AboutCtrl'
			}
		}
	});
}])