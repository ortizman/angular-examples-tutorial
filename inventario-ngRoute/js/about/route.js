angular.module('myapp.about')
.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/about', {
		templateUrl: 'js/about/views/about.html',
		controller: 'AboutCtrl'
	})
}])