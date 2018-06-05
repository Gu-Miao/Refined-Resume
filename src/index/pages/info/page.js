#!/usr/bin/node

var http = require("http");
var fs = require("fs");

var root = __dirname + "\\";
console.log(root);
var server = http.createServer(function(req, res) {

  var url = "http://" + req.headers.host + req.url;

  console.log("url:", url);
  console.log("headers:", req.headers);
  console.log("");

  var fileName = root + req.url;

  fs.createReadStream(fileName).pipe(res);
}).listen(8080);
