angular.module('app6', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      controller: 'homeCtrl',
      url: '/',
      templateUrl:'templates/homeTemp.html'
    })
    .state('signup', {
      controller: 'signUpCtrl',
      url: '/signup',
      templateUrl: 'templates/signUpTemp.html'
    })
    .state('details', {
      controller:'detailsCtrl',
      url: '/details/:url',
      templateUrl: 'templates/detailsTemp.html'
    });

});
