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
      templateUrl:'showIfAngular.html'
    };
  });
