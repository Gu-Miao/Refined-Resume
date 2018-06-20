var c_reg = function() {
    var dom_reg = '<div class="wrap">'+
        '<div class="box_reg">'+
        '<img src="./images/logo.png" class="logo_login">'+
        '<div>'+
        '<label for="username" class="la"></label>'+
        '<input id="username" type="text" class="usr placeholder" autocomplete="off" value="用户名" onfocus="usrFocus()" onblur="usrBlur()">'+
        '<div class="em"></div>'+
        '<br>'+
        '<label for="psw" class="la"></label>'+
        '<input id="psw" type="text" class="psw placeholder" value="密码" onfocus="pswFocus()" onblur="pswBlur()">'+
        '<div class="em"></div>'+
        '<br>'+
        '<label for="cpsw" class="la"></label>'+
        '<input id="cpsw" type="text" class="psw placeholder" value="确认密码" onfocus="pswFocus()" onblur="pswBlur()">'+
        '<div class="em"></div>'+
        '<br>'+
        '<label for="qes" class="la"></label>'+
        '<input id="qes" type="text" class="usr placeholder" autocomplete="off" value="密保问题" onfocus="qesFocus()" onblur="qesBlur()">'+
        '<div class="em"></div>'+
        '<br>'+
        '<label for="ans" class="la"></label>'+
        '<input id="ans" type="text" class="usr placeholder" autocomplete="off" value="密保问题答案" onfocus="ansFocus()" onblur="ansBlur()">'+
        '<div class="em"></div>'+
        '<div class="link_reg">'+
        '<span class="radio" onclick="radio()">　</span>'+
        '<span class="text"> 我已阅读并接受 </span>'+
        '<span class="doc">《R.R.注册协议》</span>'+
        '</div>'+
        '<div class="btn_login" onclick="reg()">注册</div>'+
        '</div></div></div>';

    function show() {
        rr.innerHTML = dom_reg;
        location.hash = "#/reg";
    }

    return {show: show};
}();