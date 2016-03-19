photosApp.service('photoService', function ($http, $q) {
  this.getPhotos = function () {
    var defer = $q.defer();
    defer.resolve({
      data: [{
        src: './images/img1.jpeg',
        alt: '图片1'
      },{
        src: './images/img2.jpeg',
        alt: '图片2'
      },{
        src: './images/img3.jpeg',
        alt: '图片3'
      },{
        src: './images/img4.jpeg',
        alt: '图片4'
      },{
        src: './images/img5.jpeg',
        alt: '图片5'
      },{
        src: './images/img6.jpeg',
        alt: '图片6'
      },{
        src: './images/img7.jpeg',
        alt: '图片7'
      }]
    });
    return defer.promise;
  };
});
