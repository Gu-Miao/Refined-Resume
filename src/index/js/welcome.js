var c_welcome = function() {
	var dom_welcome = '<div class="body_welcome"><header class="masthead text-center text-white d-flex">'+
		'<div class="container my-auto">'+
		'<div class="images">'+ 
		'<img src="images/logo_welcome.png" width="100%" height="100%">'+
		'</div>'+
		'<div class="row">'+
		'<div class="col-lg-10 mx-auto">'+
		'<h1 class="text-uppercase">'+
		'<strong>帮助您创建一份更加精致而又出色的简历！</strong>'+
		'</h1>'+   
		'<hr>'+
		'</div>'+
		'<div class="col-lg-8 mx-auto">'+
		'<p class="text-faded mb-5">全球已将超过200000000人使用Refinde_Resume轻松找到工作!</p>'+
		'<a class="btn" href="#/home">&nbsp;&nbsp;&nbsp;&nbsp;立&nbsp;即&nbsp;体&nbsp;验&nbsp;&nbsp;&nbsp;&nbsp;</a>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</header></div>';

	function show() {
		rr.innerHTML = dom_welcome;
		window.location.hash = "#/welcome";
	}

	return {show: show}
}();