#!/usr/bin/node

var users = [];
var http = require("http");
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/rr'; 

MongoClient.connect(url, function(err, db) {
  console.log("数据库连接成功！");
  selectData(db, function(result) {
    for(let i=0;i<result.length;i++) {
      users.push(result[i]);
    }
    db.close();
    console.log("users: ", users);
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
            req.on("data",function(data) {
              var id = JSON.parse(data.toString("utf8")).id;
              switch(id){
                case "reg":
                  reg(data, req, res);
                  break;
                case "login":
                  login(data, req, res);
                  break;
                case "getpsw1":
                  next1(data, req, res);
                  break;
                case "getpsw2":
                  next2(data, req, res);
                  break;
                case "changePsw":
                  changePsw(data, req, res);
                  break;
                default: 
                  break;
              }
            });
        default:
            console.log(req);
            break;
    }
}).listen(8000);

function login(data, req, res) {
    console.log("login/POST");
    console.log(JSON.parse(data.toString("utf8")));

    var username = "";
    var password = "";
    var end = "用户名不存在";

    username = JSON.parse(data.toString("utf8")).username;
    password = JSON.parse(data.toString("utf8")).password;
    
    for(let i = 0; i < users.length; i++) {
      if(users[i].username === username) {
        if(users[i].password === password) {
          end = "登陆成功";
        } else {
          end = "密码错误";
        }
      }
    }

    req.on("end", function() {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "text/plain; charset='utf-8'");
      res.setHeader("Content-Length", Buffer.byteLength(end));
      res.end(end);

    });

}
function reg(data, req, res) {
    console.log("reg/POST");
    
    var username = "";
    var password = "";
    var had = false; // 标识符
    var end = "注册成功";

    username = JSON.parse(data.toString("utf8")).username;
    password = JSON.parse(data.toString("utf8")).password;
    qestion = JSON.parse(data.toString("utf8")).qestion;
    answer = JSON.parse(data.toString("utf8")).answer;
    for(let i = 0; i < users.length; i++) {
      if(username == users[i].username) {
        end = "用户名已存在";
        had = true;
        break;
      }
    }

    if(had === false) {
      MongoClient.connect(url, function(err, db) {
        console.log("数据库连接成功！");
        regInsert(db, function(result) {
          console.log(result);
          users.push(result);
          db.close();
        }, username, password, qestion, answer);
      });
    }
      

    req.on("end", function() {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "text/plain; charset='utf-8'");
      res.setHeader("Content-Length", Buffer.byteLength(end));
      res.end(end);
    });
}

function next1(data, req, res) {
  console.log("login/POST");
  console.log(JSON.parse(data.toString("utf8")));

  var username = "";
  var end = "用户名不存在";

  username = JSON.parse(data.toString("utf8")).username;
  
  for(let i = 0; i < users.length; i++) {
    if(users[i].username === username) {
      var qes = users[i].qestion;
      end = qes;
    }
  }

  req.on("end", function() {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "text/plain; charset='utf-8'");
    res.setHeader("Content-Length", Buffer.byteLength(end));
    res.end(end);
  });

}

function next2(data, req, res) {
  console.log("next2/POST");
  console.log(JSON.parse(data.toString("utf8")));

  var username  = "";
  var answer = "";
  var end = "密保问题答案错误";

  username = JSON.parse(data.toString("utf8")).username;
  answer = JSON.parse(data.toString("utf8")).answer;
  
  for(let i = 0; i < users.length; i++) {
    if(users[i].username === username) {
      if(users[i].answer === answer) {
        end = "密保问题正确";
      }
    }
  }

  req.on("end", function() {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "text/plain; charset='utf-8'");
    res.setHeader("Content-Length", Buffer.byteLength(end));
    res.end(end);
  });

}

function changePsw(data, req, res) {
  console.log("changePsw/POST");
  console.log(JSON.parse(data.toString("utf8")));

  var username  = "";
  var password = "";
  var end = "密码修改失败";

  username = JSON.parse(data.toString("utf8")).username;
  password = JSON.parse(data.toString("utf8")).password;
  
  MongoClient.connect(url, function(err, db) {
      console.log("连接成功！");
      updatePsw(db, function(result) {
          console.log(result);
          db.close();
          end = "密码找回成功";
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Content-Type", "text/plain; charset='utf-8'");
          res.setHeader("Content-Length", Buffer.byteLength(end));
          res.end(end);
      }, username, password);
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

function regInsert(db, callback, username, password, qestion, answer)  {  
    var collection = db.collection('user');
    var usr = "";
    var psw = "";
    var qes = "";
    var ans = "";
    usr += username;
    psw += password;
    qes += qestion;
    ans += answer;
    var data = [{username: usr, password: psw, qestion: qes, answer: ans}];
    collection.insert(data, function(err, result) { 
      if(err) {
        console.log('Error:'+ err);
        return;
      }     
      callback(result);
    });
}

var updatePsw = function(db, callback, username, password) {   
  var collection = db.collection('user');
  var usr = "";
  var psw = "";
  usr += username;
  psw += password;
  var whereStr = {username: usr};
  var updateStr = {$set: {password: psw}};
  collection.update(whereStr,updateStr, function(err, result) {
      if(err)
      {
          console.log('Error:'+ err);
          return;
      }     
      callback(result);
  });
};
