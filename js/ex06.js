/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-14 09:54:07
 * @version $Id$
 */
'use strict';
$(init)
function init(){

	//第一题
	$(".cont-fm1-btn").each(function (index, arg) {
		index += 1;
		$(arg).css("background-image", "url('../img/leijun" + index + ".jpg')");
		$(arg).data("image", index);
	});

	$("#cont-fm1-float-wrapper").hide();

	$(".cont-fm1-btn").click(function() {
		var index = $(this).data("image");
		$("#cont-fm1-float-wrapper").fadeIn(800);
		$("#cont-fm1-float-img").css("background-image", "url('../img/leijun" + index + ".jpg')");
		// console.log(index);
	});

	$("#cont-fm1-float-wrapper").click(function() {
		$("#cont-fm1-float-wrapper").fadeOut(800);
	});

	//第二题
	$(".fm2-body").hide();
	$(".fm2-body:eq(0)").fadeIn(300).siblings('.fm2-body').fadeOut(100);
	$(".fm2-nav:eq(0)").css("background","#ccc").siblings('.fm2-nav').css("background","#fff");
	
	$(".fm2-nav").click(function() {
		/* Act on the event */
		var i = $(this).index();
		$(".fm2-body:eq("+ i +")").fadeIn(300).siblings('.fm2-body').fadeOut(100);
		$(".fm2-nav:eq("+ i +")").css("background","#ccc").siblings('.fm2-nav').css("background","#fff");
	});

	//第三题
	$("#fm3-body-add").on('click', function() {
		add();
	});


	$(".fm3-body-del").on('click', function() {
		removeEle(this);
	});
}


function add(){
	var body = $('<div></div>').addClass('fm3-body');
	var index = $('<div></div>').addClass('fm3-body-index');
	var con = $('<div></div>').addClass('fm3-body-con');
	var del = $('<div></div>').addClass('fm3-body-del').append('Delete');
	del.on('click', function() {
		removeEle(this);
	});
	body.append(index).append(con).append(del);
	$("#fm3-body-add").before(body);
	reindex();
}

function reindex(){
	$('.fm3-body-index').each(function(index, ele) {
		$(ele).text(index + 1);
	});	
}

function removeEle(ele){
	$(ele).parent().remove();
	reindex();
}