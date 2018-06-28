var rr = document.getElementById("rr");

!function() {
    window.onhashchange = function() { // 路由设置
        console.log(window.location.hash.split("#")[1]);
        $(document).unbind();
        rr.className = "";
        
        if(window.location.hash === "#/welcome") {
            c_welcome.show();
        } else if(window.location.hash === "#/login") {
            c_login.show();
        } else if(window.location.hash === "#/reg"){
            c_reg.show();
        } else if(window.location.hash === "#/getpsw") {
            c_getpsw.show();
        } else if(window.location.hash === "#/info") {
            rr.innerHTML = "";
            c_header.show();
            c_info.show();
            $(document).click(hideList);
        } else if(window.location.hash === "#/make") {
            rr.innerHTML = "";
            c_header.show();
            c_menu.show();
            c_tip.show();
            c_resume.show();
            $(document).click(hideList);
            setResumeSessionStorage()
        } else {
            rr.innerHTML = "";
            c_header.show();
            c_stage.show();
            c_footer.show();
            $(document).click(hideList);
            rr.className = "minHeight";
        }
    }
    
    window.onbeforeunload = function() {
        window.sessionStorage.setItem("rr_show", window.location.hash);
        if(window.sessionStorage["rr_usrC"]) {
            localStorage.setItem("rr_lastLogin", window.sessionStorage["rr_usrC"]);
        }
    }

    window.onload = function() {
        var data = {
            id: "visit"
        }
        fetch(app.url, {
          method: "POST",
          body: JSON.stringify(data)
        }).then(function(res) {
          res.text().then(function(data) {
            console.log(data);
          });
        });
        $(document).unbind();
        rr.className = "";
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
                rr.innerHTML = "";
                c_header.show();
                c_info.show();
                $(document).click(hideList);
            } else if(window.location.hash === "#/make") {
                rr.innerHTML = "";
                c_header.show();
                c_menu.show();
                c_tip.show();
                c_resume.show();
                $(document).click(hideList);
                setResumeSessionStorage()
            } else {
                rr.innerHTML = "";
                c_header.show();
                c_stage.show();
                c_footer.show();
                $(document).click(hideList);
                rr.className = "minHeight";
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
        fetch(app.url, {
            method: "POST",
            body: JSON.stringify(data)
        }).then(function(res) {
            res.text().then(function(data) {
                if(data == "登录失败") {
                    alert("登录失败");
                } else if(data === "用户名不存在") {
                    alert("用户名不存在");
                    usr_em.innerHTML = "* 用户名不存在";
                } else if(data === "密码错误") {
                    alert("密码错误");
                    psw_em.innerHTML = "* 密码错误，请重试";
                } else {
                    fetch(app.url, {
                        method: "POST",
                        body: JSON.stringify({
                            id: "ip",
                            username: usr
                        })
                    }).then(function(res) {
                        res.text().then(function(data) {
                            console.log(data);
                        });
                    });
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
        var data = {id: "reg", username: usr, password: psw, question: qes, answer: ans, ip: "10.7.1.92"};
        console.log("fetching...");
        fetch(app.url, {
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
        fetch(app.url, {
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
        fetch(app.url, {
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
        fetch(app.url, {
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
	fetch(app.url, {
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
	fetch(app.url, {
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
	fetch(app.url, {
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
	fetch(app.url, {
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
	fetch(app.url, {
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
	fetch(app.url, {
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
		fetch(app.url, {
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

function showList() {
    console.log("showlist");
    $(".header_usr_list").removeClass("hide");
    $(".header_usr i").removeClass("icon-arrowup");
    $(".header_usr i").addClass("icon-arrowdown");
    (event || window.event).cancelBubble = true;
}

function hideList() {
    $(".header_usr_list").addClass("hide");
    $(".header_usr i").removeClass("icon-arrowdown");
    $(".header_usr i").addClass("icon-arrowup");
}

function toInfo() {
    window.location.hash = "#/info";
    (event || window.event).cancelBubble = true;
}

function toLogin() {
    window.location.hash = "#/login";
    (event || window.event).cancelBubble = true;
}

function toHome() {
    if(window.location.hash === "#/home") {
        window.location.reload();
    } else {
        window.location.hash = "#/home";
    }
    (event || window.event).cancelBubble = true;
}

function toMake(obj) {
    var src = $(obj).parent().parent().find("img").attr("src");
    var id = src.substring(src.length-6, src.length-4);
    window.localStorage.setItem("rr-id", id);
    window.location.hash = "#/make";
    (event || window.event).cancelBubble = true;
}

function logOff() {
    window.location.hash = "#/login";
    window.localStorage.removeItem("rr_lastLogin");
    window.sessionStorage.removeItem("rr_usrC");
}

function showQRCodeQQ() {
    var QRCodeQQ = document.getElementById("QRqq");
    var QRCodeWX = document.getElementById("QRwx");

    QRCodeQQ.className = "";
    QRCodeWX.className = "hide";
}

function showQRCodeWX() {
    var QRCodeQQ = document.getElementById("QRqq");
    var QRCodeWX = document.getElementById("QRwx");

    QRCodeWX.className = "";
    QRCodeQQ.className = "hide";
}

function downloadPDF() { // 点击“导出”按钮的回调
    var targetDom = $(".resume");
    //把需要导出的pdf内容clone一份，这样对它进行转换、微调等操作时才不会影响原来界面
    var copyDom = targetDom.clone();
    //新的div宽高跟原来一样，高度设置成自适应，这样才能完整显示节点中的所有内容（比如说表格滚动条中的内容）
    copyDom.width(targetDom.width() + "px");
    copyDom.height(targetDom.height() + "px");

    $('body').append(copyDom);//ps:这里一定要先把copyDom append到body下，然后再进行后续的glyphicons2canvas处理，不然会导致图标为空
    svg2canvas(copyDom);
    html2canvas(copyDom, {
        onrendered: function (canvas) {
            
            var imgData = canvas.toDataURL('image/jpeg');
            var img = new Image();
            img.src = imgData;
            //根据图片的尺寸设置pdf的规格，要在图片加载成功时执行，之所以要*0.225是因为比例问题
            img.onload = function () {
                //此处需要注意，pdf横置和竖置两个属性，需要根据宽高的比例来调整，不然会出现显示不完全的问题
                if (this.width > this.height) {
                    var doc = new jsPDF('l', 'mm', [this.width * 0.225, this.height * 0.225]);
                } else {
                    var doc = new jsPDF('p', 'mm', [this.width * 0.225, this.height * 0.225]);
                }
                doc.addImage(imgData, 'jpeg', 0, 0, this.width * 0.225, this.height * 0.225);
                //根据下载保存成不同的文件名
                doc.save('pdf_' + new Date().getTime() + '.pdf');
            };
            //删除复制出来的div
            copyDom.remove();
        },
        background: "#fff",
        //这里给生成的图片默认背景，不然的话，如果你的html根节点没设置背景的话，会用黑色填充。
        allowTaint: true //避免一些不识别的图片干扰，默认为false，遇到不识别的图片干扰则会停止处理html2canvas
    });
}

function svg2canvas(targetElem) { // 如果有svg图像
    var svgElem = targetElem.find('svg');
    svgElem.each(function (index, node) {
        var parentNode = node.parentNode;
        //由于现在的IE不支持直接对svg标签node取内容，所以需要在当前标签外面套一层div，通过外层div的innerHTML属性来获取
        var tempNode = document.createElement('div');
        tempNode.appendChild(node);
        var svg = tempNode.innerHTML;
        var canvas = document.createElement('canvas');
        //转换
        canvg(canvas, svg);
        parentNode.appendChild(canvas);
    });
}

function glyphicons2canvas(targetElem, fontClassName, fontFamilyName) { // 处理glyphicons图标的回调
    var iconElems = targetElem.find('.' + fontClassName);
    iconElems.each(function (index, inconNode) {
        var fontSize = $(inconNode).css("font-size");
        var iconColor = $(inconNode).css("color");
        var styleContent = $(inconNode).attr('style');
        //去掉"px"
        fontSize = fontSize.replace("px", "");
        var charCode = getCharCodeByGlyphiconsName(iconName);
        var myCanvas = document.createElement('canvas');
        //把canva宽高各增加2是为了显示图标完整
        myCanvas.width = parseInt(fontSize) + 2;
        myCanvas.height = parseInt(fontSize) + 2;
        myCanvas.style = styleContent;
        var ctx = myCanvas.getContext('2d');
        //设置绘图内容的颜色
        ctx.fillStyle = iconColor;
        //设置绘图的字体大小以及font-family的名字
        ctx.font = fontSize + 'px ' + fontFamilyName;
        ctx.fillText(String.fromCharCode(charCode), 1, parseInt(fontSize) + 1);
        $(inconNode).replaceWith(myCanvas);
    });
}

function getCharCodeByGlyphiconsName(iconName) { //根据glyphicons/glyphicon图标的类名获取到对应的char code
    switch (iconName) {
        case("glyphicons-resize-full"):
            return "0xE216";
        case ("glyphicons-chevron-left"):
            return "0xE225";
        default:
            return "";
    }
}

function tipCollapse() { // 小贴士切换回调
    var self = window.event.target;
    switch(self.id) {
        case "tip1":
            var target = $('#collapseOne');
            break;
        case "tip2":
            var target = $('#collapseTwo');
            break;
        case "tip3":
            var target = $('#collapseThree');
            break;
        case "tip4":
            var target = $('#collapseFour');
            break;
        case "tip5":
            var target = $('#collapseFive');
            break;
        case "tip6":
            var target = $('#collapseSix');
            break;
        case "tip7":
            var target = $('#collapseSeven');
            break;
        case "tip8":
            var target = $('#collapseEight');
            break;
        default:
            break;   
    }
    var id = 1;
    for(let i = 0; i < target[0].classList.length; i++) {
        if(target[0].classList[i] == "in") {
            id = 0;
        }
    }
    
    if(id == 0) {
        target.collapse('hide');
    } else {
        target.collapse('show');
    }
}

function showBtn(obj) {
    var self = $(obj);
    if(self.find(".hide")) {
        self.find(".hide").removeClass("hide");
    }
    self.parent().addClass("gifbg");
}

function hideBtn(obj) {
    var self = $(obj);
    if(self.find("button")) {
        self.find("button").addClass("hide");
    }
    self.parent().removeClass("gifbg");
}

function userhead(obj) { // 头像模态框的保存按钮的回调函数
    $("[class*='resume_userhead']").empty();
    $("[class*='resume_userhead']").append($("<img src='" + $("#rr_thumbnail")[0].toDataURL("image/png") + "'>"));
    $(obj).parent().parent().find(".close").trigger("click");
    console.log("userhead: ", $("[class*='resume_userhead']"));
}

// 邮箱表单验证
function checkMail(obj, em) {
　　var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式

　　if(obj.value === "") {
　　　　return true;
　　} else if (!reg.test(obj.value)) { // 正则验证不通过，格式不对
    　　em.innerHTML = "* 邮箱格式不正确！";
　　　　return false;
　　} else {
　　　　em.innerHTML = "";
　　　　return true;
　　}
}

// 手机表单验证
function checkPhone(obj, em) {

    var phval = obj.value;
    
    if (phval == "") {
        return true;
    } else if (!/^1[35789]\d{9}$/.test(phval)) {
        em.innerHTML = "* 手机号格式不正确";
        return false;
    } else {
        em.innerHTML = "";
        return true;
    }
}

function basic(obj) {
    var birth = $(obj).parent().parent().find(".ui_date")[0];
    var city = $("#city-picker3");
    var mail = $(obj).parent().parent().find(".ui_date")[1];
    var phone = $(obj).parent().parent().find(".ui_date")[2];
    var mail_em = $(obj).parent().parent().find(".em")[0];
    var phone_em = $(obj).parent().parent().find(".em")[1];

    var resume_birth = $("#resume_birth");
    var resume_city = $("#resume_city");
    var resume_mail = $("#resume_mail");
    var resume_phone = $("#resume_phone");

    console.log(checkMail(mail, mail_em));
    if(checkMail(mail, mail_em) && checkPhone(phone, phone_em)) {
        console.log(1);
        if(!birth.value == "") {
            resume_birth.html(birth.value);
        }
        if(!city.val() == "") {
            resume_city.html(city.val());
        }
        if(!mail.value == "") {
            resume_mail.html(mail.value);
        }
        if(!phone.value == "") {
            resume_phone.html(phone.value);
        }
        alert("保存成功");
        $(obj).parent().parent().find(".close").trigger("click");
    }
}

function changeSkill(obj) {
    console.log($("#skills .tag_bottom").children().length);
    
    if($(obj).parent()[0].className == "tag_top") {
        if($("#skills .tag_bottom").children().length === 9) {
            alert("您添加的标签太多了，选几个重点吧");
        } else {
            var addTarget = $(obj);
            $("#skills .tag_bottom").append(addTarget[0].outerHTML);
            $(obj).remove();
        }
    } else {
        var addTarget = $(obj);
        $("#skills .tag_top").append(addTarget[0].outerHTML);
        $(obj).remove();
    }
}

function addSkill(obj, e) {
    if(e.keyCode == 13) {
        if($("#skills .tag_bottom").children().length === 9) {
            alert("您添加的标签太多了，选几个重点吧");
        } else {
            $("#skills .tag_bottom").append($('<div class="tag" onclick="changeSkill(this)">' + $(obj).val() + '<div></div></div>'));
            $(obj).val("");
        }
    }
}

function skill(obj) {
    console.log("skill-target: ", $("[class*='resume_skill']"));
    $("[class*='resume_skill'] ul li").remove();
    $("#skills .tag_bottom .tag").each(function() {
        var id = 0;
        for(let i = 0; i < $("[class*='resume_skill'] ul li").length; i++) {
            if($("[class*='resume_skill'] ul li")[i].innerHTML == $(this).text()) {
                id = 1;
            }
        }
        if(id == 0) {
            $("[class*='resume_skill'] ul").append($("<li>" + $(this).text() + "</li>"));
        }
    });

    $(obj).parent().parent().find(".close").trigger("click");
    if($("[class*='resume_skill'] ul li").length === 0) {
        $("[class*='resume_skill'] ul").append($("<li>添加我的技能特长</li>"))
    }
}

function changeHobby(obj) {
    console.log($("#hobbys .tag_bottom").children().length);
    
    if($(obj).parent()[0].className == "tag_top") {
        if($("#hobbys .tag_bottom").children().length === 9) {
            alert("您添加的标签太多了，选几个重点吧");
        } else {
            var addTarget = $(obj);
            $("#hobbys .tag_bottom").append(addTarget[0].outerHTML);
            $(obj).remove();
        }
    } else {
        var addTarget = $(obj);
        $("#hobbys .tag_top").append(addTarget[0].outerHTML);
        $(obj).remove();
    }
}

function addHobby(obj, e) {
    if(e.keyCode == 13) {
        console.log(1);
        if($("#hobbys .tag_bottom").children().length === 9) {
            alert("您添加的标签太多了，选几个重点吧");
        } else {
            $("#hobbys .tag_bottom").append($('<div class="tag" onclick="changeSkill(this)">' + $(obj).val() + '<div></div></div>'));
            $(obj).val("");
        }
    }
}

function hobby(obj) {
    $("[class*='resume_hobby'] ul li").remove();
    $("#hobbys .tag_bottom .tag").each(function() {
        var id = 0;
        for(let i = 0; i < $("[class*='resume_hobby'] ul li").length; i++) {
            if($("[class*='resume_hobby'] ul li")[i].innerHTML == $(this).text()) {
                id = 1;
            }
        }
        if(id == 0) {
            $("[class*='resume_hobby'] ul").append($("<li>" + $(this).text() + "</li>"));
        }
    });

    $(obj).parent().parent().find(".close").trigger("click");
    if($("[class*='resume_hobby'] ul li").length === 0) {
        $("[class*='resume_hobby'] ul").append($("<li>添加我的兴趣爱好</li>"))
    }
}

function introduce(obj) {
    var name = $(obj).parent().parent().find("input")[0];
    var introduce = $(obj).parent().parent().find("input")[1];

    $("[class*='resume_name'] p:eq(0)").html(name.value);
    $("[class*='resume_name'] p:eq(1)").html(introduce.value);
    
    $(obj).parent().parent().find(".close").trigger("click");
}

function jhi(obj) {
    var posw = $(obj).parent().parent().find("input")[0];
    var poss = $(obj).parent().parent().find("input")[1];
    var city = $(obj).parent().parent().find("input")[2];
    var pri = $(obj).parent().parent().find("input")[3];

    $("[class*='resume_jhi'] div:eq(0)").html("意向岗位：" + posw.value);
    $("[class*='resume_jhi'] div:eq(1)").html("职业类型：" + poss.value);
    $("[class*='resume_jhi'] div:eq(2)").html("意向城市：" + city.value);
    $("[class*='resume_jhi'] div:eq(3)").html("薪资要求：" + pri.value);

    $(obj).parent().parent().find(".close").trigger("click");
}

function edu(obj) {
    var edu = $(obj).parent().parent().find("input")[0];
    var time = $(obj).parent().parent().find("input")[1];
    var sch = $(obj).parent().parent().find("input")[2];
    var mar = $(obj).parent().parent().find("input")[3];

    $("[class*='resume_edu'] div:eq(0)").html("最高学历：" + edu.value);
    $("[class*='resume_edu'] div:eq(1)").html("毕业时间：" + time.value);
    $("[class*='resume_edu'] div:eq(2)").html("毕业学校：" + sch.value);
    $("[class*='resume_edu'] div:eq(3)").html("所学专业：" + mar.value);

    $(obj).parent().parent().find(".close").trigger("click");
}

function exp(obj) {
    var start = $(obj).parent().parent().find("input")[0];
    var end = $(obj).parent().parent().find("input")[1];
    var com = $(obj).parent().parent().find("input")[2];
    var pos = $(obj).parent().parent().find("input")[3];
    var exp = $(obj).parent().parent().find("textarea")[0];

    if(start.value == "" || end.value == "") {
        $("[class*='resume_exp'] div:eq(0)").html("工作时间");
    } else {
        $("[class*='resume_exp'] div:eq(0)").html("工作时间：" + start.value + "~" + end.value);
    }
    
    $("[class*='resume_exp'] div:eq(1)").html("所在公司：" + com.value);
    $("[class*='resume_exp'] div:eq(2)").html("工作岗位：" + pos.value);
    if(exp.value !== "") {
        $("[class*='resume_exp'] p:eq(1)").html(getFormatCode(exp.value));
        $("[class*='resume_exp'] p:eq(1)").css({
            ["line-height"] : "15px",
            ["word-wrap"]: "break-word",
            ["word-break"]: "break-all",
            margin: "0 auto",
            width: Number(sessionStorage.expw) - 20 + "px"
        });
    } else {
        $("[class*='resume_exp'] p:eq(1)").html("请在这里介绍你的工作经历");
    }

    var height = getFormatCode(exp.value).split("<br>").length-1;
    $('[class*="resumeBox"]').height(Number(sessionStorage.boxh)+Number(sessionStorage.boxself)+height*16);
    sessionStorage.setItem("boxexp", Number($('[class*="resumeBox"]').height())-(Number(sessionStorage.boxh)+Number(sessionStorage.boxself)));
    $('[class*="exp_box"]').height(Number(sessionStorage.exph)+height*15);
    $("[class*='resume_exp']").height(Number(sessionStorage.exph)-2+height*15);

    $(obj).parent().parent().find(".close").trigger("click");
}

function self(obj) {
    var inner = $(obj).parent().parent().find("textarea").val();
    if(inner !== "") {
        $("[class*='resume_self'] p:eq(1)").html(getFormatCode(inner));
        $("[class*='resume_self'] p:eq(1)").css({
            ["line-height"] : "15px",
            ["word-wrap"]: "break-word",
            ["word-break"]: "break-all",
            margin: "0 auto",
            width: Number(sessionStorage.selfw) - 20 + "px"
        });
    } else {
        $("[class*='resume_self'] p:eq(1)").html("在这里对你的履历进行简短的总结和评价");
    }
    
    var height = getFormatCode(inner).split("<br>").length-1;

    $('[class*="resumeBox"]').height(Number(sessionStorage.boxh)+Number(sessionStorage.boxexp)+height*16);
    sessionStorage.setItem("boxself", Number($('[class*="resumeBox"]').height())-(Number(sessionStorage.boxh)+Number(sessionStorage.boxexp)));
    $('[class*="self_box"]').height(Number(sessionStorage.selfh)+height*15);
    $("[class*='resume_self']").height(Number(sessionStorage.selfh)-2+height*15);

    console.log(height, sessionStorage.boxexp, Number(sessionStorage.boxh)+Number(sessionStorage.boxexp)+height*15, $('[class*="resumeBox"]').height());

    $(obj).parent().parent().find(".close").trigger("click");
}

function getCol(str) {
    var col = 0;
    var a = [];
    a = str.split(/\n|<br>/);
    col = a.length;
    for(let i = 0; i < a.length; i++) {
        console.log(sizeof(a[i], "utf8"));
        console.log(70);
        if(sizeof(a[i], "utf8") > 70) {
            a.push(a[i].substring(70, a[i].length));
            a[i] = a[i].substring(0, 70);
        }
    }

    console.log("col: ", a.length);
    return col;
}

/** 
 * 计算字符串所占的内存字节数，默认使用UTF-8的编码方式计算，也可制定为UTF-16 
 * UTF-8 是一种可变长度的 Unicode 编码格式，使用一至四个字节为每个字符编码 
 *  
 * 000000 - 00007F(128个代码)      0zzzzzzz(00-7F)                             一个字节 
 * 000080 - 0007FF(1920个代码)     110yyyyy(C0-DF) 10zzzzzz(80-BF)             两个字节 
 * 000800 - 00D7FF  
   00E000 - 00FFFF(61440个代码)    1110xxxx(E0-EF) 10yyyyyy 10zzzzzz           三个字节 
 * 010000 - 10FFFF(1048576个代码)  11110www(F0-F7) 10xxxxxx 10yyyyyy 10zzzzzz  四个字节 
 *  
 * 注: Unicode在范围 D800-DFFF 中不存在任何字符 
 * {@link http://zh.wikipedia.org/wiki/UTF-8} 
 *  
 * UTF-16 大部分使用两个字节编码，编码超出 65535 的使用四个字节 
 * 000000 - 00FFFF  两个字节 
 * 010000 - 10FFFF  四个字节 
 *  
 * {@link http://zh.wikipedia.org/wiki/UTF-16} 
 * @param  {String} str  
 * @param  {String} charset utf-8, utf-16 
 * @return {Number} 
 */  
function sizeof(str, charset){  // 计算字符串所占的字节数
    var total = 0,  
        charCode,  
        i,  
        len;  
    charset = charset ? charset.toLowerCase() : '';  
    if(charset === 'utf-16' || charset === 'utf16'){  
        for(i = 0, len = str.length; i < len; i++){  
            charCode = str.charCodeAt(i);  
            if(charCode <= 0xffff){  
                total += 2;  
            }else{  
                total += 4;  
            }  
        }  
    }else{  
        for(i = 0, len = str.length; i < len; i++){  
            charCode = str.charCodeAt(i);  
            if(charCode <= 0x007f) {  
                total += 1;  
            }else if(charCode <= 0x07ff){  
                total += 2;  
            }else if(charCode <= 0xffff){  
                total += 3;  
            }else{  
                total += 4;  
            }  
        }  
    }  
    return total;  
}

function showM(obj) { // 显示模态框
    // console.log($(obj)[0].className.substring(0, 15));
    // console.log(!(isNaN(Number($(obj).parent()[0].className.substring($(obj).parent()[0].className.length-2, $(obj).parent()[0].className.length)))));
    if($(obj)[0].className.substring(0, 15) == "resume_userhead") {
        target = "#rr_userhead"
    } else if (!(isNaN(Number($(obj).parent()[0].className.substring($(obj).parent()[0].className.length-2, $(obj).parent()[0].className.length))))) {
        target = "#rr_" + $(obj).parent()[0].className.split("_")[1];
        target = target.substring(0, target.length-2);
    } else if (!(isNaN(Number($(obj).parent()[0].className.substring($(obj).parent()[0].className.length-1, $(obj).parent()[0].className.length))))) {
        target = "#rr_" + $(obj).parent()[0].className.split("_")[1];
        target = target.substring(0, target.length-1);
    }  else {
        target = "#rr_" + $(obj).parent()[0].className.split("_")[1];
    }
    console.log(target);
    $(target).modal('show')
}

var getFormatCode=function(strValue){  
    var str =  strValue.replace(/\r\n/g, '<br>').replace(/\n/g, '<br>').replace(/\s/g, ' ');
    var a = str.split(/\n|<br>/);
    var resultStr = "";
    for(let i = 0; i < a.length; i++) {
        if(a[i].length > 40) {
            for(let j = a.length; j != i+1; j--) {
                a[j+1] = a[j];
            }
            a[i+1] = a[i].substring(40, a[i].length);
            a[i] = a[i].substring(0, 40);
        }
        resultStr += a[i]+"<br>";
    }

    return resultStr;
}

function setResumeSessionStorage() {
    sessionStorage.setItem("boxh", $('[class*="resumeBox"]').height());
    sessionStorage.setItem("boxexp", 0);
    sessionStorage.setItem("boxself", 0);
    sessionStorage.setItem("exph", $('[class*="exp_box"]').height());
    sessionStorage.setItem("selfh", $('[class*="self_box"]').height());
    sessionStorage.setItem("expw", $("[class*='resume_exp']").width());
    sessionStorage.setItem("selfw", $("[class*='resume_self']").width());
}

function char2buf(str){
    var out = new ArrayBuffer(str.length*2);
    var u16a= new Uint16Array(out);
    var strs = str.split("");
    for(var i =0 ; i<strs.length;i++){
        u16a[i]=strs[i].charCodeAt();
    }
    return out;
}