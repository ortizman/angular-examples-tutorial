var climamod = angular.module('climamod', []);

climamod.directive('showClima', function(){
    return {
      restrict: 'E',
      scope:{
        datos:'='
      },
      templateUrl:'clima/showClima.html'
    };
});
