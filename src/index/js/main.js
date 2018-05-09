var rr = document.getElementById("rr");

// c_header.show();
// c_footer.show();
// c_login.show();
// c_reg.show();
// c_getpsw.show();

!function() {
    window.onhashchange = function() { // 路由设置
        if(this.location.hash === "#/welcome") {
            c_welcome.show();
        } else if(this.location.hash === "#/login") {
            c_login.show();
        } else if(this.location.hash === "#/reg"){
            c_reg.show();
        } else if(this.location.hash === "#/getpsw") {
            c_getpsw.show();
        } else {
            rr.innerHTML = "";
            c_header.show();
            c_footer.show();
        }
    }
    c_welcome.show();
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

function pswFocus() { // 密码框获取焦点的回调
    var psw = window.event.srcElement || window.event.target;
    var psw_em = psw.nextSibling;
    if(psw.value == "密码" || psw.value == "确认密码") {
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
    var usr = document.getElementsByClassName("usr")[0],
        psw = document.getElementsByClassName("psw")[0],
        usr_em = document.getElementsByClassName("em")[0],
        psw_em = document.getElementsByClassName("em")[1];
    if ((usr.value == "" || usr.value == "用户名") && (psw.value == "" || psw.value == "密码")) {
        usr_em.innerHTML = "* 请输入用户名";
        psw_em.innerHTML = "* 请输入密码";
    } else if(usr.value == "" || usr.value == "用户名") {
        usr_em.innerHTML = "* 请输入用户名";
    } else if(psw.value == "" || psw.value == "密码") {
        psw_em.innerHTML = "* 请输入密码";
    } else {
        window.location.hash = "#/home";
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
    alert("注册成功");
}

function next1() { // 注册页下一步按钮的回调函数
    var box1 = document.getElementsByClassName("box_getpsw")[0];
    var box2 = document.getElementsByClassName("box_getpsw")[1];
    box1.className += " hide";
    box2.className = box2.className.split(" hide")[0];
}

function next2() { // 注册页下一步按钮的回调函数
    var box2 = document.getElementsByClassName("box_getpsw")[1];
    var box3 = document.getElementsByClassName("box_getpsw")[2];
    box2.className += " hide";
    box3.className = box3.className.split(" hide")[0];
}

function finish() { // 注册页完成按钮的回调函数
    console.log("成功找回了密码！");
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