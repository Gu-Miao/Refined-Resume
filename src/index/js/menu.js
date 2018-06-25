var c_menu = function() {
    var dome_menu = '<div id="menu">'+
        '<div class="menu_title">'+
        '<input id="downloadPdf" type="button" value="下载PDF" onclick="downloadPDF()"/>'+
        '</div>'+
        '<div class="menu_box">'+
        '<span>其他模板推荐</span><br>'+
        '<div class="menu_thu">'+
        '<img src="./images/a.jpg">'+
        '</div>'+
        '<div class="menu_thu">'+
        '<img src="./images/a.jpg">'+
        '</div>'+
        '<div class="menu_thu">'+
        '<img src="./images/a.jpg">'+
        '</div>'+
        '<div class="menu_thu">'+
        '<img src="./images/a.jpg">'+
        '</div>'+
        '<div class="menu_thu">'+
        '<img src="./images/a.jpg">'+
        '</div>'+
        '<div class="menu_thu">'+
        '<img src="./images/a.jpg">'+
        '</div>'+
        '</div>'+
        '</div>';

    function show() {
        rr.innerHTML += dome_menu;
        let j = 0;
        for(let i = 0; i < JSON.parse(sessionStorage.tdata).length; i++) {
            if(JSON.parse(sessionStorage.tdata)[i].ad) {
                $(".menu_thu:eq("+j+") img").attr("src", JSON.parse(sessionStorage.tdata)[i].url);
                j++;
            }
        }
    }

    return {show: show}
}();