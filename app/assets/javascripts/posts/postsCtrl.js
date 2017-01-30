angular.module('trinityChurch')
.controller('PostsCtrl', [
  '$scope',
  '$stateParams',
  'posts',
  'Auth',
  function($scope, $stateParams, posts, Auth){
    Auth.currentUser().then(function() {
      $scope.signedIn = Auth.isAuthenticated;
    });
    $scope.post = posts.posts[$stateParams.id]
  }
])
