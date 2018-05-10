#!/usr/bin/node

var usernames = [];
var http = require("http");
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/rr'; 

MongoClient.connect(url, function(err, db) {
  console.log("数据库连接成功！");
  selectData(db, function(result) {
    for(let i=0;i<result.length;i++) {
      usernames.push(result[i].username);
    }
    db.close();
    console.log("usernames: ", usernames);
  });
});
  

http.createServer(function(req, res) {
    console.log("req.headers: ", req.headers);
    console.log("req.url: ", req.url);
    console.log("");

    switch(req.method) {
        case "GET":
            get(res);
            break;
        case "POST":
            insert(req, res);
            break;
        default:
            console.log(req);
            break;
    }
}).listen(8000);

function get(res) {
    console.log("GET");
    var body = "hello";
    
    res.setHeader("Content-Length", Buffer.byteLength(body));
    res.setHeader("Content-Type", "text/plain; charset='utf-8'");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(body);

}
function insert(req, res) {
    console.log("POST");
    
    var username = "";
    var password = "";
    var had = false; // 标识符
    var end = "注册成功";

    req.on("data", function(data) {
      username = JSON.parse(data.toString("utf8")).username;
      password = JSON.parse(data.toString("utf8")).password;
      for(let i = 0; i < usernames.length; i++) {
        if(username == usernames[i]) {
          end = "用户名已存在";
          had = true;
          break;
        }
      }

      if(had === false) {
        MongoClient.connect(url, function(err, db) {
          console.log("数据库连接成功！");
          insertData(db, function(result) {
            console.log(result);
            db.close();
          }, username, password);
        });
      }
      
    });

    req.on("end", function() {
      if(had === false) {
        usernames.push(username);
      }
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "text/plain; charset='utf-8'");
      res.setHeader("Content-Length", Buffer.byteLength(end));
      res.end(end);

    });

}

function selectData(db, callback) {  
  var collection = db.collection('user');
  collection.find().toArray(function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
};

function insertData(db, callback, username, password)  {  
    var collection = db.collection('user');
    var usr = "";
    var psw = "";
    usr += username;
    psw += password;
    var data = [{username: usr, password: psw}];
    collection.insert(data, function(err, result) { 
      if(err) {
        console.log('Error:'+ err);
        return;
      }     
      callback(result);
    });
}
