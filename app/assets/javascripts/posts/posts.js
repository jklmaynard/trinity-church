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
        },
        createPost: function (post) {
          return $http.post('/posts.json', post).then(function(data) {
            obj.posts.push(data.data);
          })
        }
      };
      return obj
    }
]);
