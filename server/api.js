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
    // console.log("req.headers: ", req.headers);
    // console.log("req.url: ", req.url);
    // console.log("");

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
        }, username, password, qestion, answer);
        selectData(db, function(result) {
          users = [];
          for(let i=0;i<result.length;i++) {
            users.push(result[i]);
          }
          db.close();
          console.log("users: ", users);
        });
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
      });
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
    });
    
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
    });
    
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
    });
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
    });
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
    });
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
    });
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
    var data = [{username: usr, 
      password: psw,
      qestion: qes,
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
      userhead: ""
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