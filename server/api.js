#!/usr/bin/node

var http = require("http");
var items = [];
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/todo';    
  

http.createServer(function(req, res) {
    console.log(req.headers);
    console.log(req.url);
    console.log("");

    switch(req.method) {
        case "GET":
            get(res);
            break;
        case "POST":
            insert(req, res);
            break;
        case "OPTIONS":
            if(req.headers["access-control-request-method"] === "PUT") {
              change(req, res);
            } else if(req.headers["access-control-request-method"] === "DELETE") {
              del(req, res);
            }
            break;
        default:
            console.log(req);
            break;
    }
}).listen(8000);

function get(res) {
    MongoClient.connect(url, function(err, db) {
      console.log("数据库连接成功！");
      selectData(db, function(result) {
        items = [];
        for(let i=0;i<result.length;i++) {
          console.log(result.length, result[i].todo);
          items.push(result[i].todo);
        }
        db.close();
        console.log("GET请求，当前item为", items);
      });
    });

    var body = JSON.stringify(items);

    res.setHeader("Content-Length", Buffer.byteLength(body));
    res.setHeader("Content-Type", "text/plain; charset='utf-8'");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(body);


}
function insert(req, res) {


    console.log("POST");
    var item = "";
    req.on("data", function(data) {
      item += data;
      MongoClient.connect(url, function(err, db) {
          console.log("数据库连接成功！");
          insertData(db, function(result) {
            console.log(result);
            db.close();
            console.log("POST请求，当前item为",items);
          }, data);
      });
    });
    req.on("end", function() {
      items.push(item);
    });

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end();
}
function del(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    console.log("DELETE");
    var arg = req.url.split("/");
    if(arg[1] === "") {
      items = [];
    }

    var i = parseInt(arg[1]);
    var data = items[i];
    if(!items[i]) {
      res.statusCode = 404;
      res.end("Not Found");
    } else {
      items.splice(i, 1);
      MongoClient.connect(url, function(err, db) {
        console.log("数据库连接成功！");
        delData(db, function(result) {
          console.log(result);
          db.close();
        }, data);
      }); 
      res.end("Delete OK");
      console.log("DELETE请求，当前items为", items);
    }

}
function change(req, res) {

    console.log("PUT");
    var arg = req.url.split("/");
    if(arg[1] === "") {
      items = [];
    }
    var item = "";
    req.on("data", function(chunk) {
      item += chunk;
    });
    req.on("end", function() {
      var i = parseInt(arg[1]);
      if(!items[i]) {
        res.statusCode = 404;
        res.end("Not Found");
      } else {
        items[i] = item;
        res.end("Change OK");
      }
    });
    res.setHeader("Access-Control-Allow-Origin", "*");
}
function selectData(db, callback) {  
  var collection = db.collection('todo');
  collection.find().toArray(function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
};

function insertData(db, callback, todo)  {  
    var collection = db.collection('todo');
    var chunk = "";
    chunk += todo;
    var data = [{todo: chunk}];
    collection.insert(data, function(err, result) { 
      if(err) {
        console.log('Error:'+ err);
        return;
      }     
      callback(result);
    });
}

function delData(db, callback, data) {  
  var collection = db.collection('todo');
  var whereStr = {todo: data};
  collection.remove(whereStr, function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
};
