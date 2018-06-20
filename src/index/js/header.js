var c_header = function() {
    var dom_header = '<div id="header">'+
        '<img class="header_logo" src="images/logo1.png" onclick="toHome()">'+
        '<span class="header_title">随时随地创建属于您的简历</span>'+
        '<div class="header_usr">'+
        '<div class="header_usr_top">'+
        '<img class="header_usrhd" src="images/user.jpg" onmouseover="showList()">'+
        '<span class="header_username" onmouseover="showList()">XXX</span>'+
        '<i class="iconfont icon-arrowup" onmouseover="showList()"></i>'+
        '</div>'+
        '<div class="header_usr_list hide">'+
        '<ul>'+
        '<li><span onclick="toInfo()">个人信息</span></li>'+
        '<hr class="hhr">'+
        ''+
        ''+
        '<li><span onclick="logOff()">注销登录</span></li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        '</div>';

    function widthChange() {
        console.log($("#header").width());
        if($("#header").width() === 1125 && $(".header_usr")[0]) {
            console.log("w1")
            var target = $(".header_usr");
            target.removeClass("header_usr");
            target.addClass("header_usr1");
        }

        if($("#header").width() > 1125 && $(".header_usr1")[0]) {
            console.log("w2")
            var target = $(".header_usr1");
            target.removeClass("header_usr1");
            target.addClass("header_usr");
        }
    }

    function show() {
        rr.innerHTML += dom_header;

        var width = window.setInterval(widthChange, 250);
        if(JSON.parse(window.sessionStorage["rr_usrC"]).userhead) {
            $(".header_usrhd")[0].src = JSON.parse(window.sessionStorage["rr_usrC"]).userhead;
        }
        console.log(JSON.parse(window.sessionStorage["rr_usrC"]).username.length);
        if(JSON.parse(window.sessionStorage["rr_usrC"]).username.length <= 8) {
            $(".header_username")[0].innerHTML = JSON.parse(window.sessionStorage["rr_usrC"]).username;
        } else {
            $(".header_username")[0].innerHTML = JSON.parse(window.sessionStorage["rr_usrC"]).username.substring(0, 6) + "...";
        }
        // $(".header_usrhd").mouseover(showList);
        // $(".header_username").mouseover(showList);
        // $(".header_usr i").mouseover(showList);
        // $(document).click(hideList);
        // $(".header_usr_list ul li:eq(0) span").click(toInfo);
        // $(".header_usr_list ul li:eq(2) span").click(toLogin);
    }

    return {show: show};
}();