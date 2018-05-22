var rr = document.getElementById("rr");
var a = [];

!function() {
    window.onhashchange = function() { // 路由设置
      console.log(this.location.hash.split("#")[1]);
        if(this.location.hash === "#/welcome") {
            c_welcome.show();
        } else if(this.location.hash.split("$")[0] === "#/login") {
            c_login.show();
        } else if(this.location.hash === "#/reg"){
            c_reg.show();
        } else if(this.location.hash === "#/getpsw") {
            c_getpsw.show();
        } else if(this.location.hash === "#/info") {
            c_info.show();
            c_header.show();
        } else {
            rr.innerHTML = "";
            c_header.show();
            c_footer.show();
        }
    }
    
    window.onbeforeunload = function() {
        window.sessionStorage.setItem("rr_show", window.location.hash);
        if(window.sessionStorage["rr_usrC"]) {
            localStorage.setItem("rr_lastLogin", window.sessionStorage["rr_usrC"]);
        }
    }

    window.onload = function() {
        console.log(window.sessionStorage["rr_show"]);
        if(!window.sessionStorage["rr_show"]) { // 若有，则为关闭页面重新进入，否则为刷新
            c_welcome.show();
            if(window.localStorage["rr_lastLogin"]) {
                window.sessionStorage.setItem("rr_usrC", window.localStorage["rr_lastLogin"]);
            }
        } else {
            if(window.sessionStorage["rr_show"] === "#/welcome") {
                c_welcome.show();
            } else if(window.sessionStorage["rr_show"] === "#/login") {
                c_login.show();
            } else if(window.sessionStorage["rr_show"] === "#/reg"){
                c_reg.show();
            } else if(window.sessionStorage["rr_show"] === "#/getpsw") {
                c_getpsw.show();
            } else if(this.window.sessionStorage["rr_show"] === "#/info"){
                c_info.show();
                c_header.show();
            } else {
                rr.innerHTML = "";
                c_header.show();
                c_footer.show();
            }
        }
    }
}();



function usrFocus() { // 用户框获取焦点的回调
    var usr = document.getElementsByClassName("usr")[0],
        usr_em = document.getElementsByClassName("em")[0];
    if(usr.value == "用户名") {
        usr.value = "";
        usr_em.innerHTML = "";
        usr.className = usr.className.split(" ")[0];
    }
}

function usrBlur() { // 用户框失去焦点的回调
    var usr = document.getElementsByClassName("usr")[0],
        usr_em = document.getElementsByClassName("em")[0];
    if(usr.value == "") {
        usr.value = "用户名";
        usr.className += " placeholder";
    }
}

function qesFocus() { // 密保问题获得焦点的回调
    var qes = document.getElementById("qes"),
        qes_em = document.getElementsByClassName("em")[3];
    if(qes.value == "密保问题") {
        qes.value = "";
        qes_em.innerHTML = "";
        qes.className = qes.className.split(" ")[0];
    }
}

function qesBlur() { // 密保问题失去焦点失去焦点的回调
    var qes = document.getElementById("qes"),
        qes_em = document.getElementsByClassName("em")[0];
    if(qes.value == "") {
        qes.value = "密保问题";
        qes.className += " placeholder";
    }
}

function ansFocus() { // 密保问题答案获取焦点的回调
    var ans = document.getElementById("ans"),
        ans_em = document.getElementsByClassName("em")[4];
    if(ans.value == "密保问题答案") {
        ans.value = "";
        ans_em.innerHTML = "";
        ans.className = qes.className.split(" ")[0];
    }
}

function ansBlur() { // 密保问题答案失去焦点的回调
    var ans = document.getElementById("ans"),
        ans_em = document.getElementsByClassName("em")[4];
    if(ans.value == "") {
        ans.value = "密保问题答案";
        ans.className += " placeholder";
    }
}

function pswFocus() { // 密码框获取焦点的回调
    var psw = window.event.srcElement || window.event.target;
    var psw_em = psw.nextSibling;
    if(psw.value == "密码" || psw.value == "确认密码" || psw_em.innerHTML !== "") {
        psw.type = "password";
        psw.value = "";
        psw_em.innerHTML = "";
        psw.className = psw.className.split(" ")[0];
    }
}
function pswBlur() { // 密码框失去焦点的回调
    var psw = window.event.srcElement || window.event.target;
    var psw_em = psw.nextSibling;
    if(psw.value == "") {
        psw.type = "text";
        if(psw.id == "psw") {
            psw.value = "密码";
        } else {
            psw.value = "确认密码";
        }
        psw.className += " placeholder";
    }
}

function login() { // 登录页点击登录按钮的回调
    var usr = document.getElementsByClassName("usr")[0].value,
        psw = document.getElementsByClassName("psw")[0].value,
        usr_em = document.getElementsByClassName("em")[0],
        psw_em = document.getElementsByClassName("em")[1];
    if ((usr == "" || usr == "用户名") && (psw == "" || psw == "密码")) {
        usr_em.innerHTML = "* 请输入用户名";
        psw_em.innerHTML = "* 请输入密码";
    } else if(usr.value == "" || usr.value == "用户名") {
        usr_em.innerHTML = "* 请输入用户名";
    } else if(psw.value == "" || psw.value == "密码") {
        psw_em.innerHTML = "* 请输入密码";
    } else {
        var data = {id: "login", username: usr, password: psw};
        console.log("fetching...");
        fetch("http://localhost:8000", {
            method: "POST",
            body: JSON.stringify(data)
        }).then(function(res) {
            res.text().then(function(data) {
                if(data == "登录失败") {
                    alert("登录失败");
                    fetch()
                } else if(data === "用户名不存在") {
                    alert("用户名不存在");
                    usr_em.innerHTML = "* 用户名不存在";
                } else if(data === "密码错误") {
                    alert("密码错误");
                    psw_em.innerHTML = "* 密码错误，请重试";
                } else {
                    alert("登录成功");
                    window.location.hash = "#/home"
                    var rr_usrC = JSON.parse(data);
                    sessionStorage.setItem("rr_usrC", data);
                    console.log(rr_usrC);
                }
            });
        });
    }
}

function radio() { // 单选框回调函数
    var radio = document.getElementsByClassName("radio")[0];
    if(radio.className == "radio") {
        radio.className += " radioChecked";
    } else {
        radio.className = "radio";
    }
}

function reg() { // 注册按钮回调函数
    var usr = document.getElementsByClassName("usr")[0].value;
    var psw = document.getElementsByClassName("psw")[0].value;
    var cpsw = document.getElementsByClassName("psw")[1].value;
    var qes = document.getElementById("qes").value;
    var ans = document.getElementById("ans").value;
    var radio = document.getElementsByClassName("radio")[0];
    var usr_em = document.getElementsByClassName("em")[0];
    var psw_em = document.getElementsByClassName("em")[1];
    var cpsw_em = document.getElementsByClassName("em")[2];
    var qes_em = document.getElementsByClassName("em")[3];
    var ans_em = document.getElementsByClassName("em")[4];

    console.log(usr, psw, cpsw);
    console.log(radio.classList[1]);
    if(usr === "" || usr === "用户名") {
    usr_em.innerHTML = "* 用户名不能为空";
    } else {
    usr_em.innerHTML = "";
    }
  
    if(psw === "" || psw === "密码") {
    psw_em.innerHTML = "* 密码不能为空";
    } else if(psw.length < 6) {
    psw_em.innerHTML = "* 密码长度不得少于6位";
    } else {
    psw_em.innerHTML = "";
    }
  
    if(cpsw !== psw || cpsw === "确认密码") {
    cpsw_em.innerHTML = "* 请确认密码";
    } else {
    cpsw_em.innerHTML = "";
    }

    if(qes === "" || qes === "密保问题") {
        qes_em.innerHTML = "* 密保问题不能为空";
    } else {
        qes_em.innerHTML = "";
    }

    if(ans === "" || ans === "密保问题答案") {
        ans_em.innerHTML = "* 密保问题答案不能为空";
    } else {
        ans_em.innerHTML = "";
    }

  
    if(usr_em.innerHTML === "" && psw_em.innerHTML === "" && cpsw_em.innerHTML === "" && qes_em.innerHTML === "" && ans_em.innerHTML === "" && radio.classList[1]) {
        var data = {id: "reg", username: usr, password: psw, qestion: qes, answer: ans};
        console.log("fetching...");
        fetch("http://localhost:8000", {
            method: "POST",
            body: JSON.stringify(data)
        }).then(function(res) {
            res.text().then(function(data) {
                if(data == "用户名已存在") {
                    alert("用户名已存在");
                    usr_em.innerHTML = "* 用户名已存在";
                } else {
                    alert("注册成功！");
                    window.location.hash = "#/login";
                    sessionStorage.setItem("rr_usrRtoL", JSON.stringify({
                        username: usr,
                        password: psw
                    }));
                }
            });
        });
    }

}

function next1() { // 忘记密码页下一步按钮的回调函数
    var box1 = document.getElementsByClassName("box_getpsw")[0];
    var box2 = document.getElementsByClassName("box_getpsw")[1];
    var qes = document.getElementsByClassName("qes")[0];
    var usr = document.getElementsByClassName("usr")[0].value;
    var usr_em = document.getElementsByClassName("em")[0];
    if(usr === "" || usr === "用户名") {
        usr_em.innerHTML= "* 用户名不能为空";
    } else {
        usr_em.innerHTML = "";
        var data = {id: "getpsw1", username: usr};
        fetch("http://localhost:8000", {
            method: "POST",
            body: JSON.stringify(data)
        }).then(function(res) {
            res.text().then(function(data) {
                console.log(data);
                if(data == "用户名不存在") {
                    usr_em.innerHTML = "* 用户名不存在";
                } else {
                    usr_em.innerHTML = "";
                    box1.className += " hide";
                    box2.className = box2.className.split(" hide")[0];
                    window.sessionStorage.setItem("rr_usr", usr);
                    window.sessionStorage.setItem("rr_qes", data);
                    qes.innerHTML += data;
                }
            });
        });
    } 
}

function next2() { // 忘记密码页下一步按钮的回调函数
    var box2 = document.getElementsByClassName("box_getpsw")[1];
    var box3 = document.getElementsByClassName("box_getpsw")[2];
    var ans = document.getElementsByClassName("usr")[1].value;
    var ans_em = document.getElementsByClassName("em")[1];

    if(ans === "") {
        ans_em.innerHTML= "* 密保答案不能为空";
    } else {
        ans_em.innerHTML = "";
        var data = {id: "getpsw2", username: window.sessionStorage["rr_usr"], answer: ans};
        fetch("http://localhost:8000", {
            method: "POST",
            body: JSON.stringify(data)
        }).then(function(res) {
            res.text().then(function(data) {
                console.log(data);
                if(data == "密保问题答案错误") {
                    ans_em.innerHTML = "* 请输入正确答案";
                } else {
                    ans_em.innerHTML = "";
                    box2.className += " hide";
                    box3.className = box3.className.split(" hide")[0];
                }
            });
        });
    }  
}

function getPsw() { // 忘记密码页完成按钮的回调函数
    var psw = document.getElementsByClassName("psw")[0].value;
    var cpsw = document.getElementsByClassName("psw")[1].value;
    var psw_em = document.getElementsByClassName("em")[2];
    var cpsw_em = document.getElementsByClassName("em")[3];

    if(psw === "" || psw === "密码") {
        psw_em.innerHTML = "* 新密码不能为空";
    } else if(psw.length < 6) {
        psw_em.innerHTML = "* 密码长度不能少于6";
    } else {
        psw_em.innerHTML = "";
    }
    
    if(cpsw === "" || cpsw === "确认密码") {
        cpsw_em.innerHTML = "* 请确认密码";
    } else if(psw !== cpsw) {
        cpsw_em.innerHTML = "* 两次密码输入不一致";
    } else {
        cpsw_em.innerHTML = "";
    }
    
    if(psw_em.innerHTML === "" && cpsw_em.innerHTML === ""){
        var data = {id: "changePsw", username: window.sessionStorage["rr_usr"], password: psw}
        fetch("http://localhost:8000", {
            method: "POST",
            body: JSON.stringify(data)
        }).then(function(res) {
            res.text().then(function(data) {
                console.log(data);
                if(data == "密码修改失败") {
                    alert("密码修改失败");
                } else {
                    alert("密码找回成功");
                    window.location.hash = "#/login$usr="+usr+"$psw="+psw;
                }
            });
        });
    }
}

function toReg() { //转到注册页
    window.location.hash = "#/reg";
}

function toGetpsw() { // 转到忘了密码页
    window.location.hash = "#/getpsw";
}

function toLogin() { // 转到登录页
    window.location.hash = "#/login";
}

function infoChange1() { // 基本信息
	var name = document.getElementById("info_name"); // 姓名
		sex = "", // 性别
		male = document.getElementById("info_male"), // 男
		age = document.getElementById("info_age"), // 年龄
		home = document.getElementById("info_home"), // 住址
		tele = document.getElementById("info_tele"); // 电话
	if(male.checked === true) {
		sex = "男";
	} else {
		sex = "女";
	}
	var data = {
		id: "changeInfo1",
		username: JSON.parse(window.sessionStorage["rr_usrC"]).username,
		name: name.value,
		sex: sex,
		age: age.value,
		home: home.value,
		telephone: tele.value
	}
	console.log("data: ", data);
	fetch("http://localhost:8000", {
		method: "POST",
		body: JSON.stringify(data)
	}).then(function(res) {
		res.text().then(function(data) {
			console.log(data);
			if(data === "修改失败") {
				alert("保存失败，请重试");
			} else {
				alert("保存成功");
				window.sessionStorage.setItem("rr_usrC", data);
				//console.log(window.sessionStorage["rr_usrC"]);
			}
		});
	});
	console.log(JSON.parse(window.sessionStorage["rr_usrC"]).username);
}
function infoChange2() { // 详细信息
	var tall = document.getElementById("info_tall"), // 身高
	weight = document.getElementById("info_weight"), // 体重
	blood = $("#info_blood option:selected"), // 血型
	hobby = document.getElementById("info_hobby"); // 兴趣
	console.log(blood.text());
	var data = {
		id: "changeInfo2",
		username: JSON.parse(window.sessionStorage["rr_usrC"]).username,
		tall: tall.value,
		weight: sex,
		blood: blood.text(),
		hobby: home.value
	}
	console.log("data: ", data);
	fetch("http://localhost:8000", {
		method: "POST",
		body: JSON.stringify(data)
	}).then(function(res) {
		res.text().then(function(data) {
			console.log(data);
			if(data === "修改失败") {
				alert("保存失败，请重试");
			} else {
				window.sessionStorage.setItem("rr_usrC", data);
				//console.log(window.sessionStorage["rr_usrC"]);
			}
		});
	});
	console.log(JSON.parse(window.sessionStorage["rr_usrC"]).username);
}
function infoChange3() { // 教育背景
	var edu = document.getElementById("info_edu"), // 学历
	school = document.getElementById("info_school"); // 毕业学校
	
	var data = {
		id: "changeInfo3",
		username: JSON.parse(window.sessionStorage["rr_usrC"]).username,
		education: edu.value,
		school: school.value
	}
	console.log("data: ", data);
	fetch("http://localhost:8000", {
		method: "POST",
		body: JSON.stringify(data)
	}).then(function(res) {
		res.text().then(function(data) {
			console.log(data);
			if(data === "修改失败") {
				alert("保存失败，请重试");
			} else {
				window.sessionStorage.setItem("rr_usrC", data);
				//console.log(window.sessionStorage["rr_usrC"]);
			}
		});
	});
	console.log(JSON.parse(window.sessionStorage["rr_usrC"]).username);
}
function infoChange4() { // 工作信息
	var com = document.getElementById("info_com"), // 公司
		pos = document.getElementById("info_pos"), // 岗位
		exp = document.getElementById("info_exp"); // 经历

	console.log(exp.value);
	
	var data = {
		id: "changeInfo4",
		username: JSON.parse(window.sessionStorage["rr_usrC"]).username,
		company: com.value,
		postion: pos.value,
		experience: exp.value
	}
	console.log("data: ", data);
	fetch("http://localhost:8000", {
		method: "POST",
		body: JSON.stringify(data)
	}).then(function(res) {
		res.text().then(function(data) {
			console.log(data);
			if(data === "修改失败") {
				alert("保存失败，请重试");
			} else {
				alert("保存成功");
				window.sessionStorage.setItem("rr_usrC", data);
				//console.log(window.sessionStorage["rr_usrC"]);
			}
		});
	});
	console.log(JSON.parse(window.sessionStorage["rr_usrC"]).username);
}
function infoChange5() { // 求职意向
	var posw = document.getElementById("info_posw"), // 期望职位
		priw = document.getElementById("info_priw"); // 期望薪资
	
	var data = {
		id: "changeInfo4",
		username: JSON.parse(window.sessionStorage["rr_usrC"]).username,
		postionwant: posw.value,
		pricewant: priw.value,
	}
	console.log("data: ", data);
	fetch("http://localhost:8000", {
		method: "POST",
		body: JSON.stringify(data)
	}).then(function(res) {
		res.text().then(function(data) {
			console.log(data);
			if(data === "修改失败") {
				alert("保存失败，请重试");
			} else {
				alert("保存成功");
				window.sessionStorage.setItem("rr_usrC", data);
				//console.log(window.sessionStorage["rr_usrC"]);
			}
		});
	});
	console.log(JSON.parse(window.sessionStorage["rr_usrC"]).username);
}
function infoChange6() { // 更改头像
	var usrhd = document.getElementById("info_thumbnail");
	var data = {
		id: "changeInfo6",
		username: JSON.parse(window.sessionStorage["rr_usrC"]).username,
		userhead: usrhd.toDataURL("image/png")
	}
	console.log("data: ", data);
	fetch("http://localhost:8000", {
		method: "POST",
		body: JSON.stringify(data)
	}).then(function(res) {
		res.text().then(function(data) {
			console.log(data);
			if(data === "修改失败") {
				alert("保存失败，请重试");
			} else {
				alert("保存成功");
				window.sessionStorage.setItem("rr_usrC", data);
				//console.log(window.sessionStorage["rr_usrC"]);
			}
		});
	});
	console.log(JSON.parse(window.sessionStorage["rr_usrC"]).username);
}
function infoChange7() { // 修改密码
	var pswc = document.getElementById("info_pswc"), // 新密码
		cpswc = document.getElementById("info_cpswc"); // 确认新密码
		pswc_em = document.getElementsByClassName("em")[0];
		cpswc_em = document.getElementsByClassName("em")[1];

	console.log(pswc.value, cpswc.value);

	if(pswc.value == "") {
		pswc_em.innerHTML = "* 请输入新密码";
	} else if(pswc.value.length < 6) {
		pswc_em.innerHTML = "* 请输入至少6位";
	} else if(cpswc.value == "") {
		pswc_em.innerHTML = "";
		cpswc_em.innerHTML = "* 请确认密码";
	} else if(pswc.value !== cpswc.value) {
		pswc_em.innerHTML = "";
		cpswc_em.innerHTML = "* 两次输入不一致";
	} else {
		pswc_em.innerHTML = "";
		cpswc_em.innerHTML = "";
		var data = {
			id: "changePsw",
			username: JSON.parse(window.sessionStorage["rr_usrC"]).username,
			password: pswc.value
		}
		console.log("data: ", data);
		fetch("http://localhost:8000", {
			method: "POST",
			body: JSON.stringify(data)
		}).then(function(res) {
			res.text().then(function(data) {
				console.log(data);
				if(data === "密码修改失败") {
					alert("密码修改失败，请重试");
				} else {
					alert("密码修改成功");
				}
			});
		});
	}

	console.log(pswc_em.innerHTML, cpswc_em.innerHTML);
}
