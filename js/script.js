// Инициализация свайпа каруселей----------------------------------
// $('.jcarousel')
//     .jcarousel()       // init jcarousel
//     .jcarouselSwipe(); // init jcarouselSwipe
$(document).ready(function(){
      $('.single-item').slick({
        swipe: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: true
      });
    });
// Маска-----------------------------------------------------------
jQuery(function($){
   $("#phone-form").mask("+7 (999) 999-9999");
});
// Кнопка хедера---------------------------------------------------
$(document).ready(function(){
$( ".hamburger" ).click(function() {
    $(this).toggleClass("is-active");
});  
});
// Появление меню при скролле вверх--------------------------------
$(document).ready(function() {
	
	var header = $("header"); // Меню
	var scrollPrev = 0 // Предыдущее значение скролла
	
	$(window).scroll(function() {
		var scrolled = $(window).scrollTop(); // Высота скролла в px
		var firstScrollUp = false; // Параметр начала сколла вверх
		var firstScrollDown = false; // Параметр начала сколла вниз
		
		// Если скроллим
		if ( scrolled > 0 ) {
			// Если текущее значение скролла > предыдущего, т.е. скроллим вниз
			if ( scrolled > scrollPrev ) {
				firstScrollUp = false; // Обнуляем параметр начала скролла вверх
				// Если меню видно
				if ( scrolled < header.height() + header.offset().top ) {
					// Если только начали скроллить вниз
					if ( firstScrollDown === false ) {
						var topPosition = header.offset().top; // Фиксируем текущую позицию меню
						header.css({
							"top": topPosition + "px"
						});
						firstScrollDown = true;
					}
					// Позиционируем меню абсолютно
					header.css({
						"position": "absolute"
					});
				// Если меню НЕ видно
				} else {
					// Позиционируем меню фиксированно вне экрана
					header.css({
						"position": "fixed",
						"top": "-" + header.height() + "px"
					});
				}
				
			// Если текущее значение скролла < предыдущего, т.е. скроллим вверх
			} else {
				firstScrollDown = false; // Обнуляем параметр начала скролла вниз
				// Если меню не видно
				if ( scrolled > header.offset().top ) {
					// Если только начали скроллить вверх
					if ( firstScrollUp === false ) {
						var topPosition = header.offset().top; // Фиксируем текущую позицию меню
						header.css({
							"top": topPosition + "px"
						});
						firstScrollUp = true;
					}
					// Позиционируем меню абсолютно
					header.css({
						"position": "absolute"
					});
				} else {
					// Убираем все стили
					header.removeAttr("style");
				}
			}
			// Присваеваем текущее значение скролла предыдущему
			scrollPrev = scrolled;
		}	
	});			
});
// Разворот текста-----------------------------
var maxc = 200,
    crop = '<span class="crop">...</span>';
$('.process .text').each(function(){
  var text = $(this),
      html = text.html(),
      html_hide = '<span class="hide">' + html.substring(maxc) + '</span>',
      html_show = '<span class="show">' + html.substring(0, maxc) + '</span>';
  text.html(html_show + crop + html_hide);
});
$('.process .row button').click(function(){
  $(".show").parent('.process .text').addClass('more');
  $(this).css("display", "none");
});

var maxc = 200,
    crop = '<span class="crop">...</span>';
$('.uslugi .text').each(function(){
  var text = $(this),
      html = text.html(),
      html_hide = '<span class="hide">' + html.substring(maxc) + '</span>',
      html_show = '<span class="show">' + html.substring(0, maxc) + '</span>';
  text.html(html_show + crop + html_hide);
});
$('.uslugi button').click(function(){
  $(".show").parent('.uslugi .text').addClass('more');
  $(".uslugi").css("padding-bottom", "30px");
  $(this).css("display", "none");
});

var maxc = 150,
    crop = '<span class="crop">...</span>';
$('.result .text').each(function(){
  var text = $(this),
      html = text.html(),
      html_hide = '<span class="hide">' + html.substring(maxc) + '</span>',
      html_show = '<span class="show">' + html.substring(0, maxc) + '</span>';
  text.html(html_show + crop + html_hide);
});
$('.result button').click(function(){
  $(".show").parent('.result .text').addClass('more');
  $(".result").css("padding-bottom", "30px");
  $(this).css("display", "none");
});

var maxc = 150,
    crop = '<span class="crop">...</span>';
$('.feedbackn .text').each(function(){
  var text = $(this),
      html = text.html(),
      html_hide = '<span class="hide">' + html.substring(maxc) + '</span>',
      html_show = '<span class="show">' + html.substring(0, maxc) + '</span>';
  text.html(html_show + crop + html_hide);
});
$('.feedbackn button').click(function(){
  $(".show").parent('.feedbackn .text').addClass('more');
  $(".feedbackn").css("padding-bottom", "30px");
  $(".feedbackn p").css("padding-bottom", "15px");
  $(this).css("display", "none");
});

var maxc = 150,
    crop = '<span class="crop">...</span>';
$('.krutoy .text').each(function(){
  var text = $(this),
      html = text.html(),
      html_hide = '<span class="hide">' + html.substring(maxc) + '</span>',
      html_show = '<span class="show">' + html.substring(0, maxc) + '</span>';
  text.html(html_show + crop + html_hide);
});
$('.krutoy button').click(function(){
  $(".show").parent('.krutoy .text').addClass('more');
  $(this).css("display", "none");
});
// Запрет прокрутки-----------------------------
$('#header-menu').on('show.bs.collapse', function () {
  $("body").css("overflow", "hidden");
  $("#nelogop").html("Закрыть");
})
$('#header-menu').on('hidden.bs.collapse', function () {
  $("body").css("overflow", "auto");
  $("#nelogop").html("МЕНЮ");
})
// Сосоеп-----------------------------------------
$('.cocoen').cocoen();
// Всплытие окна "Спасибо за заявку"--------------
$(document).ready(function(){
$('#uznat button').click(function() {
    if($(this).hasClass("disabled"))
        {}
    else {
    $('#uznat').modal('hide');
    $("body").attr("style","padding-right:0px");
    $('#spasibo').modal('show');
      window.setTimeout(function(){
     $('#spasibo').modal('hide');
  }, 4000);
    }
});
});
// Переключения этапов боковыми кнопками---------
$(document).ready(function(){
$( ".cb1 .after" ).click(function() {
     $('#collapseTwo').collapse('show'); 
});  
});
$(document).ready(function(){
$( ".cb2 .after" ).click(function() {
     $('#collapseThree').collapse('show'); 
});  
});
$(document).ready(function(){
$( ".cb3 .after" ).click(function() {
     $('#collapseFour').collapse('show'); 
});  
});
$(document).ready(function(){
$( ".cb4 .after" ).click(function() {
     $('#collapseFive').collapse('show'); 
});  
});
$(document).ready(function(){
$( ".cb5 .after" ).click(function() {
     $('#collapseSix').collapse('show'); 
});  
});

$(document).ready(function(){
$( ".cb2 .before" ).click(function() {
     $('#collapseOne').collapse('show'); 
});  
});
$(document).ready(function(){
$( ".cb3 .before" ).click(function() {
     $('#collapseTwo').collapse('show'); 
});  
});
$(document).ready(function(){
$( ".cb4 .before" ).click(function() {
     $('#collapseThree').collapse('show'); 
});  
});
$(document).ready(function(){
$( ".cb5 .before" ).click(function() {
     $('#collapseFour').collapse('show'); 
});  
});
$(document).ready(function(){
$( ".cb6 .before" ).click(function() {
     $('#collapseFive').collapse('show'); 
});  
});
// Нажатие на пункт меню "Контакты"
$(document).ready(function(){
$( "#contacts-link" ).click(function() {
     $('#header-menu').collapse('hide'); 
     $(".hamburger").toggleClass("is-active");
});  
});
$(document).ready(function(){
  $("#header-menu").on("click","a#contacts-link", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
});