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
                var decodedBody = decodeURI(index.body);
                index.snippet = decodedBody.slice(0, 300) + ' (. . .)';
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
      obj.decodeDescription = function(description) {
        var arr = description.split('%0A'), elementArr = [];
        arr.forEach(function(index) {
          if (index.length !== 0) {
            el = 'p'
            content = decodeURI(index);
            elementArr.push({el: el, content: content});
          } else {
            el = 'br'
            elementArr.push({el: el, content: null});
          }
        });
        return elementArr;
      };
      return obj
    }
]);
