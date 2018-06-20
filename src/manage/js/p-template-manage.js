var $templateManagePanel = (function() {
    var $templateManageDOM = $(''
        +'<div id="template-manage-panel">'
        +'<div class="template-box"></div>'
        +'<div id="pager">'
        +'<div></div>'
        +'</div>');
    
    function show() {
        console.log("templateManagePanel");
        $(app.config.panelContainer).html('');
        $(app.config.panelContainer).append($templateManageDOM);

        $(".template-box").empty();
        fetch(app.config.url, {
            method: "POST",
            body: JSON.stringify({
                id: "templateManage"
            })
        }).then(function(res) {
            res.text().then(function(data) {
                console.log(data);
                for(let i = 0; i < JSON.parse(data).length; i++) {
                    var btn1 = "";
                    var btn2 = "";
                    if(JSON.parse(data)[i].home) {
                        btn1 = "取消首页";
                    } else {
                        btn1 = "加入首页";
                    }
                    if(JSON.parse(data)[i].ad) {
                        btn2 = "取消推荐";
                    } else {
                        btn2 = "加入推荐";
                    }
                    $(".template-box").append($('<div class="templates"><div class="templates-imgBox"><div class="templates-block hide"><div class="templates-btn">'+btn1+'</div><div class="templates-btn">'+btn2+'</div></div><img src="'+JSON.parse(data)[i].url+'"></div></div>'))
                }

                $(".templates-block .templates-btn").click(function() {
                    var id = $(this).parent().parent().find("img").attr("src");
                    var text = $(this).html();
                    if(text === "取消首页") {
                        text = "cancelHome";
                    } else if(text === "加入首页") {
                        text = "addHome";
                    } else if(text === "取消推荐") {
                        text = "cancelAD";
                    } else if(text === "加入推荐") {
                        text = "addAD";
                    }
                    console.log(id, text);
                    fetch(app.config.url, {
                        method: "POST",
                        body: JSON.stringify({
                            id: text,
                            no: id
                        })
                    }).then(function(res) {
                        res.text().then(function(data) {
                            if(JSON.parse(data) == "添加失败") {
                                alert("添加失败");
                            } else if(JSON.parse(data) == "取消失败") {
                                alert("取消失败");
                            } else if(JSON.parse(data) == "添加成功") {
                                alert("添加成功");
                                $stage.load(location.hash);
                            } else if(JSON.parse(data) == "取消成功") {
                                alert("取消成功");
                                $stage.load(location.hash);
                            }
                        });
                    });
                });

                $(".templates-imgBox").mouseover(function() {
                    $(this).parent().find(".hide").removeClass("hide");
                });
                
                $(".templates-imgBox").mouseout(function() {
                    $(this).parent().find(".templates-block").addClass("hide");
                });
        
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

    function getPageNum() { // 获取当前是第几页
        return $(".templates").index($(".templates").not(".hide")[0])/12+1;
    }
    
    function getMaxPageNum() { // 获取一共有多少页
        return Math.ceil($(".templates").length/12);
    }
    
    function showList(pageNum) { // 显示列表项
        $(".templates").addClass("hide");
        for(let i = (pageNum-1)*12; i < pageNum*12; i++) {
            $(".templates:eq("+i+")").removeClass("hide");
        }
    }
  
    return {show: show};
  })();
  