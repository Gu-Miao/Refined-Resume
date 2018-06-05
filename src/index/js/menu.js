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
    }

    return {show: show}
}();