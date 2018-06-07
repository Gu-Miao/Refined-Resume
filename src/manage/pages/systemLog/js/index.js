$(document).ready(function () {
    var maxPageNum = getMaxPageNum();
    var target = $("#pager div");

    target.append($("<div>＜</div>"));
    for(let i = 0; i < maxPageNum; i++) {
        target.append($("<div>"+(i+1)+"</div>"));
    }
    target.append($("<div>＞</div>"));

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


function getPageNum() { // 获取当前是第几页
    return $(".sytem-logs").index($(".sytem-logs").not(".hide")[0])/10+1;
}

function getMaxPageNum() { // 获取一共有多少页
    return Math.ceil($(".sytem-logs").length/10);
}
function showList(pageNum) {
    $(".sytem-logs").addClass("hide");
    for(let i = (pageNum-1)*10; i < pageNum*10; i++) {
        $(".sytem-logs:eq("+i+")").removeClass("hide");
    }
}