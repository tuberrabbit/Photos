var photosApp = angular.module('photosApp', [
  'ngRoute'
]);

photosApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: './pages/photo-wall.html',
    controller: 'photoWallController',
    controllerAs: 'vm'
  }).otherwise({
    templateUrl: './error.html'
  });
}]);
