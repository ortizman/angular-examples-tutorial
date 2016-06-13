var app = angular.module('app', []);

app.controller('SimpleCtrl', ['$http', function($http) {

  this.texto = "AngularJS";
  var basketballTeam = null;
  var climaJson = null;

  this.getBasketballTeam = function() {
    $http.get('data.json').then(function(response) {
      basketballTeam = response.data;
    });
  };

  this.clima = function () {
    $http.get('http://clima.info.unlp.edu.ar/last').then(function(response){
      climaJson = response.data;
    });
  };

  this.getClimaJson = function(){
    return climaJson;
  };

  this.getTeam = function () {
    return basketballTeam;
  };

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
