photosApp.controller('photoWallController', function () {
  var vm = this;
  const MODE_SWITCH = ['thumbnail', 'list'];
  var current = 0;
  vm.mode = MODE_SWITCH[current];
  vm.button = './images/' + vm.mode + '.png';
  vm.changeMode = function () {
    current ^= 1;
    vm.mode = MODE_SWITCH[current];
    vm.button = './images/' + vm.mode + '.png';
  }
});
