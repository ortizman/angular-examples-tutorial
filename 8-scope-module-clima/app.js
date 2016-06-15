var app = angular.module('app', ['climamod']);
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

app.controller('SimpleCtrl', ['ClimaService',
 '$scope',
function(ClimaService, $scope) {
  $scope.climaJson = undefined;

  $scope.clima = function () {
    ClimaService.getClima()
    .then(function(response){
      $scope.climaJson = response.data;
    });
  };

  $scope.clean = function(){
    $scope.climaJson = undefined;
  };
}]);
