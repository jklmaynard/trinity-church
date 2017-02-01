angular.module('trinityChurch')
  .factory('posts', [
    '$http',
    function($http){
      var obj = {
        posts: [],
        getAll: function () {
          return $http.get('/posts.json').then(function(data) {
            data.data.forEach(function(index) {
              if (index.body) {
                index.snippet = index.body.slice(0, 300) + ' (. . .)';
              }
            });
            angular.copy(data.data, obj.posts);
          });
        },
        createPost: function (post) {
          return $http.post('/posts.json', post).then(function(data) {
            obj.posts.push(data.data);
          });
        },
        deletePost: function (post) {
          position = obj.posts.indexOf(post);
          return $http.delete('/posts/' + post.id).then(function(data) {
            obj.events.splice(position, 1);
          });
        }
      };
      return obj
    }
]);
