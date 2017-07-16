//плавная анимация перехода к якорям в хедере
$(document).ready(function(){
$("#header").on("click","a", function (event) {
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

//замена содержимого в блока акции

$(document).ready(function(){
	$("#skidka").attr("style","background: #ff6600; color: #fff;");
});

$( "#skidka" ).click(function() {
	$("#skidka").attr("style","background: #ff6600");
	$("#pervvznos").attr("style","background: none");
	$("#stavki").attr("style","background: none");
	$("#zamenaJavascript").html("<h1>Скидка 5%</h1><br><p>При единовременной оплате квартиры Вы можете получить скидку в размере 5% от стоимости</p>")
});

$( "#pervvznos" ).click(function() {
	$("#skidka").attr("style","background: none");
	$("#pervvznos").attr("style","background: #ff6600");
	$("#stavki").attr("style","background: none");
	$("#zamenaJavascript").html("<h1>Первоначальный взнос 0%</h1><br><p>от банков Возрождение Банк, Банк Санкт-Петербург, Альфа Банк, Райффайзен Банк</p>")
});

$( "#stavki" ).click(function() {
	$("#skidka").attr("style","background: none");
	$("#pervvznos").attr("style","background: none");
	$("#stavki").attr("style","background: #ff6600");
  $("#zamenaJavascript").html("<h1>Сниженные ставки по ипотеке от ведущих банков-партнеров</h1><br><p>ПАО «Сбербанк»: ставка 8,7% годовых, первоначальный взнос от 15%, срок кредита 7 лет. ПАО «АК БАРС» Банк: ставка 9,9% годовых, первоначальный взнос от 20%, срок кредита 15 лет. ПАО «Банк «Санкт-Петербург»: ставка 10,5% годовых, первоначальный взнос от 15%, срок кредита 15 лет.ПАО «Промсвязьбанк»: ставка 11,5% годовых, первоначальный взнос от 15%, срок кредита 25 лет</p>")
});

//замена содержимого в блоке слайдер Этапы

$(document).ready(function(){
	$("#pervoch").attr("style","background: #ff6600; color: #fff;");
});

$( "#pervoch" ).click(function() {
	$("#pervoch").attr("style","background: #ff6600; color: #fff;");
	$("#vtoroch").attr("style","background: none; color: #000;");
	$("#zamena-one").attr("src","img/hod_stroitelstva/pervaya_ochered/1oDkq2pBZw8.jpg");
	$("#zamena-two").attr("src","img/hod_stroitelstva/pervaya_ochered/Ga1p0EnsjdA.jpg");
	$("#zamena-three").attr("src","img/hod_stroitelstva/pervaya_ochered/qwx0bMvGSoU.jpg");
	$("#zamena-four").attr("src","img/hod_stroitelstva/pervaya_ochered/yRrVdzc_DF8.jpg");
	$("#zamena-five").attr("src","img/hod_stroitelstva/pervaya_ochered/june2017.jpg");
	$("#zamena-six").attr("src","img/hod_stroitelstva/pervaya_ochered/may2017.jpg");
	$("#zamena-seven").attr("src","img/hod_stroitelstva/pervaya_ochered/april2017.jpg");
	$("#zamena-eight").attr("src","img/hod_stroitelstva/pervaya_ochered/march2017.jpg");
	$("#zamena-nine").attr("src","img/hod_stroitelstva/pervaya_ochered/feb2017.jpg");
	$("#zamena-ten").attr("src","img/hod_stroitelstva/pervaya_ochered/jan2017.jpg");
});

$( "#vtoroch" ).click(function() {
	$("#pervoch").attr("style","background: none; color: #000;");
	$("#vtoroch").attr("style","background: #ff6600; color: #fff;");
	$("#zamena-one").attr("src","img/hod_stroitelstva/vtoraya_ochered/1.jpg");
	$("#zamena-two").attr("src","img/hod_stroitelstva/vtoraya_ochered/2.jpg");
	$("#zamena-three").attr("src","img/hod_stroitelstva/vtoraya_ochered/3.jpg");
	$("#zamena-four").attr("src","img/hod_stroitelstva/vtoraya_ochered/4.jpg");
	$("#zamena-five").attr("src","img/hod_stroitelstva/vtoraya_ochered/5.jpg");
	$("#zamena-six").attr("src","img/hod_stroitelstva/vtoraya_ochered/6.jpg");
	$("#zamena-seven").attr("src","img/hod_stroitelstva/vtoraya_ochered/7.jpg");
	$("#zamena-eight").attr("src","img/hod_stroitelstva/vtoraya_ochered/1.jpg");
	$("#zamena-nine").attr("src","img/hod_stroitelstva/vtoraya_ochered/2.jpg");
	$("#zamena-ten").attr("src","img/hod_stroitelstva/vtoraya_ochered/3.jpg");
});

// Замена содержимого в блоке Способы оплаты
//кнопки
// ipotekaknopka
// stoproplata
// matkapital
// voenipoteka
// subsidii

// //elementi
// zamena-oplata-zagolovok
// zamena-oplata-carousel
// vznos
// zamena-klassa-bloka-one
// zamena-klassa-bloka-two
// zamena-klassa-bloka-three
// zamena-klassa-bloka-four



$( "#stoproplata" ).click(function() {
	$("#zamena-oplata-zagolovok").html("100% ОПЛАТА");
	$("#zamena-oplata-carousel").attr("style","display:none");
	$("#vznos").attr("style","display:none");
	$("#zamena-klassa-bloka-one").attr("style","display:none");
	$("#zamena-klassa-bloka-two").attr("class","col-md-4");
	$("#zamena-klassa-bloka-three").attr("class","col-md-4");
	$("#zamena-klassa-bloka-four").attr("class","col-md-4");
});

$( "#matkapital" ).click(function() {
	$("#zamena-oplata-zagolovok").html("МАТЕРИНСКИЙ КАПИТАЛ");
	$("#zamena-oplata-carousel").attr("style","display:none");
	$("#vznos").attr("style","display:none");
	$("#zamena-klassa-bloka-one").attr("style","display:none");
	$("#zamena-klassa-bloka-two").attr("class","col-md-4");
	$("#zamena-klassa-bloka-three").attr("class","col-md-4");
	$("#zamena-klassa-bloka-four").attr("class","col-md-4");
});

$( "#voenipoteka" ).click(function() {
	$("#zamena-oplata-zagolovok").html("ВОЕННАЯ ИПОТЕКА");
	$("#zamena-oplata-carousel").attr("style","display:none");
	$("#vznos").attr("style","display:none");
	$("#zamena-klassa-bloka-one").attr("style","display:none");
	$("#zamena-klassa-bloka-two").attr("class","col-md-4");
	$("#zamena-klassa-bloka-three").attr("class","col-md-4");
	$("#zamena-klassa-bloka-four").attr("class","col-md-4");
});

$( "#subsidii" ).click(function() {
	$("#zamena-oplata-zagolovok").html("СУБСИДИИ");
	$("#zamena-oplata-carousel").attr("style","display:none");
	$("#vznos").attr("style","display:none");
	$("#zamena-klassa-bloka-one").attr("style","display:none");
	$("#zamena-klassa-bloka-two").attr("class","col-md-4");
	$("#zamena-klassa-bloka-three").attr("class","col-md-4");
	$("#zamena-klassa-bloka-four").attr("class","col-md-4");
});

$( "#ipotekaknopka" ).click(function() {
	$("#zamena-oplata-zagolovok").html("УЗНАЙТЕ СУММУ ЕЖЕМЕСЯЧНОГО ПЛАТЕЖА ПРИ ПОКУПКЕ В ИПОТЕКУ");
	$("#zamena-oplata-carousel").attr("style","display:block");
	$("#vznos").attr("style","display:block");
	$("#zamena-klassa-bloka-one").attr("style","display:block");
	$("#zamena-klassa-bloka-two").attr("class","col-md-3");
	$("#zamena-klassa-bloka-three").attr("class","col-md-3");
	$("#zamena-klassa-bloka-four").attr("class","col-md-3");
});

// Разрешение прокрутки фрейма после нажатия
$(document).ready(function(){
	$('.overlay').click(function() {
		$(this).remove();
	});
});