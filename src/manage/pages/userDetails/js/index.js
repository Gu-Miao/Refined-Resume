$(".info-type div").click(function() {
    $(".info-type div").css({
        ["border-right"]: "1px solid #ccc",
        background: "#f7f7f7"
    });

    $(this).css({
        ["border-right"]: "none",
        background: "#fff"
    });

    $(".info-box").addClass("hide");
    $(".info-box:eq("+$(".info-type div").index($(this)[0])+")").removeClass("hide");
});

$(document).ready(function () {
    $(".info-type div:eq(0)").trigger("click");
})