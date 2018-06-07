var $systemLogPanel = (function() {
    var $systemLogDOM = $(''
      +'<div id="system-log-panel">'
      +'<div class="system-log-header">'
      +'<div>行为</div>'
      +'<div>账号类别</div>'
      +'<div>账号名</div>'
      +'<div>IP地址</div>'
      +'<div>时间</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>用户</div>'
      +'<div>gumiao</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>用户</div>'
      +'<div>zhangsan</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>用户</div>'
      +'<div>zhanggaoxiang</div>'
      +'<div>10.7.92.226</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>管理员</div>'
      +'<div>RRManager1</div>'
      +'<div>10.7.92.224</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div class="sytem-logs">'
      +'<div>登录</div>'
      +'<div>用户</div>'
      +'<div>王伟</div>'
      +'<div>10.7.92.226</div>'
      +'<div>2018/06/06</div>'
      +'</div>'
      +'<div id="pager"><div></div></div>'
      +'</div>');
  
    

    function getPageNum() { // 获取当前是第几页
        return $(".sytem-logs").index($(".sytem-logs").not(".hide")[0])/10+1;
    }
    
    function getMaxPageNum() { // 获取一共有多少页
        return Math.ceil($(".sytem-logs").length/10);
    }

    function showList(pageNum) { // 显示列表项
        $(".sytem-logs").addClass("hide");
        for(let i = (pageNum-1)*10; i < pageNum*10; i++) {
            $(".sytem-logs:eq("+i+")").removeClass("hide");
        }
    }


    function show() {
      console.log("systemLog");
      $(app.config.panelContainer).html('');
      $(app.config.panelContainer).append($systemLogDOM);

      var maxPageNum = getMaxPageNum();
      console.log(maxPageNum);
      var target = $("#pager div:eq(0)");

      if(target.children().length === 0) {
          target.append($("<div>＜</div>"));
          for(let i = 0; i < maxPageNum; i++) {
              target.append($("<div>"+(i+1)+"</div>"));
          }
          target.append($("<div>＞</div>"));
      }
      

      var pager = $("#pager div div");
      pager.click(function() {
          var pageNum = getPageNum();
          var maxPageNum = getMaxPageNum();
      
          if($(this).html() === "＜") {
              if(pageNum-1 !== 0) {
                  showList(pageNum-1);
              }
          } else if ($(this).html() === "＞") {
              if(pageNum !== maxPageNum) {
                  showList(pageNum+1);
              }
          } else {
              showList(Number($(this).html()));
          }
      });

      $("#pager div div:eq(1)").trigger("click");
    }
  
    return {show: show};
  })();
  