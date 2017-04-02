angular.module('trinityChurch')
.controller('MainCtrl', [
  '$scope',
  'posts',
  'Auth',
  function($scope, posts, Auth){
    $scope.posts = [];
    $scope.events = [];
    Auth.currentUser().then(function() {
      $scope.signedIn = Auth.isAuthenticated;
    });
    posts.posts.forEach(function (index) {
      !index.is_event ? $scope.posts.push(index) : $scope.events.push(index);
    });
    $scope.addPost = function() {
      if (!$scope.title || $scope.title === '') {
        return;
      }
      posts.createPost({
        title: $scope.title,
        body: encodeURI($scope.body),
        is_event: $scope.is_event === undefined ? false : true,
        snippet: $scope.body.slice(0, 300) + '(. . . )'
      });

      $scope.title = '';
      $scope.body = '';
    };
    $scope.deletePost = function(post) {
      posts.deletePost(post);
    }
  },
])
