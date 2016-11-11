angular.module('trinityChurch')
.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts){
    $scope.posts = posts.posts;
    $scope.addPost = function() {
      if (!$scope.title || $scope.title === '') {
        return;
      }
      $scope.posts.push({
        title: $scope.title,
        upvotes: 0,
        comments: [
          {author: 'Bob', body: 'Cool post brah', upvaotes: 0},
          {author: 'God', body: 'Amen', upvotes: 666}
        ]
      });
      $scope.title = '';
    };
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    }

  },
])
