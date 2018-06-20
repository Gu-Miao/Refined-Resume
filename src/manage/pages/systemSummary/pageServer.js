#!/usr/bin/node

var http = require("http");
var fs = require("fs");
var os = require("os");
var MongoClient = require('mongodb').MongoClient;
var mUrl = 'mongodb://localhost:27017/rr';
var root = __dirname + "/" + "";

MongoClient.connect(mUrl, function(err, db) {
  console.log("连接成功！");
  selectData(db, function(result) {
  	console.log(result.length)
  	if (result.length == 0) {
  		console.log(1);
  		insertData(db, function(result) {
			console.log(result);
		});
  	}
    console.log(result);
    db.close();
  });
});

var server = http.createServer(function(req, res) {

  var url = "http://" + req.headers.host + req.url;

  // console.log("url:", url);
  // console.log("headers:", req.headers);
  // console.log("");
  console.log("req.url: ", getClientIp(req));
  console.log("local: ", getIPAdress());

  	if(url.slice(url.length-4, url.length) === "html") {

  		var ip = "";
  		if(getClientIp(req).split(":")[getClientIp(req).split(":").length-1] == 1) {
	  		console.log("IP: ", getIPAdress());
	  		ip = getIPAdress();
	  	} else {
	  		console.log("IP: ", getClientIp(req).split(":")[getClientIp(req).split(":").length-1]);
	  		ip = getClientIp(req).split(":")[getClientIp(req).split(":").length-1];
	  	}

  		MongoClient.connect(mUrl, function(err, db) {
			console.log("连接成功！");
			updateData(db, function(result) {
				console.log(result.result);
			});
			updateIp(db, function(result) {
				console.log(result.result);
				db.close();
			}, ip);
		});
  	}
  	

  var fileName = root + req.url;

  fs.createReadStream(fileName).pipe(res);
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

var updateData = function(db, callback) {  
    //连接到表  
    var collection = db.collection('visit');
    //更新数据
    var whereStr = {"date":getDay(0)};
    var updateStr = {$inc: { "count" : 1 }};
    collection.update(whereStr, updateStr, true, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }     
        callback(result);
    });
};

var updateIp = function(db, callback, arg) {  
    //连接到表  
    var collection = db.collection('ip');
    var ip = "";
    ip = arg;
    //更新数据
    var whereStr = {name: "ip"};
    var updateStr = {$set: { "address" : ip }};
    collection.update(whereStr, updateStr, true, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }     
        callback(result);
    });
};

function getDay(day){
    var today = new Date();
    var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
    today.setTime(targetday_milliseconds); //注意，这行是关键代码
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

var selectData = function(db, callback) {  
  //连接到表  
  var collection = db.collection('visit');
  //查询数据
  var whereStr = {"date": getDay(0)};
  collection.find(whereStr).toArray(function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
};

function insertData(db, callback) {  
    // 连接到表 site
    var collection = db.collection('visit');
    // 插入数据
    var data = [
      {
        "date": getDay(0),
        "count": 0
      }
    ];
    collection.insert(data, function(err, result) { 
      if(err) {
        console.log('Error:'+ err);
        return;
      }     
      callback(result);
    });
}