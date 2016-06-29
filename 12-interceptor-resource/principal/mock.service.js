angular.module('principal')
.factory('MockService', ['$resource', '$q',
function($resource, $q){
    return $resource(null, {}, {
      post: {
        url: 'http://jsonplaceholder.typicode.com/post/:id'
      },
      posts: {
        method:'GET',
        url: 'http://jsonplaceholder.typicode.com/posts'
      },
      deletePost:{
        method:'DELETE',
        url:'http://jsonplaceholder.typicode.com/post/:id'
      }
    });
}]);
