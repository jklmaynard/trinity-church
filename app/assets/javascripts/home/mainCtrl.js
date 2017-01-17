angular.module('trinityChurch')
.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts){
    $scope.posts = [];
    $scope.events = [];
    posts.posts.forEach(function (index) {
      !index.is_event ? $scope.posts.push(index) : $scope.events.push(index);
    })
    $scope.addPost = function() {
      if (!$scope.title || $scope.title === '') {
        return;
      }
      posts.createPost({
        title: $scope.title,
        body: $scope.body,
        is_event: $scope.is_event === undefined ? false : true
      });

      $scope.title = '';
      $scope.body = '';
    };
  },
])
