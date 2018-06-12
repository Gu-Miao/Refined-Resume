var $systemSummaryPanel = (function() {
    var $systemSummaryDOM = $(''
      +'<div id="system-summary-panel">'
      +'<div id="manager-count">'
      +'<div></div>'
      +'<div>'
      +'<h1>2</h1>'
      +'<span>管理员总数</span>'
      +'</div>'
      +'</div>'
      +'<div id="user-count">'
      +'<div></div>'
      +'<div>'
      +'<h1>2</h1>'
      +'<span>注册用户数</span>'
      +'</div>'
      +'</div>'
      +'<div id="use-count">'
      +'<div></div>'
      +'<div>'
      +'<h1>2</h1>'
      +'<span>使用次数</span>'
      +'</div>'
      +'</div>'
      +'<div id="template-count">'
      +'<div></div>'
      +'<div>'
      +'<h1>2</h1>'
      +'<span>模板数量</span>'
      +'</div>'
      +'</div>'
      +'<div id="echarts"></div>'
      +'<div id="currunt-user">'
      +'<h2>RRManager1</h2>'
      +'<p>管理员帐号</p>'
      +'<hr>'
      +'<p>上次登录时间：2018/06/05</p>'
      +'<p>上次登录IP：10.7.92.144</p>'
      +'</div>'
      +'</div>');
    
      var x = [];
      for(let i = 0; i < 7; i++) {
        x.push(getDay(i-6));
      }
      var y = [111, 32, 768, 3, 444, 1, 33];
      
      function getDay(day){
          var today = new Date();
          var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
          today.setTime(targetday_milliseconds);
          var tYear = today.getFullYear();
          var tMonth = today.getMonth();
          var tDate = today.getDate();
          tMonth = doHandleMonth(tMonth + 1);
          tDate = doHandleMonth(tDate);
          return tYear+"-"+tMonth+"-"+tDate;
      }
      function doHandleMonth(month){
          var m = month;
          if(month.toString().length == 1){
           m = "0" + month;
          }
          return m;
      }
      

    function show() {
      console.log("systemSummaryDOM");
      $(app.config.panelContainer).html('');
      $(app.config.panelContainer).append($systemSummaryDOM);
      

      var data = {
        id: "systemSummary",
        usr: "rr1",
        psw: "asdf"
      }
              fetch("http://localhost:8000", {
        method: "POST",
        body: JSON.stringify(data)
      }).then(function(res) {
        res.text().then(function(data) {
          console.log(data);
        });
      });

      var myChart = echarts.init(document.getElementById('echarts'));
      var option = {
        title: {
            text: '近一周访问量',
            // subtext: "just a demo"
        },
        tooltip: {},
        legend: {
            data:['访问量']
        },
        xAxis: {
            data: x
        },
        yAxis: {},
        series: [{
            name: '访问量',
            type: 'line',
            // smooth: true,
            data: y
        }]
      };
      myChart.setOption(option);
    }
  
    return {show: show};
  })();
  