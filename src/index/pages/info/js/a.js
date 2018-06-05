window.onload = function() {
	var first = this.document.getElementsByClassName("menulist")[0];
	var name = document.getElementById("info_name"); // 姓名
		sex = "", // 性别
		male = document.getElementById("info_male"), // 男
		female = document.getElementById("info_female"), // 女
		age = document.getElementById("info_age"), // 年龄
		home = document.getElementById("info_home"), // 住址
		tele = document.getElementById("info_tele"); // 电话
		tall = document.getElementById("info_tall"), // 身高
		weight = document.getElementById("info_weight"), // 体重
		blood = $("#info_blood"), // 血型
		hobby = document.getElementById("info_hobby"), // 兴趣
		edu = document.getElementById("info_edu"), // 学历
		school = document.getElementById("info_school"), // 毕业学校
		com = document.getElementById("info_com"), // 公司
		pos = document.getElementById("info_pos"), // 岗位
		exp = document.getElementById("info_exp"), // 经历
		posw = document.getElementById("info_posw"), // 期望职位
		priw = document.getElementById("info_priw"); // 期望薪资
		
	var usrhdr; // 头像
	// IE
	if(document.all) {
		first.click();
	}
	// 其它浏览器
	else {
		var e = document.createEvent("MouseEvents");
		e.initEvent("click", true, true);
		first.dispatchEvent(e);
	}
	fetch("http://localhost:8000", {
		method: "POST",
		body: JSON.stringify({
			id: "login",
			username: "gumiao",
			password: "ccc123.."
		})
	}).then(function(res) {
		res.text().then(function(data) {
			console.log(data);
			window.sessionStorage.setItem("rr_usrC", data);
			console.log(JSON.parse(data));
			name.value = JSON.parse(data).name;
			sex = JSON.parse(data).sex;
			if(sex === "男") {
				male.checked = true;
			} else {
				female.checked = true;
			}
			age.value = JSON.parse(data).age;
			home.value = JSON.parse(data).home;
			tele.value = JSON.parse(data).telephone;
			tall.value = JSON.parse(data).tall;
			weight.value = JSON.parse(data).weight;
			blood.val(JSON.parse(data).blood);
			console.log(blood[0]);
			if(blood[0].value == "" || blood[0].value == "请选择") {
				blood[0].value = "none";
			}
			hobby.value = JSON.parse(data).hobby;
			edu.value = JSON.parse(data).education;
			school.value = JSON.parse(data).school;
			com.value = JSON.parse(data).company;
			pos.value = JSON.parse(data).postion;
			exp.innerHTML = JSON.parse(data).experience;
			posw.value = JSON.parse(data).postionwant;
			priw.value = JSON.parse(data).pricewant;

			console.log(window.sessionStorage["rr_usrC"]);
		});
	});

	
}

function menulist() { // 点击菜单项的回调函数
	var self = window.event.target;
	var stages = document.getElementsByClassName("stagebox");
	var index = 0;
	self.className += " menulist_c";
	for(let i = 0; i < self.parentElement.children.length; i++) {
		if(self.parentElement.children[i] === self) {
			index = i;
		} else if(self.parentElement.children[i].className !== "menutitle") {
			self.parentElement.children[i].className = "menulist";
		}
	}

	if(index === 8) {
		index = 6;
	} else {
		index--;
	}

	for(let i = 0; i < stages.length; i++) {
		if(index === i) {
			stages[i].className = "stagebox";
		} else {
			stages[i].className = "stagebox hide";
		}
	}
}

function showCanvas() { // 显示图片
	var div = $("#info_show");
	div.empty();
	var pop = userheader.width/userheader.height;
	var rest;
	div.append("<canvas id='k'></canvas>");
	var k = document.getElementById("k");
	var kc = k.getContext('2d');
	if(userheader.width > userheader.height) {
		k.width = 400;
		k.height = 400/pop;
		rest = (300 - k.height)/2;
	} else {
		k.width = 300*pop;
		k.height = 300;
		rest = (400 - k.width)/2;
	}
	kc.drawImage(userheader, 0, 0, userheader.width, userheader.height, 0, 0, k.width, k.height);

	$('#k').Jcrop({
		aspectRatio: 1,
		onChange: showCoords,
		onSelect: showCoords,
		onRelease: clearCoords
	},function(){
		jcrop_api = this;
		if(userheader.width > userheader.height) {
			$(".jcrop-holder").css("margin-top", rest);
		} else {
			$(".jcrop-holder").css("margin-left", rest);
		}
	});
	
}

function preview() { // 点击上传文件控件的回调
	var docObj=document.getElementById("info_file");
	$("#cf").empty();
	$("#cf").append('<canvas id="canvas"></canvas>');
	var height = userheader.height;
	
	userheader.src = window.URL.createObjectURL(docObj.files[0]);
	 
	// src = window.URL.createObjectURL(docObj.files[0]);
	// docObj.select(); src  = document.selection.createRange().text;
	// try{
	// 	localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
	// 	localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
	// }
	// catch(e) {
	// 	alert("您上传的图片格式不正确，请重新选择!");
	// 	return false;
	// }
	setTimeout(function() {
		// var target = document.getElementById("info_target");
		// // IE
		// if(document.all) {
		// 	first.click();
		// }
		// // 其它浏览器
		// else {
		// 	var e = document.createEvent("MouseEvents");
		// 	e.initEvent("click", true, true);
		// 	target.dispatchEvent(e);
		// }
		$("#info_target").trigger("click");
	}, 500);

	return true;
}

function showCoords(c) { // 选择框变化时的回调函数
	$('#info_x1').val(c.x);
	$('#info_y1').val(c.y);
	$('#info_x2').val(c.x2);
	$('#info_y2').val(c.y2);
	$('#info_w').val(c.w);
	$('#info_h').val(c.h);

	info_thumbnail.width = 100;
	if(userheader.width > userheader.height) {
		var prop = 400/userheader.width;
	} else {
		var prop = 300/userheader.height;
	}

	ct.drawImage(userheader, c.x/prop, c.y/prop, c.w/prop, c.h/prop, 0, 0, info_thumbnail.width, info_thumbnail.height);
};

function clearCoords() { // 选择框取消时的回调函数
	$('#coords input').val('');
};


var jcrop_api; // 初始化 jcrop API
var info_thumbnail = document.getElementById("info_thumbnail");
var ct = info_thumbnail.getContext('2d');
info_thumbnail.width = 100;
info_thumbnail.height = 100;

var userheader = new Image();
userheader.crossOrigin = "*";
userheader.onload = function() { // 头像图片加载时的回调函数
	console.log("width: ", userheader.width, "height: ", userheader.height);
	ct.drawImage(userheader, 0, 0, 100, 100, 0, 0, info_thumbnail.width, info_thumbnail.height);
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