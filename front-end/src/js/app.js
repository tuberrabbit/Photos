var photosApp = angular.module('photosApp', [
  'ngRoute'
]);

photosApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: './pages/test-photo.html',
    controller: 'testPhotoController',
    controllerAs: 'vm'
  }).otherwise({
    templateUrl: './error.html'
  });
}]);
