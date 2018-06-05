var jcrop_api;

function aaa() {
	var div = $("#ss");
	div.empty();
	var pop = kirito.width/kirito.height;
	var rest;
	div.append("<canvas id='k'></canvas>");
	var k = document.getElementById("k");
	var kc = k.getContext('2d');
	if(kirito.width > kirito.height) {
		k.width = 400;
		k.height = 400/pop;
		rest = (300 - k.height)/2;
		
		
	} else {
		k.width = 300*pop;
		k.height = 300;
		rest = (400 - k.width)/2;
		
	}
	kc.drawImage(kirito, 0, 0, kirito.width, kirito.height, 0, 0, k.width, k.height);

	$('#k').Jcrop({
		aspectRatio: 1,
		onChange:   showCoords,
		onSelect:   showCoords,
		onRelease:  clearCoords
	},function(){
		jcrop_api = this;
		if(kirito.width > kirito.height) {
			$(".jcrop-holder").css("margin-top", rest);
		} else {
			$(".jcrop-holder").css("margin-left", rest);
		}
	});
	
}


function setImagePreview() {
	var docObj=document.getElementById("doc");
	$("#cf").empty();
	$("#cf").append('<canvas id="canvas"></canvas>');
	var height = kirito.height;
	
	kirito.src = window.URL.createObjectURL(docObj.files[0]);
	 
	// src = window.URL.createObjectURL(docObj.files[0]);
	// docObj.select(); src  = document.selection.createRange().text;
	// try{
	// 	localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
	// 	localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
	// }
	// catch(e) {
	// 	alert("您上传的图片格式不正确，请重新选择!");
	// 	return false;
	// }
	setTimeout(function() {
		var first = document.getElementById("aaa");
		// IE
		if(document.all) {
			first.click();
		}
		// 其它浏览器
		else {
			var e = document.createEvent("MouseEvents");
			e.initEvent("click", true, true);
			first.dispatchEvent(e);
		}
	},100);

	console.log(kirito);
	return true;
}

$('#coords').on('change','input',function(e){
	var x1 = $('#x1').val(),
		x2 = $('#x2').val(),
		y1 = $('#y1').val(),
		y2 = $('#y2').val();
	jcrop_api.setSelect([x1,y1,x2,y2]);
	
});

function showCoords(c) {
	$('#x1').val(c.x);
	$('#y1').val(c.y);
	$('#x2').val(c.x2);
	$('#y2').val(c.y2);
	$('#w').val(c.w);
	$('#h').val(c.h);

	canvas2.width = 100;
	var prop = 400/kirito.width;

	context2.drawImage(kirito, c.x/prop, c.y/prop, c.w/prop, c.h/prop, 0, 0, canvas2.width, canvas2.height);
};

function clearCoords() {
	$('#coords input').val('');
};

var canvas2 = document.getElementById("canvas2");
var context2 = canvas2.getContext('2d');
canvas2.width = 100;
canvas2.height = 100;

var kirito = new Image();
kirito.crossOrigin = "*";
kirito.src = "./images/1.jpg";

kirito.onload = function() {
	console.log("width: ", kirito.width, "height: ", kirito.height);
	context2.drawImage(kirito, 0, 0, 100, 100, 0, 0, canvas2.width, canvas2.height);

	// sx,xy 绘制起始区域, sw,sh绘制区域宽高, dx,dy 图像在 canvas 中的坐标,dw,dh canvas 中绘制的大小 
	// canvas.width = canvas.width; 清空画布
	// context.drawImage(kirito, 300, 300, 600, 800, 0, 0, 30, 40); 重绘
	//var dataUrl = canvas.toDataURL("image/jpg", 0.8);
	// console.log(dataUrl);       
}

function aa() {
	console.log(canvas2.toDataURL("image/png"));
}