angular.module('chatconfig', ['ngRoute'])
.config(function ($routeProvider, $locationProvider, PageConfig, $httpProvider, Constants) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider
  .when('/AxisRooms_Assignment/', {
      templateUrl: 'component/chatting/chatting.html',
      controller: 'ChattingCtrl',
      cache: false
  })
  //$urlRouterProvider.otherwise('AxisRooms_Assignment/');
});