
//Плавный скролл для всех ссылок А

$(document).ready(function() {
$('a[href^="#"]').click(function(){
var el = $(this).attr('href');
$('body').animate({
scrollTop: $(el).offset().top}, 1000);
return false;
});
});

// Скролл 200пикс

$(document).ready(function() {
    $('.scrolldvesti').fadeTo( 1, 0.01);
});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 200) {
	 $(".scrolldvesti").fadeTo( "slow", 1);}
		 
      
   });

});

// Скролл 300

$(document).ready(function() {
    $('.scrolltrista').fadeTo( 1, 0.01);
});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 300) {
	 $(".scrolltrista").fadeTo( "slow", 1);}
		 
      
   });

});

// Скролл 500

$(document).ready(function() {
    $('.scrollp').fadeTo( 1, 0.01);
});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 500) {
	 $(".scrollp").fadeTo( "slow", 1);}
		 
      
   });

});

// Скролл 600

$(document).ready(function() {
    $('.scrollb').fadeTo( 1, 0.01);
});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 600) {
	 $(".scrollb").fadeTo( "slow", 1);}
		 
      
   });

});

// Скролл 800

$(document).ready(function() {
    $('#howiamworking h1').fadeTo( 1, 0.01);
});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 800) {
	 $("#howiamworking h1").fadeTo( "slow", 1);}
		 
      
   });

});

// Скролл 1000 c задержкой

$(document).ready(function() {
    $('#elone,#eltwo,#elthree,#elfour,#elfive').fadeTo( 1, 0.01);
});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 1000) {
	 $("#elone").fadeTo( "slow", 1);
	 $("#eltwo").delay(600).fadeTo( "slow", 1);
	 $("#elthree").delay(1200).fadeTo( "slow", 1);
	 $("#elfour").delay(1800).fadeTo( "slow", 1);
	 $("#elfive").delay(2400).fadeTo( "slow", 1);
	 }
		 
      
   });

});

//Cкролл 1300

$(document).ready(function() {
    $('#contactme h1').fadeTo( 1, 0.01);
});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 1300) {
	 $("#contactme h1").fadeTo( "slow", 1);}
		 
      
   });

});

//Cкролл 1500

$(document).ready(function() {
    $('#contactme .container-fluid').fadeTo( 1, 0.01);
});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 1500) {
	 $("#contactme .container-fluid").fadeTo( "slow", 1);}
		 
      
   });

});