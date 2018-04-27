var usr = document.getElementsByClassName("usr")[0];
var psw = document.getElementsByClassName("psw")[0];
var cpsw = document.getElementsByClassName("psw")[1];
var usr_em = document.getElementsByClassName("em")[0];
var psw_em = document.getElementsByClassName("em")[1];
var cpsw_em = document.getElementsByClassName("em")[2];
var step1 = document.getElementsByClassName("btn")[0];
var step2 = document.getElementsByClassName("btn")[1];
var step3 = document.getElementsByClassName("btn")[2];
var box1 = document.getElementsByClassName("box")[0];
var box2 = document.getElementsByClassName("box")[1];
var box3 = document.getElementsByClassName("box")[2];

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
psw.value = "新密码";
psw.className += " placeholder";

psw.onfocus = function() {
    if(psw.value == "新密码") {
        psw.type = "password";
        psw.value = "";
        psw.className = psw.className.split(" ")[0];
    }
}
psw.onblur = function () {
    if(psw.value == "") {
        psw.type = "text";
        psw.value = "新密码";
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

step1.onclick = function() {
    box1.className += " hide";
    box2.className = box2.className.split(" hide")[0];
}

step2.onclick = function() {
    box2.className += " hide";
    box3.className = box3.className.split(" hide")[0];
}