angular.module('app', [
  'principal',
  'climamod',
  'LocalStorageModule',
  'ngResource'
]);

angular.module('climamod', []);
angular.module('principal', ['ngResource']);
