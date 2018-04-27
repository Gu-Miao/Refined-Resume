var usr = document.getElementsByClassName("usr")[0];
var psw = document.getElementsByClassName("psw")[0];
var cpsw = document.getElementsByClassName("psw")[1];
var usr_em = document.getElementsByClassName("em")[0];
var psw_em = document.getElementsByClassName("em")[1];
var psw_em = document.getElementsByClassName("em")[2];
var radio = document.getElementsByClassName("radio")[0];
var btn = document.getElementsByClassName("btn")[0];

usr.value = "用户名";
usr.className += " placeholder";

usr.onfocus = function() {
    if(usr.value == "用户名") {
        usr.value = "";
        usr.className = usr.className.split(" ")[0];
    }
}
usr.onblur = function () {
    if(usr.value == "") {
        usr.value = "用户名";
        usr.className += " placeholder";
    }
}

psw.type = "text";
psw.value = "密码";
psw.className += " placeholder";

psw.onfocus = function() {
    if(psw.value == "密码") {
        psw.type = "password";
        psw.value = "";
        psw.className = psw.className.split(" ")[0];
    }
}
psw.onblur = function () {
    if(psw.value == "") {
        psw.type = "text";
        psw.value = "密码";
        psw.className += " placeholder";
    }
}

cpsw.type = "text";
cpsw.value = "确认密码";
cpsw.className += " placeholder";

cpsw.onfocus = function() {
    if(cpsw.value == "确认密码") {
        cpsw.type = "password";
        cpsw.value = "";
        cpsw.className = cpsw.className.split(" ")[0];
    }
}
cpsw.onblur = function () {
    if(cpsw.value == "") {
        cpsw.type = "text";
        cpsw.value = "确认密码";
        cpsw.className += " placeholder";
    }
}

radio.onclick = function() {
    if(radio.className == "radio") {
        radio.className += " radioChecked";
    } else {
        radio.className = "radio";
    }
}

btn.onclick = function() {
    alert("注册成功");
}

