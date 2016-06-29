angular.module('principal')
.controller('SimpleCtrl', ['MockService', '$scope', function(MockService, $scope) {

  $scope.climaJson = undefined;

  $scope.getPosts = function () {
    MockService.posts().$promise
    .then(function(response){
      $scope.posts = response.data;
    })
    .catch(function(response){
      $scope.mensaje = response.error;
    });

  };

  $scope.clean = function(){
    $scope.posts = undefined;
  };
}]);
