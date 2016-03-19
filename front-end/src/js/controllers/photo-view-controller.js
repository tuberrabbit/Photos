photosApp.controller('photoViewController', function ($routeParams, photoService) {
  var vm = this;
  var init = function () {
    vm.id = $routeParams.id;
    photoService.getPhotoById(vm.id)
      .then(function (res) {
        vm.image = res.data;
        vm.image.file = vm.image.src.split('/').pop();
      });
  }
  init();
});
