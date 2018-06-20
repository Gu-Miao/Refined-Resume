var $userDetailsPanel = (function() {
    var $userDetailsDOM = $(''
        +'<div id="user-details-panel">'
        +'<div class="information-panel">'
        +'<div class="info-type">'
        +'<div>基本信息</div>'
        +'<div>详细信息</div>'
        +'<div>教育背景</div>'
        +'<div>工作信息</div>'
        +'<div>求职意向</div>'
        +'<div>密保问题</div>'
        +'</div>'
        +'<div class="info-box hide">'
        +'<div class="infos">'
        +'<span>姓名：</span><input type="text" value="">'
        +'</div>'
        +'<div class="infos">'
        +'<span>性别：</span><input type="text" value="">'
        +'</div>'
        +'<div class="infos">'
        +'<span>年龄：</span><input type="text" value="">'
        +'</div>'
        +'<div class="infos">'
        +'<span>电话：</span><input type="text">'
        +'</div>'
        +'<div class="infos">'
        +'<span>住址：</span><input type="text" value="">'
        +'</div>'
        +'</div>'
        +'<div class="info-box hide">'
        +'<div class="infos">'
        +'<span>身高：</span><input type="number" min="0" step="10">'
        +'</div>'
        +'<div class="infos">'
        +'<span>体重：</span><input type="text">'
        +'</div>'
        +'<div class="infos">'
        +'<span>血型：</span><input type="text" value="">'
        +'</div>'
        +'<div class="infos">'
        +'<span>兴趣爱好：</span><input type="text" value="">'
        +'</div>'
        +'</div>'
        +'<div class="info-box hide">'
        +'<div class="infos">'
        +'<span>学历：</span><input type="text" value="">'
        +'</div>'
        +'<div class="infos">'
        +'<span>毕业院校：</span><input type="text" value="">'
        +'</div>'
        +'</div>'
        +'<div class="info-box hide">'
        +'<div class="infos">'
        +'<span>工作单位：</span><input type="text" value=""></div>'
        +'<div class="infos">'
        +'<span>就职岗位：</span><input type="text" value="">'
        +'</div>'
        +'<div class="infos-exp">'
        +'<span>职场经历：</span><textarea cols="30" rows="10"></textarea>'
        +'</div>'
        +'</div>'
        +'<div class="info-box hide">'
        +'<div class="infos">'
        +'<span>期望岗位：</span><input type="text" value="">'
        +'</div>'
        +'<div class="infos">'
        +'<span>期望薪资：</span><input type="text" value="">'
        +'</div>'
        +'</div>'
        +'<div class="info-box hide">'
        +'<div class="infos">'
        +'<span>密保问题：</span><input type="text" value="">'
        +'</div>'
        +'<div class="infos">'
        +'<span>密保答案：</span><input type="text" value="">'
        +'</div>'
        +'</div>'
        +'</div>'
        +'<div class="user-box">'
        +'<div><img src="./images/user.jpg"></div>'
        +'<p>GuMiao</p>'
        +'<p>用户账号</p>'
        +'<hr>'
        +'<p>注册时间：2015/01/03</p>'
        +'<p>上一次登录IP：10.7.1.92</p>'
        +'</div>'
        +'</div>');
    
    
    function show() {
      console.log("changePasswordPanel");
      $(app.config.panelContainer).html('');
      $(app.config.panelContainer).append($userDetailsDOM);

      var data = JSON.parse(localStorage["m-usrC"]);
      console.log(data, $(".info-box:eq(3) input:eq(1)"));
      $(".info-box:eq(0) input:eq(0)").val(data.name);
      $(".info-box:eq(0) input:eq(1)").val(data.sex);
      $(".info-box:eq(0) input:eq(2)").val(data.age);
      $(".info-box:eq(0) input:eq(3)").val(data.telephone);
      $(".info-box:eq(0) input:eq(4)").val(data.home);
      $(".info-box:eq(1) input:eq(0)").val(data.tall);
      $(".info-box:eq(1) input:eq(1)").val(data.weight);
      $(".info-box:eq(1) input:eq(2)").val(data.blood);
      $(".info-box:eq(1) input:eq(3)").val(data.hobby);
      $(".info-box:eq(2) input:eq(0)").val(data.education);
      $(".info-box:eq(2) input:eq(1)").val(data.school);
      $(".info-box:eq(3) input:eq(0)").val(data.company);
      $(".info-box:eq(3) input:eq(1)").val(data.position);
      $(".info-box:eq(3) input:eq(2)").val(data.experience);
      $(".info-box:eq(4) input:eq(0)").val(data.postionwant);
      $(".info-box:eq(4) input:eq(1)").val(data.pricewant);
      $(".info-box:eq(5) input:eq(0)").val(data.question);
      $(".info-box:eq(5) input:eq(1)").val(data.answer);
      if(data.userhead){$(".user-box img").attr("src", data.userhead);}
      $(".user-box p:eq(0)").html(data.username);
      $(".user-box p:eq(2)").html("注册时间："+data.date);
      $(".user-box p:eq(3)").html("上次登录IP："+data.ip);
      

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

      $(".info-type div:eq(0)").trigger("click");
    }
  
    return {show: show};
  })();
  