var app = angular.module('app', []);
app.factory('ClimaService', ['$http', '$q', function($http, $q){
  var
    getClima = function(){
      var defer = $q.defer();

      $http.get('http://clima.info.unlp.edu.ar/last')
      .then(defer.resolve)
      .catch(defer.reject);

      return defer.promise;
    };

    return {
      getClima: getClima
    };
}]);

app.controller('SimpleCtrl', ['ClimaService', function(ClimaService) {

  this.texto = "AngularJS";
  var basketballTeam = null;
  var climaJson = null;

  this.getBasketballTeam = function() {
    ClimaService.getClima().then(function(response) {
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
