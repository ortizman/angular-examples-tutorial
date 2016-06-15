angular.module('principal')
.controller('SimpleCtrl', ['ClimaService', '$scope', function(ClimaService, $scope) {

  $scope.climaJson = undefined;

  $scope.clima = function () {
    ClimaService.getClima().then(function(response){
      $scope.climaJson = response.data;
    });
  };

  $scope.clean = function(){
    $scope.climaJson = undefined;
  };
}]);
