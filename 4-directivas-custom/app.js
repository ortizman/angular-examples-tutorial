var app = angular.module('app', []);
app.controller('SimpleCtrl', [function() {
  this.texto = "AngularJS";
}]);

app.directive('showIfAngular', function() {
  return {
    restrict: 'E',
    replace:'true',
    template:'<span><img src="../img/AngularJS_logo.svg" ng-if="simple.texto ==  \'angular\'" ></img></span>'
  };
});
