angular.module('trinityChurch')
  .factory('posts', [
    '$http',
    function($http){
      var obj = {
        posts: [],
        getAll: function () {
          return $http.get('/posts.json').then(function(data) {
            angular.copy(data.data, obj.posts);
          });
        }
      };
      return obj
    }
]);
