angular.module('principal')
.factory('MockService', ['$resource', '$q',
function($resource, $q){
    return $resource('http://jsonplaceholder.typicode.com/', {}, {
      posts: {
        method:'GET',
        isArray: true,
        url: 'http://jsonplaceholder.typicode.com/posts/:id'
      }
    });
}]);
