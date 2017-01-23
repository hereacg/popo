//The Javascript By Alxtit

$("main").slideDown();

$(document).ready(function(){
$(".header_menu").click(function(){
	menu_top.innerHTML=(menu_top.innerHTML=='expand_less'?'menu':'expand_less');
  $("#menu_list").slideToggle("slow");
});
});

$(document).ready(function(){

$(function () {hitokotodata();});
function hitokotodata(){
  $.ajax({

        timeout: 1000,

        async: true,

        type: "GET",

        url: "https://sslapi.hitokoto.cn/",

        dataType: "json",

        success: function (data) {

                $("#hitokoto").html('<p>『'+ data["hitokoto"] +'』-「'+ data["from"] +'」</p>');
				if(data){
				echohitokoto();
				}
        }

    });  
}	

$(function(){rernd()});

function rernd(){
$(".hitokotornd").stop(true,false).animate({width:'100%'},15000, function(){
	$(".header_hitokoto").animate({bottom: '-80px'},1000, function() {
		rernd2();
	});
});
}

function rernd2(){
$(".hitokotornd").stop(true,false).animate({width:'0%'},0, function() {
	hitokotodata();
});
}

function echohitokoto(){
	$(".header_hitokoto").animate({bottom: '0'},1000);
       rernd();
}

});

$(function (){
	$(".header_line").animate({width:'100%'},800);
	$(".htitle").fadeIn(1000);
});