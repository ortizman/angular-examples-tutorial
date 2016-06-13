/**
* MyApp Module
*
* Description
*/
angular.module('myapp', [
	'ngRoute', 
	'myapp.inventario',
	'myapp.home',
	'myapp.about'
]);

angular.module('myapp.home', []);
angular.module('myapp.about', []);
angular.module('myapp.inventario', []);