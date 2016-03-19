var photosApp = angular.module('photosApp', [
  'ngRoute'
]);

photosApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: './pages/photo-wall.html',
    controller: 'photoWallController',
    controllerAs: 'vm'
  }).when('/view/:id', {
    templateUrl: './pages/photo-view.html',
    controller: 'photoViewController',
    controllerAs: 'vm',
  }).otherwise({
    templateUrl: './error.html'
  });
}]);
