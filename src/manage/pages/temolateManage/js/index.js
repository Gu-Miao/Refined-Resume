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