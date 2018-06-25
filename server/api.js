#!/usr/bin/node

var users = [];
var managers = [];
var http = require("http");
var os = require("os");
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/rr'; 

MongoClient.connect(url, function(err, db) {
  console.log("数据库连接成功！");
  selectData(db, function(result) {
    for(let i=0;i<result.length;i++) {
      users.push(result[i]);
    }
    console.log("users: ", users);
  }, "user");
  selectData(db, function(result) {
    for(let i=0;i<result.length;i++) {
      managers.push(result[i]);
    }
    db.close();
    console.log("managers: ", managers);
  }, "manager");
});
  

http.createServer(function(req, res) {
    switch(req.method) {
        case "POST":
            req.on("data",function(data) {
              var id = JSON.parse(data.toString("utf8")).id;
              switch(id){
                case "ip": 
                  getIP(data, req, res);
                  break;
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
                case "changeInfo1":
                  changeInfo1(data, req, res);
                  break;
                case "changeInfo2":
                  changeInfo2(data, req, res);
                  break;
                case "changeInfo3":
                  changeInfo3(data, req, res);
                  break;
                case "changeInfo4":
                  changeInfo4(data, req, res);
                  break;
                case "changeInfo5":
                  changeInfo5(data, req, res);
                  break;
                case "changeInfo6":
                  changeInfo6(data, req, res);
                  break;
                case "visit":
                  visit(data, req, res);
                  break;
                case "mLogin":
                  mLogin(data, req, res);
                  break;
                case "systemSummary":
                  systemSummary(data, req, res);
                  break;
                case "systemLog":
                   systemLog(data, req, res);
                   break;
                case "templateManage":
                    templateMange(data, req, res);
                    break;
                case "addHome":
                    addHome(data, req, res);
                    break;
                case "addAD":
                    addAD(data, req, res);
                    break;
                case "cancelHome":
                    cancelHome(data, req, res);
                    break;
                case "cancelAD":
                    cancelAD(data, req, res);
                    break;
                case "userInformation":
                    userInformation(data, req, res);
                    break;
                case "manager":
                    manager(data, req, res);
                    break;
                case "changePassword":
                    changePassword(data, req, res);
                    break;
                default: 
                  break;
              }
            });
        default:
            break;
    }
}).listen(8000);

function getIP(data, req, res) { // 获取用户端IP
  console.log("getIP/POST");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset='utf-8'");

  var ip = "";
  var username = "";
  username += JSON.parse(data.toString("utf8")).username;
  var type = "user";

  
  if(getClientIp(req).split(":")[getClientIp(req).split(":").length-1] == 1) {
    ip = getIPAdress();
    console.log("IP: ", ip);
  } else {
    ip = getClientIp(req).split(":")[getClientIp(req).split(":").length-1];
    console.log("IP: ", ip);
  }

  var data = {
    type: type,
    username: username,
    ip: ip,
    date: getDay(0)
  }
  MongoClient.connect(url, function(err, db) {
    insertData(db, function(result) {
      console.log(result.result);
    }, "log", data);
    updateIP(db, function(result) {
      console.log(result.result);
    }, data)
  });
  
  res.setHeader("Content-Length", Buffer.byteLength(ip));
  res.end(ip);
}

function login(data, req, res) { // 用户登录
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
          end = JSON.stringify(users[i]);
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
function reg(data, req, res) { // 注册
    console.log("reg/POST");
    
    var username = "";
    var password = "";
    var had = false; // 标识符
    var end = "注册成功";

    username = JSON.parse(data.toString("utf8")).username;
    password = JSON.parse(data.toString("utf8")).password;
    question = JSON.parse(data.toString("utf8")).question;
    answer = JSON.parse(data.toString("utf8")).answer;
    ip = JSON.parse(data.toString("utf8")).ip;
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
        }, username, password, question, answer, ip);
        selectData(db, function(result) {
          users = [];
          for(let i=0;i<result.length;i++) {
            users.push(result[i]);
          }
          db.close();
          console.log("users: ", users);
        }, "user");
      });
    }
      

    req.on("end", function() {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "text/plain; charset='utf-8'");
      res.setHeader("Content-Length", Buffer.byteLength(end));
      res.end(end);
    });
}

function next1(data, req, res) { // 下一步
  console.log("login/POST");
  console.log(JSON.parse(data.toString("utf8")));

  var username = "";
  var end = "用户名不存在";

  username = JSON.parse(data.toString("utf8")).username;
  
  for(let i = 0; i < users.length; i++) {
    if(users[i].username === username) {
      var qes = users[i].question;
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

function next2(data, req, res) { // 下一步2
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

function changePsw(data, req, res) { // 更改密码
  console.log("changePsw/POST");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset='utf-8'");

  var username  = "";
  var password = "";
  var end = "密码修改失败";

  username = JSON.parse(data.toString("utf8")).username;
  password = JSON.parse(data.toString("utf8")).password;

  console.log(JSON.parse(data.toString("utf8")));
  
  MongoClient.connect(url, function(err, db) {
      console.log("连接成功！");
      updatePsw(db, function(result) {
        if(result.result.ok == 1) {
          end = "密码找回成功";
        }
      }, username, password);
      selectData(db, function(result) {
        users = [];
        for(let i=0;i<result.length;i++) {
          if(result[i].username === username && end == "密码找回成功") {
            end = JSON.stringify(result[i]);
          }
          users.push(result[i]);
        }
        res.setHeader("Content-Length", Buffer.byteLength(end));
        console.log("end: ", end);
        res.end(end);
        db.close();
        console.log("users: ", users);
      }, "user");
  });

}

function changeInfo1(data, req, res) { // 基本信息
  console.log("changeInfo1/POST");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset='utf-8'");

  var username = "";
  var name = "";
  var sex = "";
  var age = "";
  var home = "";
  var telephone = "";
  var end = "修改失败";

  console.log("data:", JSON .parse(data));

  username = JSON .parse(data).username;
  name = JSON .parse(data).name;
  sex = JSON .parse(data).sex;
  age = JSON .parse(data).age;
  home = JSON .parse(data).home;
  telephone = JSON .parse(data).telephone;

  var arg = {
    username: username,
    name: name,
    sex: sex,
    age: age,
    home: home,
    telephone: telephone
  }

  console.log("username: ", username);
  console.log("name: ", name);
  console.log("sex: ", sex);
  console.log("age: ", age);
  console.log("home: ", home);
  console.log("telephone: ", telephone);

  MongoClient.connect(url, function(err, db) {
    console.log("连接成功！");
    updateInfo1(db, function(result) {
      console.log(result.result);
      if(JSON.stringify(result.result.ok) == 1) {
        end = "修改成功";
      }
    }, arg);
    selectData(db, function(result) {
      users = [];
      for(let i=0;i<result.length;i++) {
        if(result[i].username === username && end == "修改成功") {
          end = JSON.stringify(result[i]);
        }
        users.push(result[i]);
      }
      
      res.setHeader("Content-Length", Buffer.byteLength(end));
      console.log("end: ", end);
      res.end(end);
      db.close();
      console.log("users: ", users);
    }, "user");
    
  });
}

function changeInfo2(data, req, res) { // 详细信息
  console.log("changeInfo2/POST");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset='utf-8'");

  var username = "";
  var tall = "";
  var weight = "";
  var blood = "";
  var hobby = "";
  var end = "修改失败";

  console.log("data:", JSON .parse(data));

  username = JSON .parse(data).username;
  tall = JSON .parse(data).tall;
  weight = JSON .parse(data).weight;
  blood = JSON .parse(data).blood;
  hobby = JSON .parse(data).hobby;

  var arg = {
    username: username,
    tall: tall,
    weight: weight,
    blood: blood,
    hobby: hobby
  }

  console.log("username: ", username);
  console.log("tall: ", tall);
  console.log("weight: ", weight);
  console.log("blood: ", blood);
  console.log("hobby: ", hobby);

  MongoClient.connect(url, function(err, db) {
    console.log("连接成功！");
    updateInfo2(db, function(result) {
      console.log(result.result);
      if(JSON.stringify(result.result.ok) == 1) {
        end = "修改成功";
      }
    }, arg);
    selectData(db, function(result) {
      users = [];
      for(let i=0;i<result.length;i++) {
        if(result[i].username === username && end == "修改成功") {
          end = JSON.stringify(result[i]);
        }
        users.push(result[i]);
      }
      res.setHeader("Content-Length", Buffer.byteLength(end));
      console.log("end: ", end);
      res.end(end);
      db.close();
      console.log("users: ", users);
    }, "user");
    
  });
}

function changeInfo3(data, req, res) { // 教育背景
  console.log("changeInfo3/POST");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset='utf-8'");

  var username = "";
  var education = "";
  var school = "";
  var end = "修改失败";

  console.log("data:", JSON .parse(data));

  username = JSON .parse(data).username;
  education = JSON .parse(data).education;
  school = JSON .parse(data).school;

  var arg = {
    username: username,
    school: school,
    education: education
  }

  console.log("username: ", username);
  console.log("education: ", education);
  console.log("school: ", school);

  MongoClient.connect(url, function(err, db) {
    console.log("连接成功！");
    updateInfo3(db, function(result) {
      console.log(result.result);
      if(JSON.stringify(result.result.ok) == 1) {
        end = "修改成功";
      }
    }, arg);
    selectData(db, function(result) {
      users = [];
      for(let i=0;i<result.length;i++) {
        if(result[i].username === username && end == "修改成功") {
          end = JSON.stringify(result[i]);
        }
        users.push(result[i]);
      }
      res.setHeader("Content-Length", Buffer.byteLength(end));
      console.log("end: ", end);
      res.end(end);
      db.close();
      console.log("users: ", users);
    }, "user");
  });
}

function changeInfo4(data, req, res) { // 工作信息
  console.log("changeInfo4/POST");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset='utf-8'");

  var username = "";
  var company = "";
  var postion = "";
  var experience = "";
  var end = "修改失败";

  console.log("data:", JSON .parse(data));

  username = JSON .parse(data).username;
  company = JSON .parse(data).company;
  postion = JSON .parse(data).postion;
  experience = JSON .parse(data).experience;

  var arg = {
    username: username,
    company: company,
    postion: postion,
    experience: experience
  }

  console.log("username: ", username);
  console.log("company: ", company);
  console.log("postion: ", postion);
  console.log("experience: ", experience);

  MongoClient.connect(url, function(err, db) {
    console.log("连接成功！");
    updateInfo4(db, function(result) {
      console.log(result.result);
      if(JSON.stringify(result.result.ok) == 1) {
        end = "修改成功";
      }
    }, arg);
    selectData(db, function(result) {
      users = [];
      for(let i=0;i<result.length;i++) {
        if(result[i].username === username && end == "修改成功") {
          end = JSON.stringify(result[i]);
        }
        users.push(result[i]);
      }
      res.setHeader("Content-Length", Buffer.byteLength(end));
      console.log("end: ", end);
      res.end(end);
      db.close();
      console.log("users: ", users);
    }, "user");
  });
}

function changeInfo4(data, req, res) { // 求职意向
  console.log("changeInfo5/POST");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset='utf-8'");

  var username = "";
  var postionwant = "";
  var pricewant = "";
  var end = "修改失败";

  console.log("data:", JSON .parse(data));

  username = JSON .parse(data).username;
  postionwant = JSON .parse(data).postionwant;
  pricewant = JSON .parse(data).pricewant;

  var arg = {
    username: username,
    postionwant: postionwant,
    pricewant: pricewant,
  }

  console.log("username: ", username);
  console.log("postionwant: ", postionwant);
  console.log("pricewant: ", pricewant);

  MongoClient.connect(url, function(err, db) {
    console.log("连接成功！");
    updateInfo5(db, function(result) {
      console.log(result.result);
      if(JSON.stringify(result.result.ok) == 1) {
        end = "修改成功";
      }
    }, arg);
    selectData(db, function(result) {
      users = [];
      for(let i=0;i<result.length;i++) {
        if(result[i].username === username && end == "修改成功") {
          end = JSON.stringify(result[i]);
        }
        users.push(result[i]);
      }
      res.setHeader("Content-Length", Buffer.byteLength(end));
      console.log("end: ", end);
      res.end(end);
      db.close();
      console.log("users: ", users);
    }, "user");
  });
}

function changeInfo6(data, req, res) { // 更改头像
  console.log("changeInfo6/POST");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset='utf-8'");

  var username = "";
  var userhead = "";
  var end = "修改失败";

  console.log("data:", JSON .parse(data));

  username = JSON .parse(data).username;
  userhead = JSON .parse(data).userhead;

  var arg = {
    username: username,
    userhead: userhead,
  }

  console.log("username: ", username);
  console.log("userhead: ", userhead);

  MongoClient.connect(url, function(err, db) {
    console.log("连接成功！");
    updateInfo6(db, function(result) {
      console.log(result.result);
      if(JSON.stringify(result.result.ok) == 1) {
        end = "修改成功";
      }
    }, arg);
    selectData(db, function(result) {
      users = [];
      for(let i=0;i<result.length;i++) {
        if(result[i].username === username && end == "修改成功") {
          end = JSON.stringify(result[i]);
        }
        users.push(result[i]);
      }
      res.setHeader("Content-Length", Buffer.byteLength(end));
      console.log("end: ", end);
      res.end(end);
      db.close();
      console.log("users: ", users);
    }, "user");
  });
}

function mLogin(data, req, res) { // 后台登录
  console.log("mLogin/POST");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset='utf-8'");

  var username = "";
  var password = "";
  var end = "用户名不存在";
  
  username = JSON.parse(data.toString("utf8")).usr;
  password = JSON.parse(data.toString("utf8")).psw;
  var arg = {
    whereStr: {username: username},
    updateStr: {$set: {logtime: getDay(0)}}
  }

  for(let i = 0; i < managers.length; i++) {
    if(managers[i].username === username) {
      if(managers[i].password === password) {
        end = JSON.stringify(managers[i]);
        MongoClient.connect(url, function(err, db) {
          updateDate(db, function(result) {
            console.log(result.result);
            db.close();
          }, arg);
        });
      }
    } else {
        end = "密码错误";
    }
  }

  res.setHeader("Content-Length", Buffer.byteLength(end));
  res.end(end);
}

function manager(data, req, res) { // 后台登录
  console.log("manager/POST");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset='utf-8'");

  var end = [];

  for(let i = 0; i < managers.length; i++) {
    end.push(managers[i]);
  }
  end = JSON.stringify(end);

  res.setHeader("Content-Length", Buffer.byteLength(end));
  res.end(end);
}

function visit(data, req, res) { // 前端页面访问
  console.log("visit/POST");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset='utf-8'");

  var end = "";
  var data = {
    date: getDay(0),
    count: 1
  }

  MongoClient.connect(url, function(err, db) {
    selectData1(db, function(result) {
      if(result.length == 0) {
        insertData(db, function(reslut) {}, "visit", data);
      } else {
        updateVisit(db, function(result) {});
      }
    }, "visit", getDay(0));
  });
}

function systemSummary(data, req, res) { // 后台概览
  console.log("systemSummary/POST");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset='utf-8'");

  var end = {};
  end.users = users.length;
  end.managers = managers.length;
  end.visit = [];

  MongoClient.connect(url, function(err, db) {
    
    selectData(db, function(result) {
      end.template = result.length;
      selectData(db, function(result) {
        end.use = result[0].count;
        for(let i = -6; i < 1; i++) {
          selectData1(db, function(result) {
            var data = {}
            if(result[0]){
              data = {
                date: result[0].date,
                count: result[0].count
              };
            } else {
              data = {
                date: getDay(i),
                count: 0
              };
            }
            end.visit.push(data);
            if(i == 0 && end.visit.length == 7) {
              db.close();
              console.log(end);
              end = JSON.stringify(end);
              res.setHeader("Content-Length", Buffer.byteLength(end));
              res.end(end);
            }
          }, "visit", getDay(i));
        }
      }, "use");
    }, "template");
  });
}

function systemLog(data, req, res) { // 系统日志
  console.log("systemLog/POST");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset='utf-8'");

  var end = [];

  MongoClient.connect(url, function(err, db) {
    
    selectData(db, function(result) {
      console.log(result);
      for(let i = 0; i < result.length; i++) {
        end.push(result[i]);
      }
      db.close();
      console.log(end);
      end = JSON.stringify(end);
      res.setHeader("Content-Length", Buffer.byteLength(end));
      res.end(end);
    }, "log");
    
  });
}

function templateMange(data, req, res) { // 模板管理
  console.log("templateMange/POST");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset='utf-8'");

  var end = [];

  MongoClient.connect(url, function(err, db) {
    
    selectData(db, function(result) {
      console.log(result);
      for(let i = 0; i < result.length; i++) {
        end.push(result[i]);
      }
      db.close();
      console.log(end);
      end = JSON.stringify(end);
      res.setHeader("Content-Length", Buffer.byteLength(end));
      res.end(end);
    }, "template");
  });
}

function addHome(data, req, res) { // 添加到首页
  console.log("addHome/POST");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset='utf-8'");

  var end = "添加失败";
  var id = "";
  id = JSON.parse(data.toString("utf8")).no;
  var arg = {
    url: id,
    cond: "home",
    b: true
  }

  MongoClient.connect(url, function(err, db) {
    updateTemplate(db, function(result) {
      console.log(result.result);
      db.close();
      end = "添加成功";
      end = JSON.stringify(end);
      res.setHeader("Content-Length", Buffer.byteLength(end));
      res.end(end);
    }, arg)
  });
}

function cancelHome(data, req, res) { // 取消首页
  console.log("cancelHome/POST");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset='utf-8'");

  var end = "取消失败";
  var id = "";
  id = JSON.parse(data.toString("utf8")).no;
  var arg = {
    url: id,
    cond: "home",
    b: false
  }

  MongoClient.connect(url, function(err, db) {
    updateTemplate(db, function(result) {
      console.log(result.result);
      db.close();
      end = "取消成功";
      end = JSON.stringify(end);
      res.setHeader("Content-Length", Buffer.byteLength(end));
      res.end(end);
    }, arg)
  });
}

function addAD(data, req, res) { // 添加到推荐
  console.log("addAD/POST");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset='utf-8'");

  var end = "添加失败";
  var id = "";
  id = JSON.parse(data.toString("utf8")).no;
  var arg = {
    url: id,
    cond: "ad",
    b: true
  }

  MongoClient.connect(url, function(err, db) {
    updateTemplate(db, function(result) {
      console.log(result.result);
      db.close();
      end = "添加成功";
      end = JSON.stringify(end);
      res.setHeader("Content-Length", Buffer.byteLength(end));
      res.end(end);
    }, arg)
  });
}

function cancelAD(data, req, res) { // 取消推荐
  console.log("cancelAD/POST");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset='utf-8'");

  var end = "取消失败";
  var id = "";
  id = JSON.parse(data.toString("utf8")).no;
  var arg = {
    url: id,
    cond: "ad",
    b: false
  }

  MongoClient.connect(url, function(err, db) {
    updateTemplate(db, function(result) {
      console.log(result.result);
      db.close();
      end = "取消成功";
      end = JSON.stringify(end);
      res.setHeader("Content-Length", Buffer.byteLength(end));
      res.end(end);
    }, arg)
  });
}

function userInformation(data, req, res) { // 用户信息
  console.log("userInformation/POST");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset='utf-8'");

  var end = [];

  MongoClient.connect(url, function(err, db) {
    
    selectData(db, function(result) {
      console.log(result);
      for(let i = 0; i < result.length; i++) {
        end.push(result[i]);
      }
      db.close();
      console.log(end);
      end = JSON.stringify(end);
      res.setHeader("Content-Length", Buffer.byteLength(end));
      res.end(end);
    }, "user");
    
  });
}

function changePassword(data, req, res) { // 更改密码
  console.log("changePassword/POST");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset='utf-8'");

  var username  = "";
  var password = "";
  var end = "密码修改失败";

  username = JSON.parse(data.toString("utf8")).username;
  password = JSON.parse(data.toString("utf8")).password;

  console.log(JSON.parse(data.toString("utf8")));
  
  MongoClient.connect(url, function(err, db) {
      console.log("连接成功！");
      updatePsw1(db, function(result) {
        if(result.result.ok == 1) {
          end = "密码找回成功";
        }
      }, username, password);
      selectData(db, function(result) {
        managers = [];
        for(let i=0;i<result.length;i++) {
          if(result[i].username === username && end == "密码找回成功") {
            end = JSON.stringify(result[i]);
          }
          managers.push(result[i]);
        }
        res.setHeader("Content-Length", Buffer.byteLength(end));
        console.log("end: ", end);
        res.end(end);
        db.close();
        console.log("users: ", managers);
      }, "manager");
  });

}




function selectData(db, callback, collection) {  
  var collection = db.collection(collection);
  collection.find().toArray(function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
};

function selectData1(db, callback, collection, whereStr) {  
  var collection = db.collection(collection);
  var whereStr = {date: whereStr};
  console.log(whereStr);
  collection.find(whereStr).toArray(function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
};

function regInsert(db, callback, username, password, question, answer, ip)  {  
    var collection = db.collection('user');
    var usr = "";
    var psw = "";
    var qes = "";
    var ans = "";
    var ip = "";
    var date = getDay(0);
    usr += username;
    psw += password;
    qes += question;
    ans += answer;
    ip += ip;
    var data = [{username: usr, 
      password: psw,
      question: qes,
      answer: ans,
      name: "",
      sex: "",
      age: "",
      home: "",
      telephone: "",
      tall: "",
      weight: "",
      blood: "",
      hobby: "",
      education: "",
      school: "",
      company: "",
      postion: "",
      experience: "",
      postionwant: "",
      pricewant: "",
      userhead: "",
      date: date,
      ip: ip
    }];
    collection.insert(data, function(err, result) { 
      if(err) {
        console.log('Error:'+ err);
        return;
      }     
      callback(result);
    });
}

function updatePsw(db, callback, username, password) {
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

function updatePsw1(db, callback, username, password) {
  var collection = db.collection('manager');
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

function updateIP(db, callback, arg) {
  var collection = db.collection('user');
  var usr = "";
  var ip = "";
  var date = getDay(0)
  usr += arg.username;
  ip += arg.ip;

  var whereStr = {username: usr};
  var updateStr = {$set: {ip: ip, date: date}};
  collection.update(whereStr, updateStr, function(err, result) {
      if(err) {
          console.log('Error:'+ err);
          return;
      }     
      callback(result);
  });
};

function updateInfo1(db, callback, arg) {
  var collection = db.collection('user');
  var usr = "";
  var name = "";
  var sex = "";
  var age = "";
  var home = "";
  var tele = "";
  usr += arg.username;
  name += arg.name;
  sex += arg.sex;
  age += arg.age;
  home += arg.home;
  tele += arg.telephone;

  console.log("username: ", usr);
  console.log("name: ", name);
  console.log("sex: ", sex);
  console.log("age: ", age);
  console.log("home: ", home);
  console.log("telephone: ", tele);

  var whereStr = {username: usr};
  var updateStr = {$set: {name: name, sex: sex, age: age, home: home, telephone: tele}};
  collection.update(whereStr, updateStr, function(err, result) {
      if(err) {
          console.log('Error:'+ err);
          return;
      }     
      callback(result);
  });
};

function updateInfo2(db, callback, arg) {
  var collection = db.collection('user');
  var usr = "";
  var tall = "";
  var weight = "";
  var blood = "";
  var hobby = "";
  usr += arg.username;
  weight += arg.weight;
  blood += arg.blood;
  tall += arg.tall;
  hobby += arg.hobby;

  console.log("username: ", usr);
  console.log("tall: ", tall);
  console.log("weight: ", weight);
  console.log("blood: ", blood);
  console.log("hobby: ", hobby);

  var whereStr = {username: usr};
  var updateStr = {$set: {tall: tall, weight: weight, blood: blood, hobby: hobby}};
  collection.update(whereStr, updateStr, function(err, result) {
      if(err) {
          console.log('Error:'+ err);
          return;
      }     
      callback(result);
  });
};

function updateInfo3(db, callback, arg) {
  var collection = db.collection('user');
  var usr = "";
  var edu = "";
  var school = "";
  usr += arg.username;
  edu += arg.education;
  school += arg.school;

  console.log("username: ", usr);
  console.log("edu: ", edu);
  console.log("school: ", school);
  var whereStr = {username: usr};
  var updateStr = {$set: {education: edu, school: school}};
  collection.update(whereStr, updateStr, function(err, result) {
      if(err) {
          console.log('Error:'+ err);
          return;
      }     
      callback(result);
  });
};

function updateInfo4(db, callback, arg) {
  var collection = db.collection('user');
  var usr = "";
  var com = "";
  var pos = "";
  var exp = "";
  usr += arg.username;
  com += arg.company;
  pos += arg.postion;
  exp += arg.experience;

  console.log("username: ", usr);
  console.log("com: ", com);
  console.log("pos: ", pos);
  console.log("exp: ", exp);

  var whereStr = {username: usr};
  var updateStr = {$set: {company: com, postion: pos, experience: exp}};
  collection.update(whereStr, updateStr, function(err, result) {
      if(err) {
          console.log('Error:'+ err);
          return;
      }     
      callback(result);
  });
};

function updateInfo5(db, callback, arg) {
  var collection = db.collection('user');
  var usr = "";
  var posw = "";
  var priw = "";
  usr += arg.username;
  posw += arg.postionwant;
  priw += arg.pricewant;

  console.log("username: ", usr);
  console.log("posw: ", posw);
  console.log("priw: ", priw);

  var whereStr = {username: usr};
  var updateStr = {$set: {postionwant: posw, pricewant: priw}};
  collection.update(whereStr, updateStr, function(err, result) {
      if(err) {
          console.log('Error:'+ err);
          return;
      }     
      callback(result);
  });
};

function updateInfo6(db, callback, arg) {
  var collection = db.collection('user');
  var usr = "";
  var usrhd = "";
  usr += arg.username;
  usrhd += arg.userhead;

  console.log("username: ", usr);
  console.log("usrhd: ", usrhd);

  var whereStr = {username: usr};
  var updateStr = {$set: {userhead: usrhd}};
  collection.update(whereStr, updateStr, function(err, result) {
      if(err) {
          console.log('Error:'+ err);
          return;
      }     
      callback(result);
  });
};

function updateTemplate(db, callback, arg) {
  var collection = db.collection('template');
  var url = "";
  var cond = "";
  var b = false;
  url += arg.url;
  cond += arg.cond;
  b = arg.b;

  var whereStr = {url: url};
  var updateStr = {$set: {[cond]: b}};
  collection.update(whereStr, updateStr, function(err, result) {
      if(err) {
          console.log('Error:'+ err);
          return;
      }     
      callback(result);
  });
};

function updateVisit(db, callback) {
  var collection = db.collection('visit');

  var whereStr = {date: getDay(0)};
  var updateStr = {$inc: {count: 1}};
  collection.update(whereStr, updateStr, true, function(err, result) {
      if(err) {
          console.log('Error:'+ err);
          return;
      }     
      callback(result);
  });
};

function updateDate(db, callback, arg) {
  var collection = db.collection('manager');

  var whereStr = arg.whereStr;
  var updateStr = arg.updateStr;
  collection.update(whereStr, updateStr, true, function(err, result) {
      if(err) {
          console.log('Error:'+ err);
          return;
      }     
      callback(result);
  });
};

function insertData(db, callback, collection, data) {  
  var collection = db.collection(collection);
  var data = data;
  collection.insert(data, function(err, result) { 
    if(err) {
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
}

function getDay(day){ // 获取日期
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
