photosApp.service('photoService', function ($http, $q) {
  this.getPhotos = function () {
    var defer = $q.defer();
    defer.resolve({
      data: [{
        src: '',
        alt: '图片1'
      },{
        src: '',
        alt: '图片2'
      },{
        src: '',
        alt: '图片3'
      },{
        src: '',
        alt: '图片4'
      },{
        src: '',
        alt: '图片5'
      },{
        src: '',
        alt: '图片6'
      },{
        src: '',
        alt: '图片7'
      }]
    });
    return defer.promise;
  };
});
