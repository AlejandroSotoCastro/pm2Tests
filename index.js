function test() {
  setTimeout(() => {
    console.log(" test");
    test();
  }, 1000);
}

var cluster = require("cluster");
var http = require("http");
var numCPUs = 4;

if (cluster.isMaster) {
  test();

  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  http
    .createServer(function (req, res) {
      res.writeHead(200);
      res.end("Xillio v-" + process.pid);
    })
    .listen(8000);
}
