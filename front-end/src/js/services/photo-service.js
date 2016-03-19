photosApp.service('photoService', function ($http, $q) {
  this.getPhotos = function () {
    var defer = $q.defer();
    defer.resolve({
      data: [{
        src: './images/img1.jpeg',
        alt: 'img1'
      }, {
        src: './images/img2.jpeg',
        alt: 'img2'
      }, {
        src: './images/img3.jpeg',
        alt: 'img3'
      }, {
        src: './images/img4.jpeg',
        alt: 'img4'
      }, {
        src: './images/img5.jpeg',
        alt: 'img5'
      }, {
        src: './images/img6.jpeg',
        alt: 'img6'
      }, {
        src: './images/img7.jpeg',
        alt: 'img7'
      }]
    });
    return defer.promise;
  };
});
