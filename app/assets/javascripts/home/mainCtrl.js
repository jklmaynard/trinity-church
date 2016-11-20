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
      });
      $scope.title = '';
    };
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    }

  },
])
