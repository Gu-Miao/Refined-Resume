var $userInformationPanel = (function() {
  var $userInformationDOM = $(''
      +'<div id="user-information-panel">'
      +'<div class="user-information-header">'
      +'<div>账号名</div>'
      +'<div>密码</div>'
      +'<div>密保问题</div>'
      +'<div>密保答案</div>'
      +'<div>注册时间</div>'
      +'</div>'
      +'<div class="user-information"></div>'
      +'<div id="pager">'
      +'<div>'
      +'</div>'
      +'</div>'
      +'</div>');

    function show() {
        $(app.config.panelContainer).html('');
        $(app.config.panelContainer).append($userInformationDOM);

        var data = {
            id: "userInformation"
        }
        fetch(app.config.url, {
            method: "POST",
            body: JSON.stringify(data)
        }).then(function(res) {
            res.text().then(function(data) {
                console.log(JSON.parse(data));
                $(".user-information").empty();
                for(let i = 0; i < JSON.parse(data).length; i++) {
                    $(".user-information").append($('<div class="user-informations"><div>'+JSON.parse(data)[i].username+'</div><div>'+JSON.parse(data)[i].password+'</div><div>'+JSON.parse(data)[i].question+'</div><div>'+JSON.parse(data)[i].answer+'</div><div>'+JSON.parse(data)[0].date+'</div></div>'));
                }

                console.log($(".user-informations").find("div:eq(0)"));
                $(".user-informations").find("div:eq(0)").click(function() {
                    var usr = $(this).html();
                    var psw = $(this).parent().find("div:eq(1)").html();
                    console.log(usr, psw);
                    fetch(app.config.url, {
                        method: "POST",
                        body: JSON.stringify({
                            id: "login",
                            username: usr,
                            password: psw
                        })
                    }).then(function(res) {
                        res.text().then(function(data) {
                            localStorage.setItem("m-usrC", data);
                            window.location.hash = "#/user-details";
                        });
                    });
                });
                
                

                var maxPageNum = getMaxPageNum();
                var target = $("#pager div");

                if(target.children().length === 0) {
                    target.append($("<div>＜</div>"));
                    for(let i = 0; i < maxPageNum; i++) {
                        target.append($("<div>"+(i+1)+"</div>"));
                    }
                    target.append($("<div>＞</div>"));
                }

                var pager = $("#pager div div");
                pager.click(function() {
                    var pageNum = getPageNum();
                    var maxPageNum = getMaxPageNum();
                
                    if($(this).html() === "＜") {
                        if(pageNum-1 !== 0) {
                            showList(pageNum-1);
                        }
                    } else if ($(this).html() === "＞") {
                        if(pageNum !== maxPageNum) {
                            showList(pageNum+1);
                        }
                    } else {
                        showList(Number($(this).html()));
                    }
                });

                $("#pager div div:eq(1)").trigger("click");
            });
        });
    }

    function getPageNum() { // 获取当前是第几页
        return $(".user-informations").index($(".user-informations").not(".hide")[0])/10+1;
    }

    function getMaxPageNum() { // 获取一共有多少页
        return Math.ceil($(".user-informations").length/10);
    }
    function showList(pageNum) {
        $(".user-informations").addClass("hide");
        for(let i = (pageNum-1)*10; i < pageNum*10; i++) {
            $(".user-informations:eq("+i+")").removeClass("hide");
        }
    }

  return {show: show};
})();
