var c_header = function() {
    var dom_header = '<div class="admin_header">'+
        '<img width="200px"  src="images/logo1.png">'+ 
        '<div class="btn" onclick="reg()">'+
        '注册</div>'+
        '<div class="btn" onclick="login()">'+
        '登录</div></div>';

    function show() {
        rr.innerHTML += dom_header;
    }

    return { show: show };
}();