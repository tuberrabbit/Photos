var http = require('http');
var fs = require('fs');
var f = fs.createWriteStream('upload.jpeg');

const PORT = 8080;

function handleRequest(request, response) {
  request.on('data', function (chunk) {
    f.write(chunk);
  });
  request.on('end',function(){
    f.end();
  });
  response.end();
}

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
  console.log("Server listening on: http://localhost:%s", PORT);
});

//http.get('http://localhost:3000/dist/images/img1.jpeg',function(res){
//  //res.pipe(fs.createWriteStream('upload.jpeg'));
//  res.on('data', function (chunk) {
//    f.write(chunk);
//  });
//  res.on('end',function(){
//    f.end();
//  });
//});
