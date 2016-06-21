angular.module('principal')
.controller('SimpleCtrl', ['ClimaService', '$scope', function(ClimaService, $scope) {

  $scope.climaJson = undefined;

  $scope.clima = function () {
    ClimaService.getClima()
    .then(function(response){
      $scope.climaJson = response.data;
    })
    .catch(function(response){
      $scope.mensaje = response.error;
    })
    .finally(function(){

    });
  };

  $scope.clean = function(){
    $scope.climaJson = undefined;
  };
}]);
