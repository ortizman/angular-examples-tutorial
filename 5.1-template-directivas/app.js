var app = angular.module('app', []);
app.controller('SimpleCtrl', [function() {
  this.texto = "AngularJS";
}]);

  app.directive('showIfAngular', function() {
    return {
      restrict: 'AE',
      scope:{
        texto:'=word'
      },
      templateUrl:'html/showIfAngular.html'
    };
  });

  app.directive('encabezado', function(){
    return {
      restrict: 'AE',
      templateUrl:'html/header.html'
    };
  });

  app.directive('showIfTabla', function(){
    return {
      restrict: 'AE',
      scope:{
        texto:'=word'
      },
      templateUrl:'html/showIfTabla.html'
    };
  });
