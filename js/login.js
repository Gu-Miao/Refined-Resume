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
        location.hash = "#/login";
    }

    return {show: show};
}();