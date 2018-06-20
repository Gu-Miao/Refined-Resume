var $systemLogPanel = (function() {
    var $systemLogDOM = $(''
      +'<div id="system-log-panel">'
      +'<div class="system-log-header">'
      +'<div>行为</div>'
      +'<div>账号类别</div>'
      +'<div>账号名</div>'
      +'<div>IP地址</div>'
      +'<div>时间</div>'
      +'</div>'
      +'<div class="system-log"></div>'
      +'<div id="pager"><div></div></div>'
      +'</div>');

    function getPageNum() { // 获取当前是第几页
        return $(".sytem-logs").index($(".sytem-logs").not(".hide")[0])/10+1;
    }
    
    function getMaxPageNum() { // 获取一共有多少页
        return Math.ceil($(".sytem-logs").length/10);
    }

    function showList(pageNum) { // 显示列表项
        $(".sytem-logs").addClass("hide");
        for(let i = (pageNum-1)*10; i < pageNum*10; i++) {
            $(".sytem-logs:eq("+i+")").removeClass("hide");
        }
    }


    function show() {
        console.log("systemLog");
        $(app.config.panelContainer).html('');
        $(app.config.panelContainer).append($systemLogDOM);

        var data = {
            id: "systemLog"
        }
        fetch(app.config.url, {
            method: "POST",
            body: JSON.stringify(data)
        }).then(function(res) {
            res.text().then(function(data) {
                $(".system-log").empty();
                for(let i = 0; i < JSON.parse(data).length; i++) {
                    $(".system-log").append($('<div class="sytem-logs"><div>登录</div><div>'+JSON.parse(data)[i].type+'</div><div>'+JSON.parse(data)[i].username+'</div><div>'+JSON.parse(data)[i].ip+'</div><div>'+JSON.parse(data)[0].date+'</div></div>'));
                }

                var maxPageNum = getMaxPageNum();
                console.log(maxPageNum);
                var target = $("#pager div:eq(0)");

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
  
    return {show: show};
  })();
  