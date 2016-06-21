'use strict';
/**
 * @ngdoc service
 * @name app.Services.HttpTokeHeadersrceptor
 * @description HttpTokeHeadersrceptor Factory
 */
angular.module('app')
  .factory('httpHeadersInterceptor', [
    '$q', 'AuthService',
    function($q, AuthService) {
      return {
        request: function(config) {
          // If is not an html page
          if (config.url.indexOf('.html') === -1) {
            // If user es logged in and is not logout endpoint (doesn't need the api key)
            if (AuthService.isLoggedIn() && config.url.indexOf('logout') === -1) {
              config.headers['api-key'] = AuthService.getToken();
            }

            //config.headers['device-info'] = DeviceService.getDevice(true);
          }
          return config || $q.when(config);
        }
      };
    }
  ])
  .config([
    '$httpProvider',
    function($httpProvider) {
      $httpProvider.interceptors.push('httpHeadersInterceptor');
    }
  ]);
