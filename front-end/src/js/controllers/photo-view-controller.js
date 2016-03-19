photosApp.controller('photoViewController', function ($routeParams) {
  this.image = $routeParams.id;
  this.test = 'success';
});
