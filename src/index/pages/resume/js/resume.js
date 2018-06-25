$(document).ready(function() {
    setResumeSessionStorage();
});

function setResumeSessionStorage() {
    sessionStorage.setItem("boxh", $('[class*="resumeBox"]').height());
    sessionStorage.setItem("boxexp", 0);
    sessionStorage.setItem("boxself", 0);
    sessionStorage.setItem("exph", $('[class*="exp_box"]').height());
    sessionStorage.setItem("selfh", $('[class*="self_box"]').height());
    sessionStorage.setItem("expw", $("[class*='resume_exp']").width());
    sessionStorage.setItem("selfw", $("[class*='resume_self']").width());
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
    console.log($('[class*="resume_userhead"]'));
    $('[class*="resume_userhead"]').empty();
    $('[class*="resume_userhead"]').append($("<img src='" + $("#rr_thumbnail")[0].toDataURL("image/png") + "'>"));
    $(obj).parent().parent().find(".close").trigger("click");
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
function sizeof(str, charset){  
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

function showCanvas1() { // 显示图片
	var div = $("#rr_show");
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
		aspectRatio: 5/7,
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

function preview1() { // 点击上传文件控件的回调
	var docObj=document.getElementById("rr_file");
	var height = userheader.height;
	
	userheader.src = window.URL.createObjectURL(docObj.files[0]);
	 
	setTimeout(function() {
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

	rr_thumbnail.width = 141;
	if(userheader.width > userheader.height) {
		var prop = 400/userheader.width;
	} else {
		var prop = 300/userheader.height;
	}

	ct.drawImage(userheader, c.x/prop, c.y/prop, c.w/prop, c.h/prop, 0, 0, rr_thumbnail.width, rr_thumbnail.height);
};

function clearCoords() { // 选择框取消时的回调函数
	$('#coords input').val('');
};


var jcrop_api; // 初始化 jcrop API
var rr_thumbnail = document.getElementById("rr_thumbnail");
var ct = rr_thumbnail.getContext('2d');
rr_thumbnail.width = 141;
rr_thumbnail.height = 192;

var userheader = new Image();
userheader.crossOrigin = "*";
userheader.onload = function() { // 头像图片加载时的回调函数
	console.log("width: ", userheader.width, "height: ", userheader.height);
	ct.drawImage(userheader, 0, 0, 141, 192, 0, 0, rr_thumbnail.width, rr_thumbnail.height);
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
    console.log(str);
    var a = str.split(/\n|<br>/);
    var resultStr = "";
    for(let i = 0; i < a.length; i++) {
        console.log(a);
        if(a[i].length > 27) {
            for(let j = a.length; j != i+1; j--) {
                a[j+1] = a[j];
            }
            a[i+1] = a[i].substring(27, a[i].length);
            a[i] = a[i].substring(0, 27);
        }
        resultStr += a[i]+"<br>";
    }

    console.log(resultStr);
    return resultStr;
}