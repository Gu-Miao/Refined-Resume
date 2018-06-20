#!/usr/bin/node

var http = require("http");
var fs = require("fs");
var os = require("os");

var root = __dirname + "/../src/index";
console.log(root);
var server = http.createServer(function(req, res) {

  var fileName = root + req.url;
  var ip = "";
  var date = getDay(0);

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

  if(req.url != "/undefined") {
    fs.createReadStream(fileName).pipe(res);
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

function getDay(day){
  var today = new Date();
  var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
  today.setTime(targetday_milliseconds);
  var tYear = today.getFullYear();
  var tMonth = today.getMonth();
  var tDate = today.getDate();
  tMonth = doHandleMonth(tMonth + 1);
  tDate = doHandleMonth(tDate);
  return tYear+"-"+tMonth+"-"+tDate;
}

function doHandleMonth(month){
  var m = month;
  if(month.toString().length == 1){
   m = "0" + month;
  }
  return m;
}