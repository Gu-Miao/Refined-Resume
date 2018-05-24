var c_info = function() {
    var dom_info = '<div class="settingbox">'+
        '<div id="infoMenu">'+
        '<div class="menutitle">个人信息</div>'+
        '<div class="menulist">基本信息</div>'+
        '<div class="menulist">详细信息</div>'+
        '<div class="menulist">教育背景</div>'+
        '<div class="menulist">工作信息</div>'+
        '<div class="menulist">求职意向</div>'+
        '<div class="menulist">更改头像</div>'+
        '<div class="menutitle">账号管理</div>'+
        '<div class="menulist">修改密码</div>'+
        '</div>'+
        '<div id="infoStage">'+
        '<div class="stagebox">'+
        '<div class="stageheader">'+
        '<span>基本信息</span>'+
        '<br>'+
        '<hr>'+
        '</div>'+
        '<div class="stagecontent">'+
        '<label for="info_name">姓名：</label>'+
        '<input autocomplete="off" type="text" id="info_name" />'+
        '<br>'+
        '<br>'+
        '性别：'+
        '<input autocomplete="off" name="sex" type="radio" id="info_male" />男 '+
        '<input autocomplete="off" name="sex" type="radio" id="info_female" />女'+
        '<br>'+
        '<br>'+
        '<label for="info_age">年龄：</label>'+
        '<input autocomplete="off" type="text" id="info_age" />'+
        '<br>'+
        '<br>'+
        '<label for="info_home">住址：</label>'+
        '<input autocomplete="off" type="text" id="info_home" />'+
        '<br>'+
        '<br>'+
        '<label for="info_tele">电话：</label>'+
        '<input autocomplete="off" type="text" id="info_tele" />'+
        '<br>'+
        '<br>'+
        '<div class="info_btn" onclick="infoChange1()" id="infobtn1">确定修改</div>'+
        '</div>'+
        '</div>'+
        '<div class="stagebox hide">'+
        '<div class="stageheader">'+
        '<span>详细信息</span>'+
        '<br>'+
        '<hr>'+
        '</div>'+
        '<div class="stagecontent">'+
        '<label for="info_tall">身高：</label>'+
        '<input autocomplete="off" type="text" id="info_tall" />'+
        '<br>'+
        '<br>'+
        '<label for="info_weight">体重：</label>'+
        '<input autocomplete="off" type="text" id="info_weight" />'+
        '<br>'+
        '<br>'+
        '<label for="info_blood">血型：</label>'+
        '<select id="info_blood">'+
        '<option value ="none">请选择</option>'+
        '<option value ="A">A</option>'+
        '<option value ="B">B</option>'+
        '<option value="AB">AB</option>'+
        '<option value="O">O</option>'+
        '</select>'+
        '<br>'+
        '<br>'+
        '<label for="info_hobby">兴趣爱好：</label>'+
        '<input autocomplete="off" type="text" id="info_hobby" />'+
        '<br>'+
        '<br>'+
        '<div class="info_btn" onclick="infoChange2()"  id="infobtn2">确定修改</div>'+
        '</div>'+
        '</div>'+
        '<div class="stagebox hide">'+
        '<div class="stageheader">'+
        '<span>教育背景</span>'+
        '<br>'+
        '<hr>'+
        '</div>'+
        '<div class="stagecontent">'+
        '<label for="info_edu">学历：</label>'+
        '<input autocomplete="off" type="text" id="info_edu" />'+
        '<br>'+
        '<br>'+
        '<label for="info_school">毕业学校：</label>'+
        '<input autocomplete="off" type="text" id="info_school" />'+
        '<br>'+
        '<br>'+
        '<div class="info_btn" onclick="infoChange3()"  id="infobtn3">确定修改</div>'+
        '</div>'+
        '</div>'+
        '<div class="stagebox hide">'+
        '<div class="stageheader">'+
        '<span>工作信息</span>'+
        '<br>'+
        '<hr>'+
        '</div>'+
        '<div class="stagecontent">'+
        '<label for="info_com">工作单位：</label>'+
        '<input autocomplete="off" type="text" id="info_com" />'+
        '<br>'+
        '<br>'+
        '<label for="info_pos">就职岗位：</label>'+
        '<input autocomplete="off" type="text" id="info_pos" />'+
        '<br>'+
        '<br>'+
        '<label for="info_exp">职场经历：</label>'+
        '<textarea id="info_exp" cols="30" rows="10"></textarea>'+
        '<br>'+
        '<br>'+
        '<div class="info_btn" onclick="infoChange4()"  id="infobtn4">确定修改</div>'+
        '</div>'+
        '</div>'+
        '<div class="stagebox hide">'+
        '<div class="stageheader">'+
        '<span>求职意向</span>'+
        '<br>'+
        '<hr>'+
        '</div>'+
        '<div class="stagecontent">'+
        '<label for="info_posw">期望岗位：</label>'+
        '<input autocomplete="off" type="text" id="info_posw" />'+
        '<br>'+
        '<br>'+
        '<label for="info_priw">期望薪资：</label>'+
        '<input autocomplete="off" type="text" id="info_priw" />'+
        '<br>'+
        '<br>'+
        '<div class="info_btn" onclick="infoChange5()"  id="infobtn5">确定修改</div>'+
        '</div>'+
        '</div>'+
        '<div class="stagebox hide">'+
        '<div class="stageheader">'+
        '<span>更改头像</span>'+
        '<br>'+
        '<hr>'+
        '</div>'+
        '<div class="stagecontent">'+
        '<div id="info_show"></div>'+
        '<input autocomplete="off" type="file" id="info_file">'+
        '<canvas id="info_thumbnail"></canvas>'+
        '<span id="info_thumbnail_text">头像预览</span>'+
        '<button id="info_target" style="display: none"></button>'+
        '<div class="info_btn" onclick="infoChange6()"  id="infobtn6">确定修改</div>'+
        '<input type="hidden" id="base">'+
        '<input type="hidden" id="info_x1" />'+
        '<input type="hidden" id="info_y1" />'+
        '<input type="hidden" id="info_x2" />'+
        '<input type="hidden" id="info_y2" />'+
        '<input type="hidden" id="info_w" />'+
        '<input type="hidden" id="info_h" />'+
        '</div>'+
        '</div>'+
        '<div class="stagebox hide">'+
        '<div class="stageheader">'+
        '<span>修改密码</span>'+
        '<br>'+
        '<hr>'+
        '</div>'+
        '<div class="stagecontent">'+
        '<label for="info_pswc">新密码：</label>'+
        '<input type="password" id="info_pswc" />'+
        '<div class="em_info"></div>'+
        '<br>'+
        '<label for="info_cpswc">确　认：</label>'+
        '<input type="password" id="info_cpswc" />'+
        '<div class="em_info"></div>'+
        '<br>'+
        '<div class="info_btn" onclick="infoChange7()"  id="infobtn7">确定修改</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>';

    function show() {
        rr.innerHTML += dom_info;
        window.location.hash = "#/info";
        var first = document.getElementsByClassName("menulist")[0];

        $(".menulist").click(menulist);
        $("#info_file").change(preview);
        $("#info_target").click(showCanvas);
        
        if(document.all) {
            first.click();
        }
        // 其它浏览器
        else {
            var e = document.createEvent("MouseEvents");
            e.initEvent("click", true, true);
            first.dispatchEvent(e);
        }

        var jcrop_api; // 初始化 jcrop API
        var info_thumbnail = document.getElementById("info_thumbnail");
        var ct = info_thumbnail.getContext('2d');
        info_thumbnail.width = 100;
        info_thumbnail.height = 100;

        userheader.onload = function() { // 头像图片加载时的回调函数
            console.log("width: ", userheader.width, "height: ", userheader.height);
            ct.drawImage(userheader, 0, 0, 100, 100, 0, 0, info_thumbnail.width, info_thumbnail.height);
        }

        var name = document.getElementById("info_name"); // 姓名
            sex = "", // 性别
            male = document.getElementById("info_male"), // 男
            female = document.getElementById("info_female"), // 女
            age = document.getElementById("info_age"), // 年龄
            home = document.getElementById("info_home"), // 住址
            tele = document.getElementById("info_tele"); // 电话
            tall = document.getElementById("info_tall"), // 身高
            weight = document.getElementById("info_weight"), // 体重
            blood = $("#info_blood"), // 血型
            hobby = document.getElementById("info_hobby"), // 兴趣
            edu = document.getElementById("info_edu"), // 学历
            school = document.getElementById("info_school"), // 毕业学校
            com = document.getElementById("info_com"), // 公司
            pos = document.getElementById("info_pos"), // 岗位
            exp = document.getElementById("info_exp"), // 经历
            posw = document.getElementById("info_posw"), // 期望职位
            priw = document.getElementById("info_priw"); // 期望薪资
            
        var usrhdr; // 头像

        var data = window.sessionStorage["rr_usrC"];
        console.log(JSON.parse(data));
        name.value = JSON.parse(data).name;
        sex = JSON.parse(data).sex;
        if(sex === "男") {
            male.checked = true;
        } else {
            female.checked = true;
        }
        age.value = JSON.parse(data).age;
        home.value = JSON.parse(data).home;
        tele.value = JSON.parse(data).telephone;
        tall.value = JSON.parse(data).tall;
        weight.value = JSON.parse(data).weight;
        blood.val(JSON.parse(data).blood);
        console.log(blood[0]);
        if(blood[0].value == "" || blood[0].value == "请选择") {
            blood[0].value = "none";
        }
        hobby.value = JSON.parse(data).hobby;
        edu.value = JSON.parse(data).education;
        school.value = JSON.parse(data).school;
        com.value = JSON.parse(data).company;
        pos.value = JSON.parse(data).postion;
        exp.innerHTML = JSON.parse(data).experience;
        posw.value = JSON.parse(data).postionwant;
        priw.value = JSON.parse(data).pricewant;

        console.log(window.sessionStorage["rr_usrC"]);

        
    }

    var userheader = new Image();
    userheader.crossOrigin = "*";

    
    function menulist() { // 点击菜单项的回调函数
        var self = window.event.target;
        var stages = document.getElementsByClassName("stagebox");
        var index = 0;
        self.className += " menulist_c";
        for(let i = 0; i < self.parentElement.children.length; i++) {
            if(self.parentElement.children[i] === self) {
                index = i;
            } else if(self.parentElement.children[i].className !== "menutitle") {
                self.parentElement.children[i].className = "menulist";
            }
        }
    
        if(index === 8) {
            index = 6;
        } else {
            index--;
        }
    
        for(let i = 0; i < stages.length; i++) {
            if(index === i) {
                stages[i].className = "stagebox";
            } else {
                stages[i].className = "stagebox hide";
            }
        }
    }
    
    function showCanvas() { // 显示图片
        var div = $("#info_show");
        div.empty();
        var pop = userheader.width/userheader.height;
        var rest;
        div.append("<canvas id='k'></canvas>");
        var k = document.getElementById("k");
        var kc = k.getContext('2d');
        if(userheader.width > userheader.height) {
            k.width = 400;
            k.height = 400/pop;
            rest = (300 - k.height)/2;
        } else {
            k.width = 300*pop;
            k.height = 300;
            rest = (400 - k.width)/2;
        }
        kc.drawImage(userheader, 0, 0, userheader.width, userheader.height, 0, 0, k.width, k.height);
    
        $('#k').Jcrop({
            aspectRatio: 1,
            onChange: showCoords,
            onSelect: showCoords,
            onRelease: clearCoords
        },function(){
            jcrop_api = this;
            if(userheader.width > userheader.height) {
                $(".jcrop-holder").css("margin-top", rest);
            } else {
                $(".jcrop-holder").css("margin-left", rest);
            }
        });
        
    }
    
    function preview() { // 点击上传文件控件的回调
        var docObj=document.getElementById("info_file");
        $("#cf").empty();
        $("#cf").append('<canvas id="canvas"></canvas>');
        var height = userheader.height;
        
        userheader.src = window.URL.createObjectURL(docObj.files[0]);

        setTimeout(function() {
            var target = document.getElementById("info_target");
            // IE
            if(document.all) {
                first.click();
            }
            // 其它浏览器
            else {
                var e = document.createEvent("MouseEvents");
                e.initEvent("click", true, true);
                target.dispatchEvent(e);
            }
        }, 500);
    
        return true;
    }
    
    function showCoords(c) { // 选择框变化时的回调函数
        $('#info_x1').val(c.x);
        $('#info_y1').val(c.y);
        $('#info_x2').val(c.x2);
        $('#info_y2').val(c.y2);
        $('#info_w').val(c.w);
        $('#info_h').val(c.h);

        var info_thumbnail = document.getElementById("info_thumbnail");
        var ct = info_thumbnail.getContext('2d');
        info_thumbnail.width = 100;
        if(userheader.width > userheader.height) {
            var prop = 400/userheader.width;
        } else {
            var prop = 300/userheader.height;
        }
        
        ct.drawImage(userheader, c.x/prop, c.y/prop, c.w/prop, c.h/prop, 0, 0, info_thumbnail.width, info_thumbnail.height);
    };
    
    function clearCoords() { // 选择框取消时的回调函数
        $('#coords input').val('');
    };

    return {show: show}
}();