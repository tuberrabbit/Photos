photosApp.directive('imageList', function (photoService) {
  return {
    restrict: 'E',
    templateUrl: './templates/image-list.html',
    link: function (scope) {
      photoService.getPhotos()
        .then(function (res) {
          scope.imageList = res.data;
        });
    }
  };
});
