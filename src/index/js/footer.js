var c_footer = function() {
    var dom_footer='<div class="admin_footer">'+
        '<p>Copyright©2017-2018  Refined_Resume  .All Rights Reserved</p>'+
        '</div>';

    function show(){
        rr.innerHTML += dom_footer;
    }
    return {show:show};
}();