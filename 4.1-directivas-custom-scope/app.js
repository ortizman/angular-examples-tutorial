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
    template:'<div><img src="../img/AngularJS_logo.svg" ng-if="texto ==  \'angular\'" ></img></div>'
  };
});
