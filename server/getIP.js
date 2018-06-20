#!/usr/bin/node

var http = require("http");
var fs = require("fs");
var os = require("os");

var server = http.createServer(function(req, res) {

  var ip = "";

  console.log("req.url: ", req.url);
  console.log("req.headers: ", req.headers);

  if(req.headers.accept) {
    if(req.headers.accept.substring(0,9) == "text/html") {
      fileName = root + "/index.html";
      if(getClientIp(req).split(":")[getClientIp(req).split(":").length-1] == 1) {
        ip = getIPAdress();
        console.log("IP: ", ip);
      } else {
        ip = getClientIp(req).split(":")[getClientIp(req).split(":").length-1];
        console.log("IP: ", ip);
      }
    }
  }
  
}).listen(8080);

function getClientIp(req) {
  return req.headers['x-forwarded-for'] ||
  req.connection.remoteAddress ||
  req.socket.remoteAddress ||
  req.connection.socket.remoteAddress;
};

function getIPAdress(){  
  var interfaces = os.networkInterfaces();  
  for(var devName in interfaces){  
    var iface = interfaces[devName];  
    for(var i=0;i<iface.length;i++){  
      var alias = iface[i];  
      if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){  
        return alias.address;  
      }  
    }  
  }  
}