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

  var climaJson = undefined;

  this.clima = function () {
    ClimaService.getClima().then(function(response){
      climaJson = response.data;
    });
  };

  this.getClimaJson = function(){
    return climaJson;
  };

  this.clean = function(){
    climaJson = undefined;
  }

}]);

app.directive('showClima', function(){
    return {
      restrict: 'E',
      scope:{
        datos:'='
      },
      templateUrl:'html/showClima.html'
    };
});
