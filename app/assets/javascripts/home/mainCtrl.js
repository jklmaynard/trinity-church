angular.module('trinityChurch')
.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts){
    $scope.posts = posts.posts;
    $scope.events = posts.events;
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
