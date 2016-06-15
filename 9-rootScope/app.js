

  angular.module('myApp', [])
  .run(function($rootScope) {
      $rootScope.test = new Date();
  })
  .controller('Ctrl1', function($scope, $rootScope) {
    $scope.change = function() {
          $scope.test = new Date();
      };
  })
  .controller('Ctrl2', function($scope, $rootScope) {
      $scope.change = function() {
          $scope.test = new Date();
      };

      $scope.changeRs = function() {
          $rootScope.test = new Date();
      };
  });
