if ($(window).width() > 750) {



(function($) {
$(function() {

  $('#up').click(function() {
    $('html, body').animate({scrollTop: 0},500);
    return false;
  })

})
})(jQuery)

$(document).ready(function(){
$("#menu").on("click","a", function (event) {
//отменяем стандартную обработку нажатия по ссылке
event.preventDefault();
//забираем идентификатор бока с атрибута href
var id  = $(this).attr('href'),
//узнаем высоту от начала страницы до блока на который ссылается якорь
top = $(id).offset().top;
//анимируем переход на расстояние - top за 1500 мс
$('body,html').animate({scrollTop: top}, 1000);
});
});

$(document).ready(function(){
$(window).scroll(function(){
var bo = $(this).scrollTop();
var a = $("#hid").css('opacity')
$("#hid").html(bo);
if ( bo >= 1000 && a == 0) {$("#hid").stop().animate({'opacity':'1'},500)};
if ( bo < 1000 && a == 1) {$("#hid").stop().animate({'opacity':'0'},500)};
    })
    })


$(document).ready(function(){
$(window).scroll(function() {
     if ($(this).scrollTop() > 300) {
	 $("#whatIcan").animate({left:360},500);}
		 
      
   });

});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 700) {
	 $("#primery").animate({left:255},500);}
		 
      
   });

});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 1200) {
	 $("#contactBut").animate({left:230},500);}
		 
      
   });

});

$(document).ready(function() {
    $('#myPhoto').fadeOut(1);
});

$(document).ready(function() {
    $('#myPhoto').fadeIn(3000);
});

$(document).ready(function() {
    $('#privet').fadeOut(1);
});

$(document).ready(function() {
    $('#privet').fadeIn(1000);
});

$(document).ready(function() {
    $('#poskolku').fadeOut(1);
});

$(document).ready(function() {
    $('#poskolku').fadeIn(1000);
});

//--------------------------------------------------------------------анимация фишек - пропажа
$(document).ready(function() {
    $('.htmlh').fadeOut(1);
});

$(document).ready(function() {
    $('.cssh').fadeOut(1);
});

$(document).ready(function() {
    $('.jsh').fadeOut(1);
});

$(document).ready(function() {
    $('.sassh').fadeOut(1);
});

$(document).ready(function() {
    $('.hostingh').fadeOut(1);
});

$(document).ready(function() {
    $('.railsh').fadeOut(1);
});

$(document).ready(function() {
    $('.wph').fadeOut(1);
});

$(document).ready(function() {
    $('.seoh').fadeOut(1);
});
//--------------------------------------------------------------------анимация фишек - появление
$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 400) {
	 $(".htmlh").fadeIn(1000);}
		 
      
   });

});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 400) {
	 $(".cssh").fadeIn(1000);}
		 
      
   });

});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 400) {
	 $(".jsh").fadeIn(1000);}
		 
      
   });

});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 400) {
	 $(".sassh").fadeIn(1000);}
		 
      
   });

});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 400) {
	 $(".hostingh").fadeIn(1000);}
		 
      
   });

});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 400) {
	 $(".seoh").fadeIn(1000);}
		 
      
   });

});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 400) {
	 $(".railsh").fadeIn(1000);}
		 
      
   });

});
$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 400) {
	 $(".wph").fadeIn(1000);}
		 
      
   });

});

}