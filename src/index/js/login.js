var c_login = function() {
    var dom_login = '<div class="wrap">'+
        '<div class="box_login">'+
        '<img src="./images/logo.png" class="logo_login">'+
        '<div><label for="username" class="la"></label>'+
        '<input id="username" type="text" class="usr placeholder" autocomplete="off" value="用户名" onfocus="usrFocus()" onblur="usrBlur()">'+
        '<div class="em"></div><br>'+
        '<label for="password" class="la"></label>'+
        '<input id="password" type="text" class="psw placeholder" value="密码" onfocus="pswFocus()" onblur="pswBlur()">'+
        '<div class="em"></div>'+
        '<div class="link_login">'+
        '<span class="reg" onclick="toReg()">账号注册</span>'+
        '<span class="getpsw" onclick="toGetpsw()">忘记密码</span></div>'+
        '<div class="btn_login" onclick="login()">登录</div>'+
        '</div></div></div>';

    function show() {
        rr.innerHTML = dom_login;
        if(location.hash.split("$")[0] !== "#/login") {
          location.hash = "#/login";
        }
        if(sessionStorage["rr_usrRtoL"]) {
            console.log(sessionStorage);
            document.getElementsByClassName("usr")[0].focus();
            document.getElementsByClassName("usr")[0].value = JSON.parse(sessionStorage["rr_usrRtoL"]).username;
            document.getElementsByClassName("usr")[0].blur();
            document.getElementsByClassName("psw")[0].focus()
            document.getElementsByClassName("psw")[0].value = JSON.parse(sessionStorage["rr_usrRtoL"]).password;
            document.getElementsByClassName("psw")[0].blur()
        } else if(sessionStorage["rr_usrC"]) {
            document.getElementsByClassName("usr")[0].focus();
            document.getElementsByClassName("usr")[0].value = JSON.parse(sessionStorage["rr_usrC"]).username;
            document.getElementsByClassName("usr")[0].blur();
            document.getElementsByClassName("psw")[0].focus()
            document.getElementsByClassName("psw")[0].value = JSON.parse(sessionStorage["rr_usrC"]).password;
            document.getElementsByClassName("psw")[0].blur()
        }
        
    }

    return {show: show};
}();
