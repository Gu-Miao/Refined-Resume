var c_stage = function() {
    var dom_stage = '<div id="stage">'+
        '<div class="stage_top">'+
        '<h2>选 择 模 板</h2>'+
        '<h5>选择您喜欢的模板吧</h5>'+
        '<hr>'+
        '</div>'+
        '<div class="stage_content">'+
        '<div class="mbox">'+
        '<div class="imgL">'+
        '<img src="./images/m1.jpg"  onclick="toMake()">'+
        '</div>'+
        '<div class="mbox_bottom">'+
        '<span>使用量：1111</span>'+
        '<button class="use" onclick="toMake()">使用</button>'+
        '</div>'+
        '</div>'+
        '<div class="mbox">'+
        '<div class="imgL">'+
        '<img src="./images/m1.jpg"  onclick="toMake()">'+
        '</div>'+
        '<div class="mbox_bottom">'+
        '<span>使用量：1111</span>'+
        '<button class="use" onclick="toMake()">使用</button>'+
        '</div>'+
        '</div>'+
        '<div class="mbox">'+
        '<div class="imgL">'+
        '<img src="./images/m1.jpg"  onclick="toMake()">'+
        '</div>'+
        '<div class="mbox_bottom">'+
        '<span>使用量：1111</span>'+
        '<button class="use" onclick="toMake()">使用</button>'+
        '</div>'+
        '</div>'+
        '<div class="mbox">'+
        '<div class="imgL">'+
        '<img src="./images/m1.jpg"  onclick="toMake()">'+
        '</div>'+
        '<div class="mbox_bottom">'+
        '<span>使用量：1111</span>'+
        '<button class="use" onclick="toMake()">使用</button>'+
        '</div>'+
        '</div>'+
        '<div class="mbox">'+
        '<div class="imgL">'+
        '<img src="./images/m1.jpg"  onclick="toMake()">'+
        '</div>'+
        '<div class="mbox_bottom">'+
        '<span>使用量：1111</span>'+
        '<button class="use" onclick="toMake()">使用</button>'+
        '</div>'+
        '</div>'+
        '<div class="mbox">'+
        '<div class="imgL">'+
        '<img src="./images/m1.jpg"  onclick="toMake()">'+
        '</div>'+
        '<div class="mbox_bottom">'+
        '<span>使用量：1111</span>'+
        '<button class="use" onclick="toMake()">使用</button>'+
        '</div>'+
        '</div>'+
        '<div class="mbox">'+
        '<div class="imgL">'+
        '<img src="./images/m1.jpg"  onclick="toMake()">'+
        '</div>'+
        '<div class="mbox_bottom">'+
        '<span>使用量：1111</span>'+
        '<button class="use" onclick="toMake()">使用</button>'+
        '</div>'+
        '</div>'+
        '<div class="mbox">'+
        '<div class="imgL">'+
        '<img src="./images/m1.jpg"  onclick="toMake()">'+
        '</div>'+
        '<div class="mbox_bottom">'+
        '<span>使用量：1111</span>'+
        '<button class="use" onclick="toMake()">使用</button>'+
        '</div>'+
        '</div>'+
        '<div class="mbox">'+
        '<div class="imgL">'+
        '<img src="./images/m1.jpg"  onclick="toMake()">'+
        '</div>'+
        '<div class="mbox_bottom">'+
        '<span>使用量：1111</span>'+
        '<button class="use" onclick="toMake()">使用</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>';

    function show() {
        rr.innerHTML += dom_stage;
    }

    return {show: show}
}();