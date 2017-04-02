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
    $scope.bodyArray = posts.decodeDescription($scope.post.body);
    //take encoded description from events obj, write some DOM elements onto the page
    $scope.setDOMNode = function(arr, elementId) {
      var div = document.getElementById(elementId);
      arr.forEach(function(obj) {
        var el, text;
        el = document.createElement(obj.el);
        if (obj.content !== null) {
          text = document.createTextNode(obj.content);
          el.appendChild(text);
        }
        div.appendChild(el);
      });
    };
    $scope.setDOMNode($scope.bodyArray, 'post-body');;
  }
])
