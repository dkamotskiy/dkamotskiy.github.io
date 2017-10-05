// прилипание меню
$(function(){
 $(window).scroll(function() {
 if($(this).scrollTop() >= 760) {
 $('#menu').addClass('stickytop');
 }
 else{
 $('#menu').removeClass('stickytop');
 }
 });
});
$(function(){
 $(window).scroll(function() {
 if($(this).scrollTop() >= 560) {
 $('#menu-adaptive').addClass('stickytop');
 }
 else{
 $('#menu-adaptive').removeClass('stickytop');
 }
 });
});
// якори
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top-120;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
$(document).ready(function(){
	$("#menu-adaptive").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top-130;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});