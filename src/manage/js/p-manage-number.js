var $manageNumberPanel = (function() {
    var $manageNumberDOM = $(''
      +'<div id="manage-number-panel">'
      +'<div class="manage-number-header">'
      +'<div>账号名</div>'
      +'<div>密码</div>'
      +'<div>注册时间</div>'
      +'<div>上次登录</div>'
      +'</div>'
      +'<div class="manage-number">'
      +'</div>'
      +'<div id="pager">'
      +'<div>'
      +'</div>'
      +'</div>'
      +'</div>');
    
    function show() {

        $(app.config.panelContainer).html('');
        $(app.config.panelContainer).append($manageNumberDOM);

        fetch(app.config.url, {
            method: "POSt",
            body: JSON.stringify({
                id: "manager"
            })
        }).then(function(res) {
            res.text().then(function(data) {
                var m = JSON.parse(data);
                for(let i = 0; i < JSON.parse(data).length; i++) {
                    $(".manage-number").append($('<div class="manage-numbers"><div>'+JSON.parse(data)[i].username+'</div><div>'+JSON.parse(data)[i].password+'</div><div>'+JSON.parse(data)[i].regtime+'</div><div>'+JSON.parse(data)[i].logtime+'</div></div>'))
                }

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

                $(".manage-numbers div button:eq(0)").click(function () {
                    window.location.hash = "#/change-password"
                });

                $("#pager div div:eq(1)").trigger("click");
            });
        });
    }

    function getPageNum() { // 获取当前是第几页
        return $(".manage-numbers").index($(".manage-numbers").not(".hide")[0])/10+1;
    }
    
    function getMaxPageNum() { // 获取一共有多少页
        return Math.ceil($(".manage-numbers").length/10);
    }

    function showList(pageNum) {
        $(".manage-numbers").addClass("hide");
        for(let i = (pageNum-1)*10; i < pageNum*10; i++) {
            $(".manage-numbers:eq("+i+")").removeClass("hide");
        }
    }
  
    return {show: show};
})();
