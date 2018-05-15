var c_getpsw = function() {
    var dom_getpsw = '<div class="wrap">'+
        '<div class="box_getpsw box1">'+
        '<div class="title_getpsw">找回密码</div>'+
        '<div><div class="link_getpsw">'+
        '<span class="text">已有账号，</span><span class="login" onclick="toLogin()">马上登录</span></div>'+
        '<label for="username" class="la"></label>'+
        '<input id="username" type="text" class="usr placeholder" autocomplete="off" onfocus="usrFocus()" onblur="usrBlur()" value="用户名">'+
        '<div class="em"></div>'+
        '<div class="btn_login step1" onclick="next1()">下一步</div></div></div>'+
        '<div class="box_getpsw box2 hide">'+
        '<div class="title_getpsw">找回密码</div><div><div class="link_getpsw">'+
        '<span class="text">已有账号，</span><span class="login" onclick="toLogin()">马上登录</span></div>'+
        '<div class="qes">密保问题：</div>'+
        '<label for="qes" class="la"></label>'+
        '<input id="qes" type="text" class="usr" autocomplete="off">'+
        '<div class="em"></div>'+
        '<div class="btn_login step2" onclick="next2()">下一步</div></div>'+
        '</div><div class="box_getpsw box3 hide">'+
        '<div class="title_getpsw">找回密码</div>'+
        '<div><div class="link_getpsw">'+
        '<span class="text">已有账号，</span><span class="login" onclick="toLogin()">马上登录</span></div>'+
        '<label for="psw" class="la"></label>'+
        '<input id="psw" type="text" class="psw placeholder" autocomplete="off" onfocus="pswFocus()" onblur="pswBlur()" value="密码">'+
        '<div class="em"></div>'+
        '<label for="cpsw" class="la"></label>'+
        '<input id="cpsw" type="text" class="psw placeholder" autocomplete="off" onfocus="pswFocus()" onblur="pswBlur()" value="确认密码">'+
        '<div class="em"></div>'+
        '<div class="btn_login finish" onclick="getPsw()">完成</div></div></div></div>';

    function show() {
        rr.innerHTML = dom_getpsw;
        location.hash = "#/getpsw";
    }

    return {show: show};
}();