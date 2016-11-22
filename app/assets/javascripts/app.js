angular.module('trinityChurch', ['ui.router', 'templates'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'MainCtrl'
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
      controller: 'MainCtrl'
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
    $urlRouterProvider.otherwise('home');
  }
])
