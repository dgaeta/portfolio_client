// var demoApp = angular.module('demoApp', ['demoControllers']);

var demoApp = angular.module('demoApp', ['ngRoute', 'demoControllers', 'demoServices', 'portfolioFilters']);

demoApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/firstview', {
    templateUrl: 'partials/firstview.html',
    controller: 'FirstController'
  }).
  when('/secondview', {
    templateUrl: 'partials/secondview.html',
    controller: 'SecondController'
  }).
  when('/settings', {
    templateUrl: 'partials/settings.html',
    controller: 'SettingsController'
  }).
  when('/llamalist', {
    templateUrl: 'partials/llamalist.html',
    controller: 'LlamaListController'
  }).
  when('/chess10', {
    templateUrl: 'partials/chess10.html',
    controller: 'Chess10Controller'
  }).
  when('/chess11', {
    templateUrl: 'partials/chess11.html',
    controller: 'Chess11Controller'
  }).
  when('/chess12', {
    templateUrl: 'partials/chess12.html',
    controller: 'Chess12Controller'
  }).
  when('/csair20', {
    templateUrl: 'partials/csair20.html',
    controller: 'Chess10Controller'
  }).
  when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);