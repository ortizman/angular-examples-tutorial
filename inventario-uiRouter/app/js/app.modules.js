/**
* MyApp Module
*
* Description
*/
angular.module('myapp', [
	'ui.router', 
	'myapp.inventario',
	'myapp.home',
	'myapp.about'
]);

angular.module('myapp.home', []);
angular.module('myapp.about', []);
angular.module('myapp.inventario', []);