var c_resume = function() {
    var dom_resume01 = '<div class="resumeBox">'+
        '<div class="resume">'+
        '<!-- 简历左侧 -->'+
        '<div class="resume_left">'+
        '<!-- 头像 -->'+
        '<div class="resume_userhead" onclick="showM(this)"></div>'+
        '<!-- 基本信息 -->'+
        '<div class="basic_box">'+
        '<div class="resume_basic" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>'+
        '<ul>'+
        '<li id="resume_birth">生日</li>'+
        '<li id="resume_city">所在城市</li>'+
        '<li id="resume_mail">电子邮箱</li>'+
        '<li id="resume_phone">联系电话</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        '<!-- 技能特长 -->'+
        '<div class="skill_box">'+
        '<div class="resume_skill" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>  '+
        '<h2>技能特长</h2>'+
        '<ul>'+
        '<li>添加我的技能特长</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        '<!-- 兴趣爱好 -->'+
        '<div class="hobby_box">'+
        '<div class="resume_hobby"  onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<h2>兴趣爱好</h2>'+
        '<ul>'+
        '<li>添加我的兴趣爱好</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 简历右侧 -->'+
        '<div class="resume_right">'+
        '<!-- 名字 -->'+
        '<div class="name_box">'+
        '<div class="resume_name" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>你的名字</p>'+
        '</br>'+
        '<p>一句话介绍你自己，告诉HR为什么选择你而不是别人</p>'+
        '</div>'+
        '</div>'+
        '<!-- 求职意向 -->'+
        '<div class="jhi_box">'+
        '<div class="resume_jhi" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>求职意向</p>'+
        '<hr></hr>'+
        '<div>意向岗位</div>'+
        '<div>职业类型</div>'+
        '<div>意向城市</div>'+
        '<div>薪资要求</div>'+
        '</div>'+
        '</div>'+
        '<!-- 教育背景 -->'+
        '<div class="edu_box">'+
        '<div class="resume_edu" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>教育背景</p>'+
        '<hr></hr>'+
        '<div>最高学历</div>'+
        '<div>毕业时间</div>'+
        '<div>毕业院校</div>'+
        '<div>所学专业</div>'+
        '</div>'+
        '</div>'+
        '<!-- 工作经历 -->'+
        '<div class="exp_box">'+
        '<div class="resume_exp" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>工作经验</p>'+
        '<hr></hr>'+
        '<div>工作时间</div><br><br>'+
        '<div>公司名称</div><br><br>'+
        '<div>职位名称</div>'+
        '</br>'+
        '</br>'+
        '<p>在这里简介你的工作经历</p>'+
        '</div>'+
        '</div>'+
        '<!-- 自我评价 -->'+
        '<div class="self_box">'+
        '<div class="resume_self" onmouseover="showBtn(this)" onmouseout="hideBtn(this)"> '+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>自我评价</p>'+
        '<hr></hr>'+
        '<p>在这里对你的履历进行简短的总结和评价</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '/div>'+
        '<!-- 模态框 -->'+
        '<!-- 头像 -->'+
        '<div class="modal fade" id="rr_userhead" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑头像'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div id="rr_show"></div>'+
        '<input autocomplete="off" type="file" id="rr_file" onchange="preview1()">'+
        '<canvas id="rr_thumbnail"></canvas>'+
        '<span id="rr_thumbnail_text">头像预览</span>'+
        '<button onclick="showCanvas1()" id="info_target" style="display: none"></button>'+
        '<input type="hidden" id="base">'+
        '<input type="hidden" id="info_x1" />'+
        '<input type="hidden" id="info_y1" />'+
        '<input type="hidden" id="info_x2" />'+
        '<input type="hidden" id="info_y2" />'+
        '<input type="hidden" id="info_w" />'+
        '<input type="hidden" id="info_h" />'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="userhead(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 基本信息 -->'+
        '<div class="modal fade" id="rr_basic" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑基本信息'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div style="margin: 10px 0 0 10%;">'+
        '生日：<input type="date" class="ui_date">'+
        '<div style="position: relative;">'+
        '<input id="city-picker3" class="form-control" readonly type="text" value="请选择城市" data-toggle="city-picker" style="position: relative; width: 300px;">'+
        '</div><br></br>'+
        '邮箱：<input type="text" class="ui_date">'+
        '<div class="em"></div><br>'+
        '电话：<input type="text" class="ui_date">'+
        '<div class="em"></div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="basic(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 技能特长 -->'+
        '<div class="modal fade" id="rr_skill" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑技能特长'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="skills">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeSkill(this)">团队协作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人际关系<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">组织协调<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">外语交际<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">销售技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">团队运营<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">市场调研<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">活动策划<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公文写作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">客户接待<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人员招聘<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">商务谈判<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">领导能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">自主创新<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">执行力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">设计能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公关技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">计划与执行<div></div></div>'+
        '<input type="text" onkeydown="addSkill(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="skill(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 兴趣爱好 -->'+
        '<div class="modal fade" id="rr_hobby" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑兴趣爱好'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="hobbys">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeHobby(this)">篮球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">足球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">LOL<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">收藏<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">网球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">潜水<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">DOTA<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">摇滚<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">武术<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">拳击<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">阅读<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">茶艺<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">音乐<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">汽车<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">漫画<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">电影<div></div></div>'+
        '<input type="text" onkeydown="addHobby(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="hobby(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我介绍 -->'+
        '<div class="modal fade" id="rr_name" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我介绍'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div></div>'+
        '姓名：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '<br><br>'+
        '介绍：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="introduce(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 求职意向 -->'+
        '<div class="modal fade" id="rr_jhi" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑求职意向'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '意向岗位：<input type="text"></br></br>'+
        '职业类型：<input type="text"></br></br>'+
        '意向城市：<input type="text"></br></br>'+
        '薪资要求：<input type="text"></br></br>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="jhi(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 教育背景 -->'+
        '<div class="modal fade" id="rr_edu" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑教育背景'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　最高学历：<input type="text">'+
        '　毕业时间：<input type="date"><br><br>'+
        '　毕业院校：<input type="text">'+
        '　所学专业：<input type="text">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="edu(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 工作经历 -->'+
        '<div class="modal fade" id="rr_exp" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑工作经历'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　开始时间：<input type="date">'+
        '　结束时间：<input type="date"><br><br>'+
        '　公司名称：<input type="text">'+
        '　工作岗位：<input type="text"><br><br>'+
        '　工作经历：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="exp(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我评价 -->'+
        '<div class="modal fade" id="rr_self" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我评价'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　自我评价：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="self(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>';

    var dom_resume02 = '<div class="resumeBox">'+
        '<div class="resume">'+
        ''+
        '<!-- 简历左侧 -->'+
        '<div class="resume_left1">'+
        '<!-- 头像 -->'+
        '<div class="resume_userhead" onclick="showM(this)"></div>'+
        '<!-- 基本信息 -->'+
        '<div class="basic_box">'+
        '<div class="resume_basic1" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>'+
        '<ul>'+
        '<li id="resume_birth">生日</li>'+
        '<li id="resume_city">所在城市</li>'+
        '<li id="resume_mail">电子邮箱</li>'+
        '<li id="resume_phone">联系电话</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        '<!-- 技能特长 -->'+
        '<div class="skill_box">'+
        '<div class="resume_skill1" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>  '+
        '<h2>技能特长</h2>'+
        '<ul>'+
        '<li>添加我的技能特长</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        '<!-- 兴趣爱好 -->'+
        '<div class="hobby_box">'+
        '<div class="resume_hobby1"  onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<h2>兴趣爱好</h2>'+
        '<ul>'+
        '<li>添加我的兴趣爱好</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 简历右侧 -->'+
        '<div class="resume_right">'+
        '<!-- 名字 -->'+
        '<div class="name_box">'+
        '<div class="resume_name" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>你的名字</p>'+
        '</br>'+
        '<p>一句话介绍你自己，告诉HR为什么选择你而不是别人</p>'+
        '</div>'+
        '</div>'+
        '<!-- 求职意向 -->'+
        '<div class="jhi_box">'+
        '<div class="resume_jhi" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>求职意向</p>'+
        '<hr></hr>'+
        '<div>意向岗位</div>'+
        '<div>职业类型</div>'+
        '<div>意向城市</div>'+
        '<div>薪资要求</div>'+
        '</div>'+
        '</div>'+
        '<!-- 教育背景 -->'+
        '<div class="edu_box">'+
        '<div class="resume_edu" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>教育背景</p>'+
        '<hr></hr>'+
        '<div>最高学历</div>'+
        '<div>毕业时间</div>'+
        '<div>毕业院校</div>'+
        '<div>所学专业</div>'+
        '</div>'+
        '</div>'+
        '<!-- 工作经历 -->'+
        '<div class="exp_box">'+
        '<div class="resume_exp" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>工作经验</p>'+
        '<hr></hr>'+
        '<div>工作时间</div><br><br>'+
        '<div>公司名称</div><br><br>'+
        '<div>职位名称</div>'+
        '</br>'+
        '</br>'+
        '<p>在这里简介你的工作经历</p>'+
        '</div>'+
        '</div>'+
        '<!-- 自我评价 -->'+
        '<div class="self_box">'+
        '<div class="resume_self" onmouseover="showBtn(this)" onmouseout="hideBtn(this)"> '+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>自我评价</p>'+
        '<hr></hr>'+
        '<p>在这里对你的履历进行简短的总结和评价</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 模态框 -->'+
        '<!-- 头像 -->'+
        '<div class="modal fade" id="rr_userhead" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑头像'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div id="rr_show"></div>'+
        '<input autocomplete="off" type="file" id="rr_file" onchange="preview1()">'+
        '<canvas id="rr_thumbnail"></canvas>'+
        '<span id="rr_thumbnail_text">头像预览</span>'+
        '<button onclick="showCanvas1()" id="info_target" style="display: none"></button>'+
        '<input type="hidden" id="base">'+
        '<input type="hidden" id="info_x1" />'+
        '<input type="hidden" id="info_y1" />'+
        '<input type="hidden" id="info_x2" />'+
        '<input type="hidden" id="info_y2" />'+
        '<input type="hidden" id="info_w" />'+
        '<input type="hidden" id="info_h" />'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="userhead(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 基本信息 -->'+
        '<div class="modal fade" id="rr_basic" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑基本信息'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div style="margin: 10px 0 0 10%;">'+
        '生日：<input type="date" class="ui_date">'+
        '<div style="position: relative;">'+
        '<input id="city-picker3" class="form-control" readonly type="text" value="请选择城市" data-toggle="city-picker" style="position: relative; width: 300px;">'+
        '</div><br></br>'+
        '邮箱：<input type="text" class="ui_date">'+
        '<div class="em"></div><br>'+
        '电话：<input type="text" class="ui_date">'+
        '<div class="em"></div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="basic(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 技能特长 -->'+
        '<div class="modal fade" id="rr_skill" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑技能特长'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="skills">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeSkill(this)">团队协作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人际关系<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">组织协调<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">外语交际<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">销售技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">团队运营<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">市场调研<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">活动策划<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公文写作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">客户接待<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人员招聘<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">商务谈判<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">领导能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">自主创新<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">执行力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">设计能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公关技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">计划与执行<div></div></div>'+
        '<input type="text" onkeydown="addSkill(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="skill(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 兴趣爱好 -->'+
        '<div class="modal fade" id="rr_hobby" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑兴趣爱好'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="hobbys">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeHobby(this)">篮球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">足球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">LOL<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">收藏<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">网球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">潜水<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">DOTA<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">摇滚<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">武术<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">拳击<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">阅读<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">茶艺<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">音乐<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">汽车<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">漫画<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">电影<div></div></div>'+
        '<input type="text" onkeydown="addHobby(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="hobby(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我介绍 -->'+
        '<div class="modal fade" id="rr_name" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我介绍'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div></div>'+
        '姓名：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '<br><br>'+
        '介绍：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="introduce(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 求职意向 -->'+
        '<div class="modal fade" id="rr_jhi" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑求职意向'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '意向岗位：<input type="text"></br></br>'+
        '职业类型：<input type="text"></br></br>'+
        '意向城市：<input type="text"></br></br>'+
        '薪资要求：<input type="text"></br></br>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="jhi(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 教育背景 -->'+
        '<div class="modal fade" id="rr_edu" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑教育背景'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　最高学历：<input type="text">'+
        '　毕业时间：<input type="date"><br><br>'+
        '　毕业院校：<input type="text">'+
        '　所学专业：<input type="text">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="edu(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 工作经历 -->'+
        '<div class="modal fade" id="rr_exp" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑工作经历'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　开始时间：<input type="date">'+
        '　结束时间：<input type="date"><br><br>'+
        '　公司名称：<input type="text">'+
        '　工作岗位：<input type="text"><br><br>'+
        '　工作经历：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="exp(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我评价 -->'+
        '<div class="modal fade" id="rr_self" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我评价'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　自我评价：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="self(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>';

    var dom_resume03 = '<div class="resumeBox">'+
        '<div class="resume">'+
        ''+
        '<!-- 简历左侧 -->'+
        '<div class="resume_left2">'+
        '<!-- 头像 -->'+
        '<div class="resume_userhead" onclick="showM(this)"></div>'+
        '<!-- 基本信息 -->'+
        '<div class="basic_box">'+
        '<div class="resume_basic2" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>'+
        '<ul>'+
        '<li id="resume_birth">生日</li>'+
        '<li id="resume_city">所在城市</li>'+
        '<li id="resume_mail">电子邮箱</li>'+
        '<li id="resume_phone">联系电话</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        '<!-- 技能特长 -->'+
        '<div class="skill_box">'+
        '<div class="resume_skill2" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>  '+
        '<h2>技能特长</h2>'+
        '<ul>'+
        '<li>添加我的技能特长</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        '<!-- 兴趣爱好 -->'+
        '<div class="hobby_box">'+
        '<div class="resume_hobby2"  onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<h2>兴趣爱好</h2>'+
        '<ul>'+
        '<li>添加我的兴趣爱好</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 简历右侧 -->'+
        '<div class="resume_right">'+
        '<!-- 名字 -->'+
        '<div class="name_box">'+
        '<div class="resume_name" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>你的名字</p>'+
        '</br>'+
        '<p>一句话介绍你自己，告诉HR为什么选择你而不是别人</p>'+
        '</div>'+
        '</div>'+
        '<!-- 求职意向 -->'+
        '<div class="jhi_box">'+
        '<div class="resume_jhi" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>求职意向</p>'+
        '<hr></hr>'+
        '<div>意向岗位</div>'+
        '<div>职业类型</div>'+
        '<div>意向城市</div>'+
        '<div>薪资要求</div>'+
        '</div>'+
        '</div>'+
        '<!-- 教育背景 -->'+
        '<div class="edu_box">'+
        '<div class="resume_edu" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>教育背景</p>'+
        '<hr></hr>'+
        '<div>最高学历</div>'+
        '<div>毕业时间</div>'+
        '<div>毕业院校</div>'+
        '<div>所学专业</div>'+
        '</div>'+
        '</div>'+
        '<!-- 工作经历 -->'+
        '<div class="exp_box">'+
        '<div class="resume_exp" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>工作经验</p>'+
        '<hr></hr>'+
        '<div>工作时间</div><br><br>'+
        '<div>公司名称</div><br><br>'+
        '<div>职位名称</div>'+
        '</br>'+
        '</br>'+
        '<p>在这里简介你的工作经历</p>'+
        '</div>'+
        '</div>'+
        '<!-- 自我评价 -->'+
        '<div class="self_box">'+
        '<div class="resume_self" onmouseover="showBtn(this)" onmouseout="hideBtn(this)"> '+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>自我评价</p>'+
        '<hr></hr>'+
        '<p>在这里对你的履历进行简短的总结和评价</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 模态框 -->'+
        '<!-- 头像 -->'+
        '<div class="modal fade" id="rr_userhead" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑头像'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div id="rr_show"></div>'+
        '<input autocomplete="off" type="file" id="rr_file" onchange="preview1()">'+
        '<canvas id="rr_thumbnail"></canvas>'+
        '<span id="rr_thumbnail_text">头像预览</span>'+
        '<button onclick="showCanvas1()" id="info_target" style="display: none"></button>'+
        '<input type="hidden" id="base">'+
        '<input type="hidden" id="info_x1" />'+
        '<input type="hidden" id="info_y1" />'+
        '<input type="hidden" id="info_x2" />'+
        '<input type="hidden" id="info_y2" />'+
        '<input type="hidden" id="info_w" />'+
        '<input type="hidden" id="info_h" />'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="userhead(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 基本信息 -->'+
        '<div class="modal fade" id="rr_basic" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑基本信息'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div style="margin: 10px 0 0 10%;">'+
        '生日：<input type="date" class="ui_date">'+
        '<div style="position: relative;">'+
        '<input id="city-picker3" class="form-control" readonly type="text" value="请选择城市" data-toggle="city-picker" style="position: relative; width: 300px;">'+
        '</div><br></br>'+
        '邮箱：<input type="text" class="ui_date">'+
        '<div class="em"></div><br>'+
        '电话：<input type="text" class="ui_date">'+
        '<div class="em"></div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="basic(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 技能特长 -->'+
        '<div class="modal fade" id="rr_skill" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑技能特长'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="skills">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeSkill(this)">团队协作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人际关系<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">组织协调<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">外语交际<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">销售技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">团队运营<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">市场调研<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">活动策划<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公文写作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">客户接待<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人员招聘<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">商务谈判<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">领导能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">自主创新<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">执行力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">设计能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公关技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">计划与执行<div></div></div>'+
        '<input type="text" onkeydown="addSkill(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="skill(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 兴趣爱好 -->'+
        '<div class="modal fade" id="rr_hobby" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑兴趣爱好'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="hobbys">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeHobby(this)">篮球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">足球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">LOL<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">收藏<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">网球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">潜水<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">DOTA<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">摇滚<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">武术<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">拳击<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">阅读<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">茶艺<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">音乐<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">汽车<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">漫画<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">电影<div></div></div>'+
        '<input type="text" onkeydown="addHobby(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="hobby(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我介绍 -->'+
        '<div class="modal fade" id="rr_name" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我介绍'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div></div>'+
        '姓名：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '<br><br>'+
        '介绍：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="introduce(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 求职意向 -->'+
        '<div class="modal fade" id="rr_jhi" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑求职意向'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '意向岗位：<input type="text"></br></br>'+
        '职业类型：<input type="text"></br></br>'+
        '意向城市：<input type="text"></br></br>'+
        '薪资要求：<input type="text"></br></br>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="jhi(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 教育背景 -->'+
        '<div class="modal fade" id="rr_edu" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑教育背景'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　最高学历：<input type="text">'+
        '　毕业时间：<input type="date"><br><br>'+
        '　毕业院校：<input type="text">'+
        '　所学专业：<input type="text">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="edu(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 工作经历 -->'+
        '<div class="modal fade" id="rr_exp" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑工作经历'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　开始时间：<input type="date">'+
        '　结束时间：<input type="date"><br><br>'+
        '　公司名称：<input type="text">'+
        '　工作岗位：<input type="text"><br><br>'+
        '　工作经历：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="exp(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我评价 -->'+
        '<div class="modal fade" id="rr_self" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我评价'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　自我评价：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="self(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>';

    var dom_resume04 = '<div class="resumeBox1">'+
        '<div class="resume">'+
        '<div class="rbg">'+
        '<div class="md">'+
        '<!-- 头像 -->'+
        '<div class="resume_userhead3" onclick="showM(this)"></div>'+
        ''+
        '<!-- 名字 -->'+
        '<div class="name_box3">'+
        '<div class="resume_name3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>你的名字</p>'+
        '</br>'+
        '<p>一句话介绍你自己，告诉HR为什么选择你而不是别人</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 基本信息 -->'+
        '<div class="basic_box3">'+
        '<div class="resume_basic3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>'+
        '<ul>'+
        '<li id="resume_birth">生日</li>'+
        '<li id="resume_city">所在城市</li>'+
        '<li id="resume_mail">电子邮箱</li>'+
        '<li id="resume_phone">联系电话</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 求职意向 -->'+
        '<div class="jhi_box3">'+
        '<div class="resume_jhi3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>求职意向</p>'+
        '<hr></hr>'+
        '<div>意向岗位</div>'+
        '<div>职业类型</div>'+
        '<div>意向城市</div>'+
        '<div>薪资要求</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 教育背景 -->'+
        '<div class="edu_box3">'+
        '<div class="resume_edu3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>教育背景</p>'+
        '<hr></hr>'+
        '<div>最高学历</div>'+
        '<div>毕业时间</div>'+
        '<div>毕业院校</div>'+
        '<div>所学专业</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 工作经历 -->'+
        '<div class="exp_box3">'+
        '<div class="resume_exp3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>工作经验</p>'+
        '<hr></hr>'+
        '<div>工作时间</div>'+
        '<div>公司名称</div>'+
        '<div>职位名称</div>'+
        '</br>'+
        '</br>'+
        '<p>在这里简介你的工作经历</p>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 技能特长 -->'+
        '<div class="skill_box3">'+
        '<div class="resume_skill3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>  '+
        '<h2>技能特长</h2>'+
        '<ul>'+
        '<li>添加我的技能特长</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 兴趣爱好 -->'+
        '<div class="hobby_box3">'+
        '<div class="resume_hobby3"  onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<h2>兴趣爱好</h2>'+
        '<ul>'+
        '<li>添加我的兴趣爱好</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 自我评价 -->'+
        '<div class="self_box3">'+
        '<div class="resume_self3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)"> '+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>自我评价</p>'+
        '<hr></hr>'+
        '<p>在这里对你的履历进行简短的总结和评价</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 模态框 -->'+
        '<!-- 头像 -->'+
        '<div class="modal fade" id="rr_userhead" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑头像'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div id="rr_show"></div>'+
        '<input autocomplete="off" type="file" id="rr_file" onchange="preview1()">'+
        '<canvas id="rr_thumbnail"></canvas>'+
        '<span id="rr_thumbnail_text">头像预览</span>'+
        '<button onclick="showCanvas1()" id="info_target" style="display: none"></button>'+
        '<input type="hidden" id="base">'+
        '<input type="hidden" id="info_x1" />'+
        '<input type="hidden" id="info_y1" />'+
        '<input type="hidden" id="info_x2" />'+
        '<input type="hidden" id="info_y2" />'+
        '<input type="hidden" id="info_w" />'+
        '<input type="hidden" id="info_h" />'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="userhead(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 基本信息 -->'+
        '<div class="modal fade" id="rr_basic" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑基本信息'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div style="margin: 10px 0 0 10%;">'+
        '生日：<input type="date" class="ui_date">'+
        '<div style="position: relative;">'+
        '<input id="city-picker3" class="form-control" readonly type="text" value="请选择城市" data-toggle="city-picker" style="position: relative; width: 300px;">'+
        '</div><br></br>'+
        '邮箱：<input type="text" class="ui_date">'+
        '<div class="em"></div><br>'+
        '电话：<input type="text" class="ui_date">'+
        '<div class="em"></div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="basic(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 技能特长 -->'+
        '<div class="modal fade" id="rr_skill" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑技能特长'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="skills">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeSkill(this)">团队协作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人际关系<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">组织协调<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">外语交际<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">销售技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">团队运营<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">市场调研<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">活动策划<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公文写作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">客户接待<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人员招聘<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">商务谈判<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">领导能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">自主创新<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">执行力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">设计能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公关技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">计划与执行<div></div></div>'+
        '<input type="text" onkeydown="addSkill(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="skill(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 兴趣爱好 -->'+
        '<div class="modal fade" id="rr_hobby" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑兴趣爱好'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="hobbys">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeHobby(this)">篮球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">足球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">LOL<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">收藏<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">网球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">潜水<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">DOTA<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">摇滚<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">武术<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">拳击<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">阅读<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">茶艺<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">音乐<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">汽车<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">漫画<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">电影<div></div></div>'+
        '<input type="text" onkeydown="addHobby(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="hobby(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我介绍 -->'+
        '<div class="modal fade" id="rr_name" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我介绍'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div></div>'+
        '姓名：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '<br><br>'+
        '介绍：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="introduce(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 求职意向 -->'+
        '<div class="modal fade" id="rr_jhi" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑求职意向'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '意向岗位：<input type="text"></br></br>'+
        '职业类型：<input type="text"></br></br>'+
        '意向城市：<input type="text"></br></br>'+
        '薪资要求：<input type="text"></br></br>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="jhi(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 教育背景 -->'+
        '<div class="modal fade" id="rr_edu" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑教育背景'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　最高学历：<input type="text">'+
        '　毕业时间：<input type="date"><br><br>'+
        '　毕业院校：<input type="text">'+
        '　所学专业：<input type="text">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="edu(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 工作经历 -->'+
        '<div class="modal fade" id="rr_exp" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑工作经历'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　开始时间：<input type="date">'+
        '　结束时间：<input type="date"><br><br>'+
        '　公司名称：<input type="text">'+
        '　工作岗位：<input type="text"><br><br>'+
        '　工作经历：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="exp(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我评价 -->'+
        '<div class="modal fade" id="rr_self" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我评价'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　自我评价：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="self(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>';

    var dom_resume05 =  '<div class="resumeBox1">'+
        '<div class="resume">'+
        '<div class="rbg1">'+
        '<div class="md">'+
        '<!-- 头像 -->'+
        '<div class="resume_userhead3" onclick="showM(this)"></div>'+
        ''+
        '<!-- 名字 -->'+
        '<div class="name_box3">'+
        '<div class="resume_name3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>你的名字</p>'+
        '</br>'+
        '<p>一句话介绍你自己，告诉HR为什么选择你而不是别人</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 基本信息 -->'+
        '<div class="basic_box3">'+
        '<div class="resume_basic3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>'+
        '<ul>'+
        '<li id="resume_birth">生日</li>'+
        '<li id="resume_city">所在城市</li>'+
        '<li id="resume_mail">电子邮箱</li>'+
        '<li id="resume_phone">联系电话</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 求职意向 -->'+
        '<div class="jhi_box3">'+
        '<div class="resume_jhi3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>求职意向</p>'+
        '<hr></hr>'+
        '<div>意向岗位</div>'+
        '<div>职业类型</div>'+
        '<div>意向城市</div>'+
        '<div>薪资要求</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 教育背景 -->'+
        '<div class="edu_box3">'+
        '<div class="resume_edu3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>教育背景</p>'+
        '<hr></hr>'+
        '<div>最高学历</div>'+
        '<div>毕业时间</div>'+
        '<div>毕业院校</div>'+
        '<div>所学专业</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 工作经历 -->'+
        '<div class="exp_box3">'+
        '<div class="resume_exp3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>工作经验</p>'+
        '<hr></hr>'+
        '<div>工作时间</div>'+
        '<div>公司名称</div>'+
        '<div>职位名称</div>'+
        '</br>'+
        '</br>'+
        '<p>在这里简介你的工作经历</p>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 技能特长 -->'+
        '<div class="skill_box3">'+
        '<div class="resume_skill3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>  '+
        '<h2>技能特长</h2>'+
        '<ul>'+
        '<li>添加我的技能特长</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 兴趣爱好 -->'+
        '<div class="hobby_box3">'+
        '<div class="resume_hobby3"  onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<h2>兴趣爱好</h2>'+
        '<ul>'+
        '<li>添加我的兴趣爱好</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 自我评价 -->'+
        '<div class="self_box3">'+
        '<div class="resume_self3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)"> '+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>自我评价</p>'+
        '<hr></hr>'+
        '<p>在这里对你的履历进行简短的总结和评价</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 模态框 -->'+
        '<!-- 头像 -->'+
        '<div class="modal fade" id="rr_userhead" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑头像'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div id="rr_show"></div>'+
        '<input autocomplete="off" type="file" id="rr_file" onchange="preview1()">'+
        '<canvas id="rr_thumbnail"></canvas>'+
        '<span id="rr_thumbnail_text">头像预览</span>'+
        '<button onclick="showCanvas1()" id="info_target" style="display: none"></button>'+
        '<input type="hidden" id="base">'+
        '<input type="hidden" id="info_x1" />'+
        '<input type="hidden" id="info_y1" />'+
        '<input type="hidden" id="info_x2" />'+
        '<input type="hidden" id="info_y2" />'+
        '<input type="hidden" id="info_w" />'+
        '<input type="hidden" id="info_h" />'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="userhead(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 基本信息 -->'+
        '<div class="modal fade" id="rr_basic" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑基本信息'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div style="margin: 10px 0 0 10%;">'+
        '生日：<input type="date" class="ui_date">'+
        '<div style="position: relative;">'+
        '<input id="city-picker3" class="form-control" readonly type="text" value="请选择城市" data-toggle="city-picker" style="position: relative; width: 300px;">'+
        '</div><br></br>'+
        '邮箱：<input type="text" class="ui_date">'+
        '<div class="em"></div><br>'+
        '电话：<input type="text" class="ui_date">'+
        '<div class="em"></div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="basic(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 技能特长 -->'+
        '<div class="modal fade" id="rr_skill" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑技能特长'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="skills">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeSkill(this)">团队协作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人际关系<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">组织协调<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">外语交际<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">销售技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">团队运营<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">市场调研<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">活动策划<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公文写作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">客户接待<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人员招聘<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">商务谈判<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">领导能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">自主创新<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">执行力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">设计能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公关技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">计划与执行<div></div></div>'+
        '<input type="text" onkeydown="addSkill(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="skill(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 兴趣爱好 -->'+
        '<div class="modal fade" id="rr_hobby" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑兴趣爱好'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="hobbys">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeHobby(this)">篮球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">足球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">LOL<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">收藏<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">网球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">潜水<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">DOTA<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">摇滚<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">武术<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">拳击<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">阅读<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">茶艺<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">音乐<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">汽车<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">漫画<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">电影<div></div></div>'+
        '<input type="text" onkeydown="addHobby(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="hobby(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我介绍 -->'+
        '<div class="modal fade" id="rr_name" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我介绍'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div></div>'+
        '姓名：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '<br><br>'+
        '介绍：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="introduce(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 求职意向 -->'+
        '<div class="modal fade" id="rr_jhi" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑求职意向'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '意向岗位：<input type="text"></br></br>'+
        '职业类型：<input type="text"></br></br>'+
        '意向城市：<input type="text"></br></br>'+
        '薪资要求：<input type="text"></br></br>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="jhi(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 教育背景 -->'+
        '<div class="modal fade" id="rr_edu" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑教育背景'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　最高学历：<input type="text">'+
        '　毕业时间：<input type="date"><br><br>'+
        '　毕业院校：<input type="text">'+
        '　所学专业：<input type="text">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="edu(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 工作经历 -->'+
        '<div class="modal fade" id="rr_exp" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑工作经历'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　开始时间：<input type="date">'+
        '　结束时间：<input type="date"><br><br>'+
        '　公司名称：<input type="text">'+
        '　工作岗位：<input type="text"><br><br>'+
        '　工作经历：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="exp(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我评价 -->'+
        '<div class="modal fade" id="rr_self" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我评价'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　自我评价：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="self(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>';

    var dom_resume06 = '<div class="resumeBox1">'+
        '<div class="resume">'+
        ''+
        '<div class="rbg2">'+
        '<div class="md">'+
        '<!-- 头像 -->'+
        '<div class="resume_userhead3" onclick="showM(this)"></div>'+
        ''+
        '<!-- 名字 -->'+
        '<div class="name_box3">'+
        '<div class="resume_name3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>你的名字</p>'+
        '</br>'+
        '<p>一句话介绍你自己，告诉HR为什么选择你而不是别人</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 基本信息 -->'+
        '<div class="basic_box3">'+
        '<div class="resume_basic3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>'+
        '<ul>'+
        '<li id="resume_birth">生日</li>'+
        '<li id="resume_city">所在城市</li>'+
        '<li id="resume_mail">电子邮箱</li>'+
        '<li id="resume_phone">联系电话</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 求职意向 -->'+
        '<div class="jhi_box3">'+
        '<div class="resume_jhi3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>求职意向</p>'+
        '<hr></hr>'+
        '<div>意向岗位</div>'+
        '<div>职业类型</div>'+
        '<div>意向城市</div>'+
        '<div>薪资要求</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 教育背景 -->'+
        '<div class="edu_box3">'+
        '<div class="resume_edu3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>教育背景</p>'+
        '<hr></hr>'+
        '<div>最高学历</div>'+
        '<div>毕业时间</div>'+
        '<div>毕业院校</div>'+
        '<div>所学专业</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 工作经历 -->'+
        '<div class="exp_box3">'+
        '<div class="resume_exp3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>工作经验</p>'+
        '<hr></hr>'+
        '<div>工作时间</div>'+
        '<div>公司名称</div>'+
        '<div>职位名称</div>'+
        '</br>'+
        '</br>'+
        '<p>在这里简介你的工作经历</p>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 技能特长 -->'+
        '<div class="skill_box3">'+
        '<div class="resume_skill3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>  '+
        '<h2>技能特长</h2>'+
        '<ul>'+
        '<li>添加我的技能特长</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 兴趣爱好 -->'+
        '<div class="hobby_box3">'+
        '<div class="resume_hobby3"  onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<h2>兴趣爱好</h2>'+
        '<ul>'+
        '<li>添加我的兴趣爱好</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 自我评价 -->'+
        '<div class="self_box3">'+
        '<div class="resume_self3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)"> '+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>自我评价</p>'+
        '<hr></hr>'+
        '<p>在这里对你的履历进行简短的总结和评价</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 模态框 -->'+
        '<!-- 头像 -->'+
        '<div class="modal fade" id="rr_userhead" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑头像'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div id="rr_show"></div>'+
        '<input autocomplete="off" type="file" id="rr_file" onchange="preview1()">'+
        '<canvas id="rr_thumbnail"></canvas>'+
        '<span id="rr_thumbnail_text">头像预览</span>'+
        '<button onclick="showCanvas1()" id="info_target" style="display: none"></button>'+
        '<input type="hidden" id="base">'+
        '<input type="hidden" id="info_x1" />'+
        '<input type="hidden" id="info_y1" />'+
        '<input type="hidden" id="info_x2" />'+
        '<input type="hidden" id="info_y2" />'+
        '<input type="hidden" id="info_w" />'+
        '<input type="hidden" id="info_h" />'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="userhead(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 基本信息 -->'+
        '<div class="modal fade" id="rr_basic" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑基本信息'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div style="margin: 10px 0 0 10%;">'+
        '生日：<input type="date" class="ui_date">'+
        '<div style="position: relative;">'+
        '<input id="city-picker3" class="form-control" readonly type="text" value="请选择城市" data-toggle="city-picker" style="position: relative; width: 300px;">'+
        '</div><br></br>'+
        '邮箱：<input type="text" class="ui_date">'+
        '<div class="em"></div><br>'+
        '电话：<input type="text" class="ui_date">'+
        '<div class="em"></div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="basic(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 技能特长 -->'+
        '<div class="modal fade" id="rr_skill" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑技能特长'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="skills">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeSkill(this)">团队协作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人际关系<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">组织协调<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">外语交际<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">销售技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">团队运营<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">市场调研<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">活动策划<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公文写作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">客户接待<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人员招聘<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">商务谈判<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">领导能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">自主创新<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">执行力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">设计能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公关技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">计划与执行<div></div></div>'+
        '<input type="text" onkeydown="addSkill(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="skill(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 兴趣爱好 -->'+
        '<div class="modal fade" id="rr_hobby" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑兴趣爱好'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="hobbys">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeHobby(this)">篮球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">足球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">LOL<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">收藏<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">网球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">潜水<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">DOTA<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">摇滚<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">武术<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">拳击<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">阅读<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">茶艺<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">音乐<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">汽车<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">漫画<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">电影<div></div></div>'+
        '<input type="text" onkeydown="addHobby(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="hobby(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我介绍 -->'+
        '<div class="modal fade" id="rr_name" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我介绍'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div></div>'+
        '姓名：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '<br><br>'+
        '介绍：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="introduce(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 求职意向 -->'+
        '<div class="modal fade" id="rr_jhi" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑求职意向'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '意向岗位：<input type="text"></br></br>'+
        '职业类型：<input type="text"></br></br>'+
        '意向城市：<input type="text"></br></br>'+
        '薪资要求：<input type="text"></br></br>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="jhi(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 教育背景 -->'+
        '<div class="modal fade" id="rr_edu" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑教育背景'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　最高学历：<input type="text">'+
        '　毕业时间：<input type="date"><br><br>'+
        '　毕业院校：<input type="text">'+
        '　所学专业：<input type="text">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="edu(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 工作经历 -->'+
        '<div class="modal fade" id="rr_exp" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑工作经历'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　开始时间：<input type="date">'+
        '　结束时间：<input type="date"><br><br>'+
        '　公司名称：<input type="text">'+
        '　工作岗位：<input type="text"><br><br>'+
        '　工作经历：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="exp(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我评价 -->'+
        '<div class="modal fade" id="rr_self" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我评价'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　自我评价：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="self(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>';

    var dom_resume07 = '<div class="resumeBox1">'+
        '<div class="resume">'+
        ''+
        '<div class="rbg3">'+
        '<div class="md">'+
        '<!-- 头像 -->'+
        '<div class="resume_userhead3" onclick="showM(this)"></div>'+
        ''+
        '<!-- 名字 -->'+
        '<div class="name_box3">'+
        '<div class="resume_name3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>你的名字</p>'+
        '</br>'+
        '<p>一句话介绍你自己，告诉HR为什么选择你而不是别人</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 基本信息 -->'+
        '<div class="basic_box3">'+
        '<div class="resume_basic3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>'+
        '<ul>'+
        '<li id="resume_birth">生日</li>'+
        '<li id="resume_city">所在城市</li>'+
        '<li id="resume_mail">电子邮箱</li>'+
        '<li id="resume_phone">联系电话</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 求职意向 -->'+
        '<div class="jhi_box3">'+
        '<div class="resume_jhi3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>求职意向</p>'+
        '<hr></hr>'+
        '<div>意向岗位</div>'+
        '<div>职业类型</div>'+
        '<div>意向城市</div>'+
        '<div>薪资要求</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 教育背景 -->'+
        '<div class="edu_box3">'+
        '<div class="resume_edu3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>教育背景</p>'+
        '<hr></hr>'+
        '<div>最高学历</div>'+
        '<div>毕业时间</div>'+
        '<div>毕业院校</div>'+
        '<div>所学专业</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 工作经历 -->'+
        '<div class="exp_box3">'+
        '<div class="resume_exp3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>工作经验</p>'+
        '<hr></hr>'+
        '<div>工作时间</div>'+
        '<div>公司名称</div>'+
        '<div>职位名称</div>'+
        '</br>'+
        '</br>'+
        '<p>在这里简介你的工作经历</p>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 技能特长 -->'+
        '<div class="skill_box3">'+
        '<div class="resume_skill3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>  '+
        '<h2>技能特长</h2>'+
        '<ul>'+
        '<li>添加我的技能特长</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 兴趣爱好 -->'+
        '<div class="hobby_box3">'+
        '<div class="resume_hobby3"  onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<h2>兴趣爱好</h2>'+
        '<ul>'+
        '<li>添加我的兴趣爱好</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 自我评价 -->'+
        '<div class="self_box3">'+
        '<div class="resume_self3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)"> '+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>自我评价</p>'+
        '<hr></hr>'+
        '<p>在这里对你的履历进行简短的总结和评价</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 模态框 -->'+
        '<!-- 头像 -->'+
        '<div class="modal fade" id="rr_userhead" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑头像'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div id="rr_show"></div>'+
        '<input autocomplete="off" type="file" id="rr_file" onchange="preview1()">'+
        '<canvas id="rr_thumbnail"></canvas>'+
        '<span id="rr_thumbnail_text">头像预览</span>'+
        '<button onclick="showCanvas1()" id="info_target" style="display: none"></button>'+
        '<input type="hidden" id="base">'+
        '<input type="hidden" id="info_x1" />'+
        '<input type="hidden" id="info_y1" />'+
        '<input type="hidden" id="info_x2" />'+
        '<input type="hidden" id="info_y2" />'+
        '<input type="hidden" id="info_w" />'+
        '<input type="hidden" id="info_h" />'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="userhead(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 基本信息 -->'+
        '<div class="modal fade" id="rr_basic" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑基本信息'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div style="margin: 10px 0 0 10%;">'+
        '生日：<input type="date" class="ui_date">'+
        '<div style="position: relative;">'+
        '<input id="city-picker3" class="form-control" readonly type="text" value="请选择城市" data-toggle="city-picker" style="position: relative; width: 300px;">'+
        '</div><br></br>'+
        '邮箱：<input type="text" class="ui_date">'+
        '<div class="em"></div><br>'+
        '电话：<input type="text" class="ui_date">'+
        '<div class="em"></div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="basic(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 技能特长 -->'+
        '<div class="modal fade" id="rr_skill" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑技能特长'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="skills">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeSkill(this)">团队协作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人际关系<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">组织协调<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">外语交际<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">销售技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">团队运营<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">市场调研<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">活动策划<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公文写作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">客户接待<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人员招聘<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">商务谈判<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">领导能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">自主创新<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">执行力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">设计能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公关技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">计划与执行<div></div></div>'+
        '<input type="text" onkeydown="addSkill(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="skill(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 兴趣爱好 -->'+
        '<div class="modal fade" id="rr_hobby" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑兴趣爱好'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="hobbys">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeHobby(this)">篮球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">足球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">LOL<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">收藏<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">网球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">潜水<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">DOTA<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">摇滚<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">武术<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">拳击<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">阅读<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">茶艺<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">音乐<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">汽车<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">漫画<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">电影<div></div></div>'+
        '<input type="text" onkeydown="addHobby(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="hobby(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我介绍 -->'+
        '<div class="modal fade" id="rr_name" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我介绍'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div></div>'+
        '姓名：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '<br><br>'+
        '介绍：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="introduce(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 求职意向 -->'+
        '<div class="modal fade" id="rr_jhi" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑求职意向'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '意向岗位：<input type="text"></br></br>'+
        '职业类型：<input type="text"></br></br>'+
        '意向城市：<input type="text"></br></br>'+
        '薪资要求：<input type="text"></br></br>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="jhi(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 教育背景 -->'+
        '<div class="modal fade" id="rr_edu" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑教育背景'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　最高学历：<input type="text">'+
        '　毕业时间：<input type="date"><br><br>'+
        '　毕业院校：<input type="text">'+
        '　所学专业：<input type="text">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="edu(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 工作经历 -->'+
        '<div class="modal fade" id="rr_exp" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑工作经历'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　开始时间：<input type="date">'+
        '　结束时间：<input type="date"><br><br>'+
        '　公司名称：<input type="text">'+
        '　工作岗位：<input type="text"><br><br>'+
        '　工作经历：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="exp(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我评价 -->'+
        '<div class="modal fade" id="rr_self" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我评价'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　自我评价：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="self(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>';

    var dom_resume08 = '<div class="resumeBox">'+
        '<div class="resume">'+
        ''+
        '<!-- 简历左侧 -->'+
        '<div class="resume_left7">'+
        '<!-- 头像 -->'+
        '<div class="resume_userhead" onclick="showM(this)"></div>'+
        '<!-- 基本信息 -->'+
        '<div class="basic_box">'+
        '<div class="resume_basic7" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>'+
        '<ul>'+
        '<li id="resume_birth">生日</li>'+
        '<li id="resume_city">所在城市</li>'+
        '<li id="resume_mail">电子邮箱</li>'+
        '<li id="resume_phone">联系电话</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        '<!-- 技能特长 -->'+
        '<div class="skill_box">'+
        '<div class="resume_skill7" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>  '+
        '<h2>技能特长</h2>'+
        '<ul>'+
        '<li>添加我的技能特长</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        '<!-- 兴趣爱好 -->'+
        '<div class="hobby_box">'+
        '<div class="resume_hobby7"  onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<h2>兴趣爱好</h2>'+
        '<ul>'+
        '<li>添加我的兴趣爱好</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 简历右侧 -->'+
        '<div class="resume_right">'+
        '<!-- 名字 -->'+
        '<div class="name_box7">'+
        '<div class="resume_name7" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>你的名字</p>'+
        '</br>'+
        '<p>一句话介绍你自己，告诉HR为什么选择你而不是别人</p>'+
        '</div>'+
        '</div>'+
        '<!-- 求职意向 -->'+
        '<div class="jhi_box7">'+
        '<div class="resume_jhi7" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>求职意向</p>'+
        '<hr></hr>'+
        '<div>意向岗位</div>'+
        '<div>职业类型</div>'+
        '<div>意向城市</div>'+
        '<div>薪资要求</div>'+
        '</div>'+
        '</div>'+
        '<!-- 教育背景 -->'+
        '<div class="edu_box7">'+
        '<div class="resume_edu7" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>教育背景</p>'+
        '<hr></hr>'+
        '<div>最高学历</div>'+
        '<div>毕业时间</div>'+
        '<div>毕业院校</div>'+
        '<div>所学专业</div>'+
        '</div>'+
        '</div>'+
        '<!-- 工作经历 -->'+
        '<div class="exp_box7">'+
        '<div class="resume_exp7" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>工作经验</p>'+
        '<hr></hr>'+
        '<div>工作时间</div><br><br>'+
        '<div>公司名称</div><br><br>'+
        '<div>职位名称</div>'+
        '</br>'+
        '</br>'+
        '<p>在这里简介你的工作经历</p>'+
        '</div>'+
        '</div>'+
        '<!-- 自我评价 -->'+
        '<div class="self_box7">'+
        '<div class="resume_self7" onmouseover="showBtn(this)" onmouseout="hideBtn(this)"> '+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>自我评价</p>'+
        '<hr></hr>'+
        '<p>在这里对你的履历进行简短的总结和评价</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 模态框 -->'+
        '<!-- 头像 -->'+
        '<div class="modal fade" id="rr_userhead" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑头像'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div id="rr_show"></div>'+
        '<input autocomplete="off" type="file" id="rr_file" onchange="preview1()">'+
        '<canvas id="rr_thumbnail"></canvas>'+
        '<span id="rr_thumbnail_text">头像预览</span>'+
        '<button onclick="showCanvas1()" id="info_target" style="display: none"></button>'+
        '<input type="hidden" id="base">'+
        '<input type="hidden" id="info_x1" />'+
        '<input type="hidden" id="info_y1" />'+
        '<input type="hidden" id="info_x2" />'+
        '<input type="hidden" id="info_y2" />'+
        '<input type="hidden" id="info_w" />'+
        '<input type="hidden" id="info_h" />'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="userhead(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 基本信息 -->'+
        '<div class="modal fade" id="rr_basic" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑基本信息'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div style="margin: 10px 0 0 10%;">'+
        '生日：<input type="date" class="ui_date">'+
        '<div style="position: relative;">'+
        '<input id="city-picker3" class="form-control" readonly type="text" value="请选择城市" data-toggle="city-picker" style="position: relative; width: 300px;">'+
        '</div><br></br>'+
        '邮箱：<input type="text" class="ui_date">'+
        '<div class="em"></div><br>'+
        '电话：<input type="text" class="ui_date">'+
        '<div class="em"></div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="basic(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 技能特长 -->'+
        '<div class="modal fade" id="rr_skill" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑技能特长'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="skills">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeSkill(this)">团队协作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人际关系<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">组织协调<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">外语交际<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">销售技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">团队运营<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">市场调研<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">活动策划<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公文写作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">客户接待<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人员招聘<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">商务谈判<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">领导能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">自主创新<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">执行力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">设计能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公关技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">计划与执行<div></div></div>'+
        '<input type="text" onkeydown="addSkill(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="skill(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 兴趣爱好 -->'+
        '<div class="modal fade" id="rr_hobby" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑兴趣爱好'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="hobbys">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeHobby(this)">篮球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">足球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">LOL<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">收藏<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">网球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">潜水<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">DOTA<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">摇滚<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">武术<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">拳击<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">阅读<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">茶艺<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">音乐<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">汽车<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">漫画<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">电影<div></div></div>'+
        '<input type="text" onkeydown="addHobby(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="hobby(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我介绍 -->'+
        '<div class="modal fade" id="rr_name" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我介绍'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div></div>'+
        '姓名：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '<br><br>'+
        '介绍：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="introduce(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 求职意向 -->'+
        '<div class="modal fade" id="rr_jhi" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑求职意向'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '意向岗位：<input type="text"></br></br>'+
        '职业类型：<input type="text"></br></br>'+
        '意向城市：<input type="text"></br></br>'+
        '薪资要求：<input type="text"></br></br>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="jhi(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 教育背景 -->'+
        '<div class="modal fade" id="rr_edu" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑教育背景'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　最高学历：<input type="text">'+
        '　毕业时间：<input type="date"><br><br>'+
        '　毕业院校：<input type="text">'+
        '　所学专业：<input type="text">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="edu(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 工作经历 -->'+
        '<div class="modal fade" id="rr_exp" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑工作经历'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　开始时间：<input type="date">'+
        '　结束时间：<input type="date"><br><br>'+
        '　公司名称：<input type="text">'+
        '　工作岗位：<input type="text"><br><br>'+
        '　工作经历：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="exp(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我评价 -->'+
        '<div class="modal fade" id="rr_self" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我评价'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　自我评价：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="self(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>';

    var dom_resume09 = '<div class="resumeBox">'+
        '<div class="resume">'+
        ''+
        '<!-- 简历左侧 -->'+
        '<div class="resume_left7">'+
        '<!-- 头像 -->'+
        '<div class="resume_userhead" onclick="showM(this)"></div>'+
        '<!-- 基本信息 -->'+
        '<div class="basic_box">'+
        '<div class="resume_basic7" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>'+
        '<ul>'+
        '<li id="resume_birth">生日</li>'+
        '<li id="resume_city">所在城市</li>'+
        '<li id="resume_mail">电子邮箱</li>'+
        '<li id="resume_phone">联系电话</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        '<!-- 技能特长 -->'+
        '<div class="skill_box">'+
        '<div class="resume_skill8" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>  '+
        '<h2>技能特长</h2>'+
        '<ul>'+
        '<li>添加我的技能特长</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        '<!-- 兴趣爱好 -->'+
        '<div class="hobby_box">'+
        '<div class="resume_hobby8"  onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<h2>兴趣爱好</h2>'+
        '<ul>'+
        '<li>添加我的兴趣爱好</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 简历右侧 -->'+
        '<div class="resume_right">'+
        '<!-- 名字 -->'+
        '<div class="name_box7">'+
        '<div class="resume_name8" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>你的名字</p>'+
        '</br>'+
        '<p>一句话介绍你自己，告诉HR为什么选择你而不是别人</p>'+
        '</div>'+
        '</div>'+
        '<!-- 求职意向 -->'+
        '<div class="jhi_box7">'+
        '<div class="resume_jhi8" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>求职意向</p>'+
        '<hr></hr>'+
        '<div>意向岗位</div>'+
        '<div>职业类型</div>'+
        '<div>意向城市</div>'+
        '<div>薪资要求</div>'+
        '</div>'+
        '</div>'+
        '<!-- 教育背景 -->'+
        '<div class="edu_box7">'+
        '<div class="resume_edu8" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>教育背景</p>'+
        '<hr></hr>'+
        '<div>最高学历</div>'+
        '<div>毕业时间</div>'+
        '<div>毕业院校</div>'+
        '<div>所学专业</div>'+
        '</div>'+
        '</div>'+
        '<!-- 工作经历 -->'+
        '<div class="exp_box7">'+
        '<div class="resume_exp8" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>工作经验</p>'+
        '<hr></hr>'+
        '<div>工作时间</div><br><br>'+
        '<div>公司名称</div><br><br>'+
        '<div>职位名称</div>'+
        '</br>'+
        '</br>'+
        '<p>在这里简介你的工作经历</p>'+
        '</div>'+
        '</div>'+
        '<!-- 自我评价 -->'+
        '<div class="self_box8">'+
        '<div class="resume_self8" onmouseover="showBtn(this)" onmouseout="hideBtn(this)"> '+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>自我评价</p>'+
        '<hr></hr>'+
        '<p>在这里对你的履历进行简短的总结和评价</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 模态框 -->'+
        '<!-- 头像 -->'+
        '<div class="modal fade" id="rr_userhead" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑头像'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div id="rr_show"></div>'+
        '<input autocomplete="off" type="file" id="rr_file" onchange="preview1()">'+
        '<canvas id="rr_thumbnail"></canvas>'+
        '<span id="rr_thumbnail_text">头像预览</span>'+
        '<button onclick="showCanvas1()" id="info_target" style="display: none"></button>'+
        '<input type="hidden" id="base">'+
        '<input type="hidden" id="info_x1" />'+
        '<input type="hidden" id="info_y1" />'+
        '<input type="hidden" id="info_x2" />'+
        '<input type="hidden" id="info_y2" />'+
        '<input type="hidden" id="info_w" />'+
        '<input type="hidden" id="info_h" />'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="userhead(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 基本信息 -->'+
        '<div class="modal fade" id="rr_basic" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑基本信息'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div style="margin: 10px 0 0 10%;">'+
        '生日：<input type="date" class="ui_date">'+
        '<div style="position: relative;">'+
        '<input id="city-picker3" class="form-control" readonly type="text" value="请选择城市" data-toggle="city-picker" style="position: relative; width: 300px;">'+
        '</div><br></br>'+
        '邮箱：<input type="text" class="ui_date">'+
        '<div class="em"></div><br>'+
        '电话：<input type="text" class="ui_date">'+
        '<div class="em"></div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="basic(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 技能特长 -->'+
        '<div class="modal fade" id="rr_skill" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑技能特长'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="skills">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeSkill(this)">团队协作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人际关系<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">组织协调<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">外语交际<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">销售技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">团队运营<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">市场调研<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">活动策划<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公文写作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">客户接待<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人员招聘<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">商务谈判<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">领导能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">自主创新<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">执行力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">设计能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公关技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">计划与执行<div></div></div>'+
        '<input type="text" onkeydown="addSkill(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="skill(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 兴趣爱好 -->'+
        '<div class="modal fade" id="rr_hobby" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑兴趣爱好'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="hobbys">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeHobby(this)">篮球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">足球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">LOL<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">收藏<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">网球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">潜水<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">DOTA<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">摇滚<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">武术<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">拳击<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">阅读<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">茶艺<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">音乐<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">汽车<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">漫画<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">电影<div></div></div>'+
        '<input type="text" onkeydown="addHobby(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="hobby(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我介绍 -->'+
        '<div class="modal fade" id="rr_name" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我介绍'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div></div>'+
        '姓名：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '<br><br>'+
        '介绍：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="introduce(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 求职意向 -->'+
        '<div class="modal fade" id="rr_jhi" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑求职意向'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '意向岗位：<input type="text"></br></br>'+
        '职业类型：<input type="text"></br></br>'+
        '意向城市：<input type="text"></br></br>'+
        '薪资要求：<input type="text"></br></br>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="jhi(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 教育背景 -->'+
        '<div class="modal fade" id="rr_edu" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑教育背景'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　最高学历：<input type="text">'+
        '　毕业时间：<input type="date"><br><br>'+
        '　毕业院校：<input type="text">'+
        '　所学专业：<input type="text">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="edu(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 工作经历 -->'+
        '<div class="modal fade" id="rr_exp" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑工作经历'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　开始时间：<input type="date">'+
        '　结束时间：<input type="date"><br><br>'+
        '　公司名称：<input type="text">'+
        '　工作岗位：<input type="text"><br><br>'+
        '　工作经历：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="exp(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我评价 -->'+
        '<div class="modal fade" id="rr_self" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我评价'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　自我评价：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="self(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>';

    var dom_resume10 = '<div class="resumeBox1">'+
        '<div class="resume">'+
        ''+
        ''+
        '<div class="mds">'+
        '<!-- 头像 -->'+
        '<div class="resume_userhead9" onclick="showM(this)"></div>'+
        ''+
        '<!-- 名字 -->'+
        '<div class="name_box9">'+
        '<div class="resume_name9" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>你的名字</p>'+
        '</br>'+
        '<p>一句话介绍你自己，告诉HR为什么选择你而不是别人</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 基本信息 -->'+
        '<div class="basic_box3">'+
        '<div class="resume_basic3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>'+
        '<ul>'+
        '<li id="resume_birth">生日</li>'+
        '<li id="resume_city">所在城市</li>'+
        '<li id="resume_mail">电子邮箱</li>'+
        '<li id="resume_phone">联系电话</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 求职意向 -->'+
        '<div class="jhi_box3">'+
        '<div class="resume_jhi9" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>求职意向</p>'+
        '<hr></hr>'+
        '<div>意向岗位</div>'+
        '<div>职业类型</div>'+
        '<div>意向城市</div>'+
        '<div>薪资要求</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 教育背景 -->'+
        '<div class="edu_box3">'+
        '<div class="resume_edu9" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>教育背景</p>'+
        '<hr></hr>'+
        '<div>最高学历</div>'+
        '<div>毕业时间</div>'+
        '<div>毕业院校</div>'+
        '<div>所学专业</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 工作经历 -->'+
        '<div class="exp_box3">'+
        '<div class="resume_exp9" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>工作经验</p>'+
        '<hr></hr>'+
        '<div>工作时间</div>'+
        '<div>公司名称</div>'+
        '<div>职位名称</div>'+
        '</br>'+
        '</br>'+
        '<p>在这里简介你的工作经历</p>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 技能特长 -->'+
        '<div class="skill_box3">'+
        '<div class="resume_skill9" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>  '+
        '<h2>技能特长</h2>'+
        '<ul>'+
        '<li>添加我的技能特长</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 兴趣爱好 -->'+
        '<div class="hobby_box3">'+
        '<div class="resume_hobby9"  onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<h2>兴趣爱好</h2>'+
        '<ul>'+
        '<li>添加我的兴趣爱好</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 自我评价 -->'+
        '<div class="self_box9">'+
        '<div class="resume_self9" onmouseover="showBtn(this)" onmouseout="hideBtn(this)"> '+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>自我评价</p>'+
        '<hr></hr>'+
        '<p>在这里对你的履历进行简短的总结和评价</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 模态框 -->'+
        '<!-- 头像 -->'+
        '<div class="modal fade" id="rr_userhead" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑头像'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div id="rr_show"></div>'+
        '<input autocomplete="off" type="file" id="rr_file" onchange="preview1()">'+
        '<canvas id="rr_thumbnail"></canvas>'+
        '<span id="rr_thumbnail_text">头像预览</span>'+
        '<button onclick="showCanvas1()" id="info_target" style="display: none"></button>'+
        '<input type="hidden" id="base">'+
        '<input type="hidden" id="info_x1" />'+
        '<input type="hidden" id="info_y1" />'+
        '<input type="hidden" id="info_x2" />'+
        '<input type="hidden" id="info_y2" />'+
        '<input type="hidden" id="info_w" />'+
        '<input type="hidden" id="info_h" />'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="userhead(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 基本信息 -->'+
        '<div class="modal fade" id="rr_basic" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑基本信息'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div style="margin: 10px 0 0 10%;">'+
        '生日：<input type="date" class="ui_date">'+
        '<div style="position: relative;">'+
        '<input id="city-picker3" class="form-control" readonly type="text" value="请选择城市" data-toggle="city-picker" style="position: relative; width: 300px;">'+
        '</div><br></br>'+
        '邮箱：<input type="text" class="ui_date">'+
        '<div class="em"></div><br>'+
        '电话：<input type="text" class="ui_date">'+
        '<div class="em"></div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="basic(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 技能特长 -->'+
        '<div class="modal fade" id="rr_skill" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑技能特长'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="skills">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeSkill(this)">团队协作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人际关系<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">组织协调<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">外语交际<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">销售技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">团队运营<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">市场调研<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">活动策划<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公文写作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">客户接待<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人员招聘<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">商务谈判<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">领导能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">自主创新<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">执行力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">设计能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公关技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">计划与执行<div></div></div>'+
        '<input type="text" onkeydown="addSkill(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="skill(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 兴趣爱好 -->'+
        '<div class="modal fade" id="rr_hobby" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑兴趣爱好'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="hobbys">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeHobby(this)">篮球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">足球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">LOL<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">收藏<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">网球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">潜水<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">DOTA<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">摇滚<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">武术<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">拳击<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">阅读<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">茶艺<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">音乐<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">汽车<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">漫画<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">电影<div></div></div>'+
        '<input type="text" onkeydown="addHobby(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="hobby(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我介绍 -->'+
        '<div class="modal fade" id="rr_name" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我介绍'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div></div>'+
        '姓名：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '<br><br>'+
        '介绍：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="introduce(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 求职意向 -->'+
        '<div class="modal fade" id="rr_jhi" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑求职意向'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '意向岗位：<input type="text"></br></br>'+
        '职业类型：<input type="text"></br></br>'+
        '意向城市：<input type="text"></br></br>'+
        '薪资要求：<input type="text"></br></br>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="jhi(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 教育背景 -->'+
        '<div class="modal fade" id="rr_edu" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑教育背景'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　最高学历：<input type="text">'+
        '　毕业时间：<input type="date"><br><br>'+
        '　毕业院校：<input type="text">'+
        '　所学专业：<input type="text">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="edu(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 工作经历 -->'+
        '<div class="modal fade" id="rr_exp" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑工作经历'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　开始时间：<input type="date">'+
        '　结束时间：<input type="date"><br><br>'+
        '　公司名称：<input type="text">'+
        '　工作岗位：<input type="text"><br><br>'+
        '　工作经历：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="exp(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我评价 -->'+
        '<div class="modal fade" id="rr_self" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我评价'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　自我评价：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="self(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>';

    var dom_resume11 = '<div class="resumeBox1">'+
        '<div class="resume">'+
        '<div class="mds1">'+
        '<!-- 头像 -->'+
        '<div class="resume_userhead9" onclick="showM(this)"></div>'+
        ''+
        '<!-- 名字 -->'+
        '<div class="name_box9">'+
        '<div class="resume_name10" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>你的名字</p>'+
        '</br>'+
        '<p>一句话介绍你自己，告诉HR为什么选择你而不是别人</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 基本信息 -->'+
        '<div class="basic_box3">'+
        '<div class="resume_basic3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>'+
        '<ul>'+
        '<li id="resume_birth">生日</li>'+
        '<li id="resume_city">所在城市</li>'+
        '<li id="resume_mail">电子邮箱</li>'+
        '<li id="resume_phone">联系电话</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 求职意向 -->'+
        '<div class="jhi_box3">'+
        '<div class="resume_jhi10" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>求职意向</p>'+
        '<hr></hr>'+
        '<div>意向岗位</div>'+
        '<div>职业类型</div>'+
        '<div>意向城市</div>'+
        '<div>薪资要求</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 教育背景 -->'+
        '<div class="edu_box3">'+
        '<div class="resume_edu10" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>教育背景</p>'+
        '<hr></hr>'+
        '<div>最高学历</div>'+
        '<div>毕业时间</div>'+
        '<div>毕业院校</div>'+
        '<div>所学专业</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 工作经历 -->'+
        '<div class="exp_box3">'+
        '<div class="resume_exp10" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>工作经验</p>'+
        '<hr></hr>'+
        '<div>工作时间</div>'+
        '<div>公司名称</div>'+
        '<div>职位名称</div>'+
        '</br>'+
        '</br>'+
        '<p>在这里简介你的工作经历</p>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 技能特长 -->'+
        '<div class="skill_box3">'+
        '<div class="resume_skill10" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>  '+
        '<h2>技能特长</h2>'+
        '<ul>'+
        '<li>添加我的技能特长</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 兴趣爱好 -->'+
        '<div class="hobby_box3">'+
        '<div class="resume_hobby10"  onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<h2>兴趣爱好</h2>'+
        '<ul>'+
        '<li>添加我的兴趣爱好</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 自我评价 -->'+
        '<div class="self_box9">'+
        '<div class="resume_self10" onmouseover="showBtn(this)" onmouseout="hideBtn(this)"> '+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>自我评价</p>'+
        '<hr></hr>'+
        '<p>在这里对你的履历进行简短的总结和评价</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 模态框 -->'+
        '<!-- 头像 -->'+
        '<div class="modal fade" id="rr_userhead" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑头像'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div id="rr_show"></div>'+
        '<input autocomplete="off" type="file" id="rr_file" onchange="preview1()">'+
        '<canvas id="rr_thumbnail"></canvas>'+
        '<span id="rr_thumbnail_text">头像预览</span>'+
        '<button onclick="showCanvas1()" id="info_target" style="display: none"></button>'+
        '<input type="hidden" id="base">'+
        '<input type="hidden" id="info_x1" />'+
        '<input type="hidden" id="info_y1" />'+
        '<input type="hidden" id="info_x2" />'+
        '<input type="hidden" id="info_y2" />'+
        '<input type="hidden" id="info_w" />'+
        '<input type="hidden" id="info_h" />'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="userhead(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 基本信息 -->'+
        '<div class="modal fade" id="rr_basic" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑基本信息'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div style="margin: 10px 0 0 10%;">'+
        '生日：<input type="date" class="ui_date">'+
        '<div style="position: relative;">'+
        '<input id="city-picker3" class="form-control" readonly type="text" value="请选择城市" data-toggle="city-picker" style="position: relative; width: 300px;">'+
        '</div><br></br>'+
        '邮箱：<input type="text" class="ui_date">'+
        '<div class="em"></div><br>'+
        '电话：<input type="text" class="ui_date">'+
        '<div class="em"></div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="basic(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 技能特长 -->'+
        '<div class="modal fade" id="rr_skill" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑技能特长'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="skills">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeSkill(this)">团队协作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人际关系<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">组织协调<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">外语交际<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">销售技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">团队运营<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">市场调研<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">活动策划<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公文写作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">客户接待<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人员招聘<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">商务谈判<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">领导能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">自主创新<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">执行力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">设计能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公关技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">计划与执行<div></div></div>'+
        '<input type="text" onkeydown="addSkill(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="skill(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 兴趣爱好 -->'+
        '<div class="modal fade" id="rr_hobby" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑兴趣爱好'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="hobbys">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeHobby(this)">篮球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">足球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">LOL<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">收藏<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">网球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">潜水<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">DOTA<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">摇滚<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">武术<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">拳击<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">阅读<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">茶艺<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">音乐<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">汽车<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">漫画<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">电影<div></div></div>'+
        '<input type="text" onkeydown="addHobby(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="hobby(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我介绍 -->'+
        '<div class="modal fade" id="rr_name" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我介绍'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div></div>'+
        '姓名：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '<br><br>'+
        '介绍：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="introduce(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 求职意向 -->'+
        '<div class="modal fade" id="rr_jhi" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑求职意向'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '意向岗位：<input type="text"></br></br>'+
        '职业类型：<input type="text"></br></br>'+
        '意向城市：<input type="text"></br></br>'+
        '薪资要求：<input type="text"></br></br>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="jhi(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 教育背景 -->'+
        '<div class="modal fade" id="rr_edu" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑教育背景'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　最高学历：<input type="text">'+
        '　毕业时间：<input type="date"><br><br>'+
        '　毕业院校：<input type="text">'+
        '　所学专业：<input type="text">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="edu(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 工作经历 -->'+
        '<div class="modal fade" id="rr_exp" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑工作经历'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　开始时间：<input type="date">'+
        '　结束时间：<input type="date"><br><br>'+
        '　公司名称：<input type="text">'+
        '　工作岗位：<input type="text"><br><br>'+
        '　工作经历：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="exp(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我评价 -->'+
        '<div class="modal fade" id="rr_self" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我评价'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　自我评价：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="self(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>';


    var dom_resume12 = '<div class="resumeBox1">'+
        '<div class="resume">'+
        ''+
        ''+
        '<div class="mds2">'+
        '<!-- 头像 -->'+
        '<div class="resume_userhead9" onclick="showM(this)"></div>'+
        ''+
        '<!-- 名字 -->'+
        '<div class="name_box9">'+
        '<div class="resume_name11" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>你的名字</p>'+
        '</br>'+
        '<p>一句话介绍你自己，告诉HR为什么选择你而不是别人</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 基本信息 -->'+
        '<div class="basic_box3">'+
        '<div class="resume_basic3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>'+
        '<ul>'+
        '<li id="resume_birth">生日</li>'+
        '<li id="resume_city">所在城市</li>'+
        '<li id="resume_mail">电子邮箱</li>'+
        '<li id="resume_phone">联系电话</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 求职意向 -->'+
        '<div class="jhi_box3">'+
        '<div class="resume_jhi11" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>求职意向</p>'+
        '<hr></hr>'+
        '<div>意向岗位</div>'+
        '<div>职业类型</div>'+
        '<div>意向城市</div>'+
        '<div>薪资要求</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 教育背景 -->'+
        '<div class="edu_box3">'+
        '<div class="resume_edu11" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>教育背景</p>'+
        '<hr></hr>'+
        '<div>最高学历</div>'+
        '<div>毕业时间</div>'+
        '<div>毕业院校</div>'+
        '<div>所学专业</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 工作经历 -->'+
        '<div class="exp_box3">'+
        '<div class="resume_exp11" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>工作经验</p>'+
        '<hr></hr>'+
        '<div>工作时间</div>'+
        '<div>公司名称</div>'+
        '<div>职位名称</div>'+
        '</br>'+
        '</br>'+
        '<p>在这里简介你的工作经历</p>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 技能特长 -->'+
        '<div class="skill_box3">'+
        '<div class="resume_skill11" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>  '+
        '<h2>技能特长</h2>'+
        '<ul>'+
        '<li>添加我的技能特长</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 兴趣爱好 -->'+
        '<div class="hobby_box3">'+
        '<div class="resume_hobby11"  onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<h2>兴趣爱好</h2>'+
        '<ul>'+
        '<li>添加我的兴趣爱好</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 自我评价 -->'+
        '<div class="self_box9">'+
        '<div class="resume_self11" onmouseover="showBtn(this)" onmouseout="hideBtn(this)"> '+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>自我评价</p>'+
        '<hr></hr>'+
        '<p>在这里对你的履历进行简短的总结和评价</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 模态框 -->'+
        '<!-- 头像 -->'+
        '<div class="modal fade" id="rr_userhead" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑头像'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div id="rr_show"></div>'+
        '<input autocomplete="off" type="file" id="rr_file" onchange="preview1()">'+
        '<canvas id="rr_thumbnail"></canvas>'+
        '<span id="rr_thumbnail_text">头像预览</span>'+
        '<button onclick="showCanvas1()" id="info_target" style="display: none"></button>'+
        '<input type="hidden" id="base">'+
        '<input type="hidden" id="info_x1" />'+
        '<input type="hidden" id="info_y1" />'+
        '<input type="hidden" id="info_x2" />'+
        '<input type="hidden" id="info_y2" />'+
        '<input type="hidden" id="info_w" />'+
        '<input type="hidden" id="info_h" />'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="userhead(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 基本信息 -->'+
        '<div class="modal fade" id="rr_basic" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑基本信息'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div style="margin: 10px 0 0 10%;">'+
        '生日：<input type="date" class="ui_date">'+
        '<div style="position: relative;">'+
        '<input id="city-picker3" class="form-control" readonly type="text" value="请选择城市" data-toggle="city-picker" style="position: relative; width: 300px;">'+
        '</div><br></br>'+
        '邮箱：<input type="text" class="ui_date">'+
        '<div class="em"></div><br>'+
        '电话：<input type="text" class="ui_date">'+
        '<div class="em"></div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="basic(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 技能特长 -->'+
        '<div class="modal fade" id="rr_skill" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑技能特长'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="skills">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeSkill(this)">团队协作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人际关系<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">组织协调<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">外语交际<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">销售技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">团队运营<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">市场调研<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">活动策划<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公文写作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">客户接待<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人员招聘<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">商务谈判<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">领导能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">自主创新<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">执行力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">设计能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公关技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">计划与执行<div></div></div>'+
        '<input type="text" onkeydown="addSkill(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="skill(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 兴趣爱好 -->'+
        '<div class="modal fade" id="rr_hobby" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑兴趣爱好'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="hobbys">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeHobby(this)">篮球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">足球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">LOL<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">收藏<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">网球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">潜水<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">DOTA<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">摇滚<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">武术<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">拳击<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">阅读<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">茶艺<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">音乐<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">汽车<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">漫画<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">电影<div></div></div>'+
        '<input type="text" onkeydown="addHobby(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="hobby(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我介绍 -->'+
        '<div class="modal fade" id="rr_name" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我介绍'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div></div>'+
        '姓名：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '<br><br>'+
        '介绍：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="introduce(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 求职意向 -->'+
        '<div class="modal fade" id="rr_jhi" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑求职意向'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '意向岗位：<input type="text"></br></br>'+
        '职业类型：<input type="text"></br></br>'+
        '意向城市：<input type="text"></br></br>'+
        '薪资要求：<input type="text"></br></br>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="jhi(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 教育背景 -->'+
        '<div class="modal fade" id="rr_edu" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑教育背景'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　最高学历：<input type="text">'+
        '　毕业时间：<input type="date"><br><br>'+
        '　毕业院校：<input type="text">'+
        '　所学专业：<input type="text">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="edu(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 工作经历 -->'+
        '<div class="modal fade" id="rr_exp" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑工作经历'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　开始时间：<input type="date">'+
        '　结束时间：<input type="date"><br><br>'+
        '　公司名称：<input type="text">'+
        '　工作岗位：<input type="text"><br><br>'+
        '　工作经历：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="exp(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我评价 -->'+
        '<div class="modal fade" id="rr_self" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我评价'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　自我评价：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="self(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>';
        
    var dom_resume13 = '<div class="resumeBox1">'+
        '<div class="resume">'+
        ''+
        ''+
        '<div class="mds3">'+
        '<!-- 头像 -->'+
        '<div class="resume_userhead9" onclick="showM(this)"></div>'+
        ''+
        '<!-- 名字 -->'+
        '<div class="name_box9">'+
        '<div class="resume_name12" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>你的名字</p>'+
        '</br>'+
        '<p>一句话介绍你自己，告诉HR为什么选择你而不是别人</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 基本信息 -->'+
        '<div class="basic_box3">'+
        '<div class="resume_basic3" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>'+
        '<ul>'+
        '<li id="resume_birth">生日</li>'+
        '<li id="resume_city">所在城市</li>'+
        '<li id="resume_mail">电子邮箱</li>'+
        '<li id="resume_phone">联系电话</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 求职意向 -->'+
        '<div class="jhi_box3">'+
        '<div class="resume_jhi12" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>求职意向</p>'+
        '<hr></hr>'+
        '<div>意向岗位</div>'+
        '<div>职业类型</div>'+
        '<div>意向城市</div>'+
        '<div>薪资要求</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 教育背景 -->'+
        '<div class="edu_box3">'+
        '<div class="resume_edu12" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>教育背景</p>'+
        '<hr></hr>'+
        '<div>最高学历</div>'+
        '<div>毕业时间</div>'+
        '<div>毕业院校</div>'+
        '<div>所学专业</div>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 工作经历 -->'+
        '<div class="exp_box3">'+
        '<div class="resume_exp12" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>工作经验</p>'+
        '<hr></hr>'+
        '<div>工作时间</div>'+
        '<div>公司名称</div>'+
        '<div>职位名称</div>'+
        '</br>'+
        '</br>'+
        '<p>在这里简介你的工作经历</p>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 技能特长 -->'+
        '<div class="skill_box3">'+
        '<div class="resume_skill12" onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button>  '+
        '<h2>技能特长</h2>'+
        '<ul>'+
        '<li>添加我的技能特长</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 兴趣爱好 -->'+
        '<div class="hobby_box3">'+
        '<div class="resume_hobby12"  onmouseover="showBtn(this)" onmouseout="hideBtn(this)">'+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<h2>兴趣爱好</h2>'+
        '<ul>'+
        '<li>添加我的兴趣爱好</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        ''+
        '<!-- 自我评价 -->'+
        '<div class="self_box9">'+
        '<div class="resume_self12" onmouseover="showBtn(this)" onmouseout="hideBtn(this)"> '+
        '<button class="hide btn_change" onclick="showM(this)">修改</button> '+
        '<p>自我评价</p>'+
        '<hr></hr>'+
        '<p>在这里对你的履历进行简短的总结和评价</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 模态框 -->'+
        '<!-- 头像 -->'+
        '<div class="modal fade" id="rr_userhead" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑头像'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div id="rr_show"></div>'+
        '<input autocomplete="off" type="file" id="rr_file" onchange="preview1()">'+
        '<canvas id="rr_thumbnail"></canvas>'+
        '<span id="rr_thumbnail_text">头像预览</span>'+
        '<button onclick="showCanvas1()" id="info_target" style="display: none"></button>'+
        '<input type="hidden" id="base">'+
        '<input type="hidden" id="info_x1" />'+
        '<input type="hidden" id="info_y1" />'+
        '<input type="hidden" id="info_x2" />'+
        '<input type="hidden" id="info_y2" />'+
        '<input type="hidden" id="info_w" />'+
        '<input type="hidden" id="info_h" />'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="userhead(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 基本信息 -->'+
        '<div class="modal fade" id="rr_basic" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑基本信息'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body" id="modal_basic">'+
        '<div style="margin: 10px 0 0 10%;">'+
        '生日：<input type="date" class="ui_date">'+
        '<div style="position: relative;">'+
        '<input id="city-picker3" class="form-control" readonly type="text" value="请选择城市" data-toggle="city-picker" style="position: relative; width: 300px;">'+
        '</div><br></br>'+
        '邮箱：<input type="text" class="ui_date">'+
        '<div class="em"></div><br>'+
        '电话：<input type="text" class="ui_date">'+
        '<div class="em"></div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button " class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="basic(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 技能特长 -->'+
        '<div class="modal fade" id="rr_skill" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑技能特长'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="skills">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeSkill(this)">团队协作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人际关系<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">组织协调<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">外语交际<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">销售技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">团队运营<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">市场调研<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">活动策划<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公文写作<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">客户接待<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">人员招聘<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">商务谈判<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">领导能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">自主创新<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">执行力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">设计能力<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">公关技巧<div></div></div>'+
        '<div class="tag" onclick="changeSkill(this)">计划与执行<div></div></div>'+
        '<input type="text" onkeydown="addSkill(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="skill(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 兴趣爱好 -->'+
        '<div class="modal fade" id="rr_hobby" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑兴趣爱好'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div id="hobbys">'+
        '<div class="tag_top">'+
        '<div class="tag" onclick="changeHobby(this)">篮球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">足球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">LOL<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">收藏<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">网球<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">潜水<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">DOTA<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">摇滚<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">武术<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">拳击<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">阅读<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">茶艺<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">音乐<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">汽车<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">漫画<div></div></div>'+
        '<div class="tag" onclick="changeHobby(this)">电影<div></div></div>'+
        '<input type="text" onkeydown="addHobby(this, event)">'+
        '</div>'+
        '<div class="tag_bottom">'+
        '<p>已添加的：</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="hobby(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我介绍 -->'+
        '<div class="modal fade" id="rr_name" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我介绍'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div></div>'+
        '姓名：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '<br><br>'+
        '介绍：<input type="text" style="width: 80%; outline: none;  padding-left: 10px;">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="introduce(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 求职意向 -->'+
        '<div class="modal fade" id="rr_jhi" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑求职意向'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '意向岗位：<input type="text"></br></br>'+
        '职业类型：<input type="text"></br></br>'+
        '意向城市：<input type="text"></br></br>'+
        '薪资要求：<input type="text"></br></br>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="jhi(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 教育背景 -->'+
        '<div class="modal fade" id="rr_edu" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑教育背景'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　最高学历：<input type="text">'+
        '　毕业时间：<input type="date"><br><br>'+
        '　毕业院校：<input type="text">'+
        '　所学专业：<input type="text">'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '取消'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="edu(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 工作经历 -->'+
        '<div class="modal fade" id="rr_exp" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑工作经历'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　开始时间：<input type="date">'+
        '　结束时间：<input type="date"><br><br>'+
        '　公司名称：<input type="text">'+
        '　工作岗位：<input type="text"><br><br>'+
        '　工作经历：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="exp(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<!-- 自我评价 -->'+
        '<div class="modal fade" id="rr_self" tModalgerenabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
        '&times;'+
        '</button>'+
        '<h4 class="modal-title" id="myModalLabel">'+
        '编辑自我评价'+
        '</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '　自我评价：<textarea></textarea>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">'+
        '关闭'+
        '</button>'+
        '<button type="button" class="btn btn-primary" onclick="self(this)">'+
        '保存'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>';
        

    function show() {
        // console.log([dom_resume+"0"]);
        if(localStorage["rr-id"]) {
            eval("rr.innerHTML += dom_resume" + localStorage["rr-id"]);
        }
        
        localStorage.setItem("boxh", $("resumeBox").height());
        $("#rr_file").change(preview1);
        $("#info_target").click(showCanvas1);

        var jcrop_api; // 初始化 jcrop API
        var rr_thumbnail = document.getElementById("rr_thumbnail");
        console.log(rr_thumbnail);
        var ct = rr_thumbnail.getContext('2d');
        rr_thumbnail.width = 141;
        rr_thumbnail.height = 192;
        
        userheader.onload = function() { // 头像图片加载时的回调函数
            console.log("width: ", userheader.width, "height: ", userheader.height);
            ct.drawImage(userheader, 0, 0, 141, 192, 0, 0, rr_thumbnail.width, rr_thumbnail.height);
        }
    }

    var userheader = new Image();
    userheader.crossOrigin = "*";

    function showCanvas1() { // 显示图片
        var div = $("#rr_show");
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
            aspectRatio: 5/7,
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
    
    function preview1() { // 点击上传文件控件的回调
        console.log(1);
        var docObj=document.getElementById("rr_file");
        var height = userheader.height;
        
        userheader.src = window.URL.createObjectURL(docObj.files[0]);
         
        setTimeout(function() {
            $("#info_target").trigger("click");
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
    
        rr_thumbnail.width = 141;
        var ct = rr_thumbnail.getContext('2d');
        rr_thumbnail.width = 100;
        if(userheader.width > userheader.height) {
            var prop = 400/userheader.width;
        } else {
            var prop = 300/userheader.height;
        }
    
        ct.drawImage(userheader, c.x/prop, c.y/prop, c.w/prop, c.h/prop, 0, 0, rr_thumbnail.width, rr_thumbnail.height);
    };
    
    function clearCoords() { // 选择框取消时的回调函数
        $('#coords input').val('');
    };

    return {show: show}
}();