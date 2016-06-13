angular.module('myapp.home')
.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'js/home/views/home.html'
	})
}])