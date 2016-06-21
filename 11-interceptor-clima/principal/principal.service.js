angular.module('principal')
.factory('ClimaService', ['$http', '$q', function($http, $q){
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
