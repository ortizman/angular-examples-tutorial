angular.module('principal')
.factory('MockService', ['$resource', '$q',
function($resource){
    return $resource(null, {}, {
      post: {
        url: 'http://jsonplaceholder.typicode.com/post/:id'
      },
      posts: {
        method:'GET',
        isArray: true,
        url: 'http://jsonplaceholder.typicode.com/posts'
      },
      deletePost:{
        method:'DELETE',
        url:'http://jsonplaceholder.typicode.com/post/:id'
      }
    });
}]);
