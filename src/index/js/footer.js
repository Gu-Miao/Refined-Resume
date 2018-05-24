var c_footer = function() {
    var dom_footer = '<img src="./images/inc.jpg" class="inc"><div class="footer">'+
        '<div style="border-bottom: 1px solid white; height: 270px;">'+
        '<div class="footer_item">'+
        '<h3>关于我们</h3>'+
        '<br>'+
        '<ul>'+
        '<li>网站须知</li>'+
        '<li>团队介绍</li>'+
        '</ul>'+
        '</div>'+
        '<div class="footer_item">'+
        '<h3>关注Refined Resume</h3>'+
        '<img src="images/ico2.jpg" />'+
        '<img src="images/ico-weixin.jpg" />'+
        '<br/>官方QQ 官方微信'+
        '</div> '+
        '<div class="QRcode">'+
        '<img src="images/ico-QRcode.jpg">'+
        '</div>'+
        '<div class="footer_info">'+
        '<img src="./images/footer_info.jpg">'
        '</div>'+
        '</div>';

    function show(){
        rr.innerHTML += dom_footer;
    }
    return {show:show};
}();