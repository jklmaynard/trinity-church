angular.module('trinityChurch', ['ui.router', 'templates', 'Devise'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'MainCtrl',
        resolve: {
          postPromise: ['posts', function(posts) {
            return posts.getAll();
          }]
        }
      }
    );
    $stateProvider.state('posts', {
      url: '/posts/{id}',
      templateUrl: 'posts/_posts.html',
      controller: 'PostsCtrl'
    });
    $stateProvider.state('events', {
      url: '/events',
      templateUrl: 'static/_events.html',
      controller: 'MainCtrl',
      resolve: {
        postPromise: ['posts', function(posts) {
          return posts.getAll();
        }]
      }
    });
    $stateProvider.state('about', {
      url: '/about',
      templateUrl: 'static/_about.html',
      controller: 'MainCtrl'
    });
    $stateProvider.state('staff', {
      url: '/staff',
      templateUrl: 'static/_staff.html',
      controller: 'MainCtrl'
    });
    $stateProvider.state('posts_home', {
      url: '/message',
      templateUrl: 'static/_posts_home.html',
      controller: 'MainCtrl'
    });
    $stateProvider.state('create-post', {
      url: '/create-post',
      templateUrl: 'static/_create-post.html',
      controller: 'MainCtrl'
    });
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function() {
          $state.go('home');
        })
      }]
    })
    $urlRouterProvider.otherwise('home');
  }
])
