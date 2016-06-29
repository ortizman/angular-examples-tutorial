'use strict';

angular.module('principal')
.controller('SimpleCtrl', ['MockService', '$scope', '$q', function(MockService, $scope, $q) {

  $scope.climaJson = undefined;  

  $scope.getPosts = function () {

    var $defer = $q.defer();

    MockService.posts()
    .$promise      
    .then(function(response){
      $scope.posts = response;
    })
    .then($defer.resolve)
    .catch($defer.reject);

    return $defer.promise;
  };

  $scope.clean = function(){
    $scope.posts = undefined;
  };
}]);
