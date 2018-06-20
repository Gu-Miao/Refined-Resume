var c_stage = function() {
    var dom_stage = '<div id="stage">'+
        '<div class="stage_top">'+
        '<h2>选 择 模 板</h2>'+
        '<h5>选择您喜欢的模板吧</h5>'+
        '<hr>'+
        '</div>'+
        '<div class="stage_content">'+
        '</div>'+
        '</div>';

    function show() {
        rr.innerHTML += dom_stage;
        fetch("http://localhost:8000", {
            method: "POST",
            body: JSON.stringify({
                id: "templateManage"
            })
        }).then(function(res) {
            res.text().then(function(data) {
                console.log(data);
                for(let i = 0; i < JSON.parse(data).length; i++) {
                    $(".stage_content").append($('<div class="mbox"><div class="imgL"><img src="'+JSON.parse(data)[i].url+'"  onclick="toMake(this)"></div><div class="mbox_bottom"><span>编号：'+JSON.parse(data)[i].id+'</span><button class="use" onclick="toMake(this)">使用</button></div></div>'))
                }
            });
        });
    }

    return {show: show}
}();