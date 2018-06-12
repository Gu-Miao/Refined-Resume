var $login = function() {
  var $loginDOM = $(''
      + '<div class="admin-app-login">'
        + '<h1>管理后台登录</h1>'
        + '<form>'
          + '<label>用户名</label>'
          + '<input type="text" autofocus><br>'
          + '<label>密　码</label>'
          + '<input type="password"><br>'
          + '<label id="gV">验证码</label>'
          + '<input type="text" id="code_input"/>'
		      + '<div id="v_container"></div><br><br><br>'
          + '<input type="submit" value="登 录">'
        + '</form>'
      + '</div>');

  var $form = $loginDOM.find('form');
  var $forget = $loginDOM.find("form input:eq(4)");

  function show() {
    $(app.config.appContainer).html('');
    $(app.config.appContainer).append($loginDOM);

    var verifyCode = new GVerify("v_container");

    $form.submit(function(e) {
      e.preventDefault();
      var res = verifyCode.validate($("#code_input").val());
      if(res){
        var data = {
          id: "mLogin",
          usr: $("input:eq(0)").val(),
          psw: $("input:eq(1)").val()
        }
				fetch("http://localhost:8000", {
          method: "POST",
          body: JSON.stringify(data)
        }).then(function(res) {
          res.text().then(function(data) {
            console.log(data);
            if(data === "用户名不存在") {
              alert("用户名不存在");
            } else if (data === "密码错误") {
              alert("密码错误");
            } else {
              window.localStorage.setItem("m_manager", data);
              console.log(window.localStorage["m_manager"]);
              location.hash = '#/index';
            }
          });
        });
			}else{
				alert("验证码错误");
			}
    });
  }
  
  return {show: show};
}();
