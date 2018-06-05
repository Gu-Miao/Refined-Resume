function changeTag(obj) {
    console.log($(".tag_bottom").children().length);
    
    if($(obj).parent()[0].className == "tag_top") {
        if($(".tag_bottom").children().length === 13) {
            alert("您添加的标签太多了，选几个重点吧");
        } else {
            var addTarget = $(obj);
            $(".tag_bottom").append(addTarget[0].outerHTML);
            $(obj).remove();
        }
    } else {
        var addTarget = $(obj);
        $(".tag_top").append(addTarget[0].outerHTML);
        $(obj).remove();
    }
}


function addTag(obj, e) {
    if(e.keyCode == 13) {
        if($(".tag_bottom").children().length === 13) {
            alert("您添加的标签太多了，选几个重点吧");
        } else {
            $(".tag_bottom").append($('<div class="tag" onclick="changeTag(this)">' + $(obj).val() + '<div></div></div>'));
            $(obj).val("");
        }
    }
}