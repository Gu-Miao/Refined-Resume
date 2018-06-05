$(".header_usrhd").mouseover(showList);
$(".header_username").mouseover(showList);
$(".header_usr i").mouseover(showList);
$(document).click(hideList);
$(".header_usr_list ul li:eq(0) span").click(toInfo);
$(".header_usr_list ul li:eq(2) span").click(toLogin);

function showList() {
    $(".header_usr_list").removeClass("hide");
    $(".header_usr i").removeClass("icon-arrowup");
    $(".header_usr i").addClass("icon-arrowdown");
    (event || window.event).cancelBubble = true;
}

function hideList() {
    $(".header_usr_list").addClass("hide");
    $(".header_usr i").removeClass("icon-arrowdown");
    $(".header_usr i").addClass("icon-arrowup");
}

function toInfo() {
    window.location.hash = "#/info";
    (event || window.event).cancelBubble = true;
}

function toLogin() {
    window.location.hash = "#/login";
    (event || window.event).cancelBubble = true;
}

