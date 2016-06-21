'use strict';
/**
 * @ngdoc service
 * @name app.Services.AuthService
 * @description AuthService Factory
 */
angular.module('app')
  .factory('AuthService', [
    'localStorageService',
    function(localStorageService) {
      var
        getToken = function() {
          return localStorageService.get('accessToken');
        },
        isLoggedIn = function() {
          return angular.isDefined(getToken()) && getToken() !== null;
        },
        setToken = function(accessToken) {
          localStorageService.set('accessToken', accessToken);
        },
        logout = function() {
          localStorageService.set('accessToken', null);
        };

      return {
        isLoggedIn: isLoggedIn,
        getToken: getToken,
        setToken: setToken,
        logout: logout
      };
    }
  ]);
