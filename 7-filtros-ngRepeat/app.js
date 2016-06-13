var app = angular.module('app', []);

app.filter('enmetros', function(){
  return function(input){
    return input + ' metros';
  };
});

app.filter('encentimetros',['numberFilter', function(numberFilter){
  return function(input){
    var numberAux = input.toString().replace(/,/g, '.');
    return numberFilter(numberAux, 2) * 100 + ' centimetros';
  };
}]);

app.controller('SimpleCtrl', ['$http', function($http) {

  var team = null;
  var showTable = false;

  this.getBasketballTeam = function() {
    $http.get('data.json').then(function(response) {
      team = response.data;
      showTable = true;
    });
  };

  this.isShowTable = function(){
    return showTable;
  };

  this.getTeam = function () {
    if (team === null) {
      return "aún no hay datos";
    }
    return team;
  };

  this.clean = function(){
    team = null;
    showTable = false;
  };
}]);

app.directive('tableTeam', function(){
  return {
    restrict:'E',
    templateUrl: 'html/table-team.html'
  };
});
