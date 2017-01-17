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
      if (!$scope.is_event) {
        $scope.posts.push({
          title: $scope.title,
          body: $scope.body,
          is_event: false
        });
      } else {
        $scope.events.push({
          title: $scope.title,
          body: $scope.body,
          is_event: $scope.is_event
        })
      }
      $scope.title = '';
      $scope.body = '';
    };
  },
])
