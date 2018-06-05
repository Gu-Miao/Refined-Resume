var c_tip = function() {
    var dom_tip = '<div id="tip">'+
        '<div class="tipt">@小贴士</div>'+
        '<div class="panel-group colbox" id="accordion">'+
        '<div class="panel panel-default">'+
        '<div class="panel-heading">'+
        '<h4 class="panel-title">'+
        '<a data-toggle="collapse" data-parent="#accordion" onclick="tipCollapse()" id="tip1">'+
        '头像'+
        '</a>'+
        '</h4>'+
        '</div>'+
        '<div id="collapseOne" class="panel-collapse collapse in">'+
        '<div class="panel-body">'+
        '<p class="colt">* 简历上必须放照片吗</p>'+
        '<p>此为非必选项，但如果放上去的话请务必让它成为加分项，毕竟这个看脸的世界越来越没有道理可言了，如果翻遍电脑和手机都没有找到一张可以称得上有气质的照片，那还是别放了。</p>'+
        '<p class="colt">* 照片的标准和规范</p>'+
        '<p>建议使用1-6个月的近期免冠照片，男性请至少干净整洁，不要显得油腻，女生可化淡妆，正常的生活/工作照也可，表情动作大方自然，背景清新简洁的正脸半身照为佳</p>'+     
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="panel panel-default">'+
        '<div class="panel-heading">'+
        '<h4 class="panel-title">'+
        '<a data-toggle="collapse" data-parent="#accordion" onclick="tipCollapse()" id="tip2">'+
        '基本信息'+
        '</a>'+
        '</h4>'+
        '</div>'+
        '<div id="collapseTwo" class="panel-collapse collapse">'+
        '<div class="panel-body">'+
        '<p class="colt">* 姓名</p>'+
        '<p>如果有常用英文名，可以在中文名后面写在括号里，如：李娜（Abby）<br>没有常用英文名的话，则不建议专门为了工作而取名，否则面试时对方喊你却没有反应，可能会留下负面印象。</p>'+
        '<p class="colt">* 所在城市</p>'+
        '<p>如目前所处城市跟意向工作城市有出入的话，会影响HR的面试邀约决策，为了提升双方沟通效率，建议填写，如往来意向城市很方便或短期内会搬过去居住，注明即可。</p>'+
        '<p class="colt">* 电话号码</p>'+
        '<p>建议写成易于拨打的形式，如：185-5555-5555如果是英文简历，则建议加上区号，如：+86-10-12308</p>'+
        '<p class="colt">* 联系邮箱</p>'+
        '<p>国内求职推荐使用@163/@sina/@qq等主流邮箱，国外或外企求职推荐使用@gmail等邮箱（qq邮箱很无辜，不要有偏见）<br><br>注意检查邮箱的显示名称，火星文、昵称、出生日期等会显得不够专业，建议使用的“名字”或“名字+当前求职年份”来命名。 （如：lina_Abby@gmail.com，lina2017@163.com）</p>'+       
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="panel panel-default">'+
        '<div class="panel-heading">'+
        '<h4 class="panel-title">'+
        '<a data-toggle="collapse" data-parent="#accordion" onclick="tipCollapse()" id="tip3">'+
        '求职意向'+
        '</a>'+
        '</h4>'+
        '</div>'+
        '<div id="collapseThree" class="panel-collapse collapse">'+
        '<div class="panel-body">'+
        '<p class="colt">* 求职意向规范</p>'+
        '<p>如四大、国有银行等在招聘信息中不分具体职能部门的话，可以不写求职意向。<br><br>　　如需要填写求职意向，则建议一份简历只针对一个意向岗位。</p>'+
        '<p class="colt">* 推荐写法</p>'+
        '<p>精准的职位名称/行业+职位名称，如：<br><br>'+
        '网易游戏_泛娱乐运营策划<br><br>'+
        '人事专员/人力资源相关岗位<br><br>'+
        '食品领域销售类岗位<br><br>'+
        '机械行业商务谈判岗<br><br>'+
        '注意：求职意向是整张简历的核心，千万不要觉得面对不同企业和岗位，改个求职意向就可以海投了，求职意向和简历内容一定要相互呼应，才能最好的展现自己的岗位匹配度。</p>'+
        '<p class="colt">* 职业类型</p>'+
        '<p>毕业了原则上不能再申请实习生的岗位，<br><br>'+
        '实习只有在校生可以申请，有可能转正。<br><br>'+
        '兼职可以是在校生也可以是职场人，是指在不脱离本职工作（或学习）的前提下，利用业余时间从事第二职业，以获得利益。</p>'+
        '<p class="colt">* 意向城市</p>'+
        '<p>若某企业针对同一岗位在多个地区均设有招聘，那么意向城市就一定要写清楚，免得被调岗后又不愿意前往。<br><br>'+
        '写明意向城市也能表明自己在投递简历前对目标企业有了一定了解，且表现了自己强烈的求职意愿。</p>'+
        '<p class="colt">* 入职时间</p>'+
        '<p>离职前，试用期员工须提前3天告知企业，正式员工则需提前一个月告知，求职者根据自身情况如实填写即可。<br><br>'+
        '面试官会根据岗位的实际用人情况合理参考求职者的到岗时间，相比此项，工作经验更重要。</p>'+
        '<p class="colt">* 期望薪资  </p>'+
        '<p>应对这问题的原则其实很简单——说出一个合理范围内最高的待遇水平就好，这样的“最高”并不会被认为是傲慢。<br><br>'+
        '给出高目标会将别人的注意力集中于你的优点——为什么值这个价，反之低报价则会令人注意你的瑕疵。其次，高报价的同事也为自己流出了充足的艺家空间，更有可能得到真正想要的结果。<br><br>'+
        '</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="panel panel-default">'+
        '<div class="panel-heading">'+
        '<h4 class="panel-title">'+
        '<a data-toggle="collapse" data-parent="#accordion" onclick="tipCollapse()" id="tip4">'+
        '教育背景'+
        '</a>'+
        '</h4>'+
        '</div>'+
        '<div id="collapseFour" class="panel-collapse collapse">'+
        '<div class="panel-body">'+
        '<p class="colt">* 教育背景</p>'+
        '<p>尽量简洁，突出重点<br><br>'+
        '注意：工作年限较多或成绩自认不够优异，则可以直接将教育背景清晰罗列后，重点丰富其他模块</p>'+     
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="panel panel-default">'+
        '<div class="panel-heading">'+
        '<h4 class="panel-title">'+
        '<a data-toggle="collapse" data-parent="#accordion" onclick="tipCollapse()" id="tip5">'+
        '工作经历'+
        '</a>'+
        '</h4>'+
        '</div>'+
        '<div id="collapseFive" class="panel-collapse collapse">'+
        '<div class="panel-body">'+
        '<p class="colt">* 工作经验</p>'+
        '<p>可填信息：<br><br>'+
        '　工作起止日期/所在公司名称/职位/工作描述（侧重描述自己负责的工作）/工作成果<br><br>'+
        '工作经验的时间采取倒叙形式，最近经历写在前面；<br><br>'+
        '工作经验的描述与目标岗位的招聘要求尽量匹配，用词精准；<br><br>'+
        '工作成果尽量以数据来呈现，突出个人成果以及做出的贡献；<br><br>'+
        '描述尽量具体简洁。<br><br>'+
        '可对企业进行简短介绍，如：XX行业第二大XX企业，核心产品包括XX / XX行业领军企业，拥有X个分公司和X名员工 / XX领域X轮创业公司，主要产品是XXX，拥有X用户'+
        '</p>'+
        '<p class="colt">* 写法示例</p>'+
        '<p>2007.04-2011.12<br>'+
        '　XXXX公司<br>'+
        '　经营部经理<br><br>'+
        '● 管理范围：全面负责公司业务方面的所有工作和本部门20余人的综合管理工作；<br><br>'+
        '● 销售目标：对总经理制定的销售目标负责，实现年国外销售额1.5亿元；<br><br>'+
        '● 市场工作：负责市场情况、竞争者情况的调研，负责展会布置、营销策划、媒体宣传等市场工作；<br><br>'+
        '● 销售工作：负责具体的渠道开发、商务洽谈、客户维护、销售流程的管理；<br><br>'+
        '● 团队管控：负责下属团队20余人的综合管理工作，包含员工培养、任务分解跟踪管理等；<br><br>'+
        '● 其他业绩：开拓了印度孟加拉越南日本荷兰等多个渠道，为此产生了年均1亿多元的销售额；<br><br>'+
        '做好客户维护工作，客户稳定率达90%。</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="panel panel-default">'+
        '<div class="panel-heading">'+
        '<h4 class="panel-title">'+
        '<a data-toggle="collapse" data-parent="#accordion" onclick="tipCollapse()" id="tip6">'+
        '兴趣爱好'+
        '</a>'+
        '</h4>'+
        '</div>'+
        '<div id="collapseSix" class="panel-collapse collapse">'+
        '<div class="panel-body">'+
        '<p class="colt">* 兴趣爱好</p>'+
        '<p>有特点、能够体现自身性格及能力与目标岗位相符的兴趣爱好可以写。</p>'+             
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="panel panel-default">'+
        '<div class="panel-heading">'+
        '<h4 class="panel-title">'+
        '<a data-toggle="collapse" data-parent="#accordion" onclick="tipCollapse()" id="tip7">'+
        '技能特长'+
        '</a>'+
        '</h4>'+
        '</div>'+
        '<div id="collapseSeven" class="panel-collapse collapse">'+
        '<div class="panel-body">'+
        '<p class="colt">* 技能特长</p>'+
        '<p>行业中需要的技能和各类证书，如<br><br>'+
        '英语技能：CET，托福，雅思，口译证书，专八等行业相关证书等；<br><br>'+
        '专业技能：计算机等级考试证书，JAVA，C++，j2ee，mysql，maven，git，ant等；<br><br>'+
        '个人素质方面的软实力，如：演讲与口才，组织与协调，客户接待，商务谈判等。<br><br>'+
        '注意：<br><br>'+
        '如果目标岗位的招聘信息对技能证书有要求，一定要写。'+
        '</p>'+  
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="panel panel-default">'+
        '<div class="panel-heading">'+
        '<h4 class="panel-title">'+
        '<a data-toggle="collapse" data-parent="#accordion" onclick="tipCollapse()" id="tip8">'+
        '自我评价'+
        '</a>'+
        '</h4>'+
        '</div>'+
        '<div id="collapseEight" class="panel-collapse collapse">'+
        '<div class="panel-body">'+
        '<p class="colt">* 自我评价</p>'+
        '<p>篇幅不要太长，注意结合简历整体的美观度，如果真的有很多话要说，建议以求职信的形式附上。<br><br>'+
        '（求职信是求职者向目标用人单位或单位领导人介绍自己的实际才能、表达自己就业愿望的一种书信，是简历之外的加分项，通常与简历一起投递。）<br><br>'+
        '注意：<br><br>'+
        '自我评价应做到突出自身符合目标岗位要求的“卖点”；<br><br>'+
        '避免过多使用形容词，而应该通过数据及实例来对自身价值进行深化。</p>'+
        '<p class="colt">* 推荐写法</p>'+
        '<p>首先，解释一下自己为什么要来应聘这个职位，表示自己的强烈意愿；<br><br>'+
        '　然后，阐明一下你能为这家企业创造哪些价值；<br><br>'+
        '　最后，总结一下自己在过往工作中做了什么，用数据简略地展示自己的成绩，强调自己的工作能力。'+
        '</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>';

    function show() {
        rr.innerHTML += dom_tip;
    }

    return {show: show};
}();