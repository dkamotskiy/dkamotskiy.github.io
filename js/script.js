document.write("<script src='js/jQuery.scrollSpeed.js' type='text/javascript' charset='utf-8'></s"+"cript>");
//GoogleMap--------------------------------------------------------------------------
                                    function initMap() {
                    var uluru = {lat: 54.744494, lng: 55.997060};

                    var map = new google.maps.Map(document.getElementById('map'), {
                      zoom: 15,
                      center: uluru,
                      scrollwheel: false,
                      minZoom: 10,
                      
            disableDefaultUI: true,
                    });
                    var image = 'img/marker.png';
                    var marker = new google.maps.Marker({
                      position: uluru,
                      map: map,
                      icon: image
                    });

                  }
// Увеличение чисел на странице "Бассейны"
// $(document).ready(function(){
//     var show = true;
//     var countbox = ".proizvodstvo";
//     $(window).on("scroll load resize", function(){
 
//         if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
 
//         var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
//         var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
 
//         var w_height = $(window).height();        // Высота окна браузера
//         var d_height = $(document).height();      // Высота всего документа
 
//         var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
 
//         if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
//             $(".spincrement").spincrement({
//                 thousandSeparator: "",
//                 duration: 2200
//             });
 
//             show = false;
//         }
//     });
// });
// Анимация фишек в разделе "Этапы"
// $(document).ready(function(){
//     var show = true;
//     var countbox = ".etapy-rabot";
//     $(window).on("scroll load resize", function(){
 
//         if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
 
//         var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
//         var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
 
//         var w_height = $(window).height();        // Высота окна браузера
//         var d_height = $(document).height();      // Высота всего документа
 
//         var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
 
//         if(w_top + 400 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
//             $('#animate-1').addClass('animated flipInX'); 
//   $('#animate-text-1').addClass('animated zoomIn'); 
//   $('#animate-2').css('animation-delay', '1s').addClass('animated flipInX'); 
//   $('#animate-text-2').css('animation-delay', '1s').addClass('animated zoomIn'); 
//   $('#animate-3').css('animation-delay', '2s').addClass('animated flipInX'); 
//    $('#animate-text-3').css('animation-delay', '2s').addClass('animated zoomIn'); 
//   $('#animate-4').css('animation-delay', '3s').addClass('animated flipInX'); 
//    $('#animate-text-4').css('animation-delay', '3s').addClass('animated zoomIn'); 
//         }
//     });
// });
// Появление левой кнопки--------------------------------------------------------------------------
$(document).ready(function(){
  $(".latest-works .jcarousel-control-prev").attr("style","display:none");
$( ".latest-works .jcarousel-control-next" ).click(function() {
    $(".latest-works .jcarousel-control-prev").attr("style","display:block");
});  
});
$(document).ready(function(){
  $(".novosti .jcarousel-control-prev").attr("style","display:none");
$( ".novosti .jcarousel-control-next" ).click(function() {
    $(".novosti .jcarousel-control-prev").attr("style","display:block");
});  
});
$(document).ready(function(){
  $(".dealers .jcarousel-control-prev").attr("style","display:none");
$( ".dealers .jcarousel-control-next" ).click(function() {
    $(".dealers .jcarousel-control-prev").attr("style","display:block");
});  
});
$(document).ready(function(){
  $(".docs .jcarousel-control-prev").attr("style","display:none");
$( ".docs .jcarousel-control-next" ).click(function() {
    $(".docs .jcarousel-control-prev").attr("style","display:block");
});  
});
$(document).ready(function(){
  $(".talking-about-us .jcarousel-control-prev").attr("style","display:none");
$( ".talking-about-us .jcarousel-control-next" ).click(function() {
    $(".talking-about-us .jcarousel-control-prev").attr("style","display:block");
});  
});
// Маска-----------------------------------------------------------

jQuery(function($){
   $("#phone-form").mask("+7 (999) 999-9999");
});
jQuery(function($){
   $("#phone-form2").mask("+7 (999) 999-9999");
});

// Нажатия на блоке "Этапы"--------------------------------------

$(function() {
    if($(window).width()>992) {
        $(document).ready(function(){
        $(".etap-selector").click(function() {
            $('.etap-zagolovok').css("display","none");
            $('.etap-time span').css("display","none");
            $('.etap-text').css("display","none");
            $('.etap-img').css("display","none");
            $('.etap-promyvka').css("display","none");
            $('.etap-selector').removeClass("active");
            $(this).addClass("active");
        });  
        });
        $(document).ready(function(){
        $(".etap-selector1").click(function() {
            $('.etap1').css("display","inline-block");
        });  
        });
        $(document).ready(function(){
        $(".etap-selector2").click(function() {
            $('.etap2').css("display","inline-block");
        });  
        });
        $(document).ready(function(){
        $(".etap-selector3").click(function() {
            $('.etap3').css("display","inline-block");
        });  
        });
        $(document).ready(function(){
        $(".etap-selector4").click(function() {
            $('.etap4').css("display","inline-block");
        });  
        });
        $(document).ready(function(){
        $(".etap-selector5").click(function() {
            $('.etap5').css("display","inline-block");
        });  
        });
        $(document).ready(function(){
        $(".etap-selector6").click(function() {
            $('.etap6').css("display","inline-block");
        });  
        });
        $(document).ready(function(){
        $(".etap-selector7").click(function() {
            $('.etap7').css("display","inline-block");
        });  
        });
        $(document).ready(function(){
        $(".etap-selector8").click(function() {
            $('.etap8').css("display","inline-block");
        });  
        });
    }
}); 

// Те же нажатия, только на мобилке

$(function() {
    if($(window).width()<992) {
        $(document).ready(function(){
        $(".etap-selector").click(function() {
            $('.etap-selector').removeClass("active");
            $(this).addClass("active");
        });  
        });
    }
}); 

// Нажатия на блоке РЕМОНТ ОБОРУДОВАНИЯ БАССЕЙНОВ


$(document).ready(function(){
$(".etap-selector-remont").click(function() {
    $('.etap-selector-remont').removeClass("active");
    $(this).addClass("active");
});  
});

$(function() {
    if($(window).width()>992) {
        $(document).ready(function(){
$(".etap-selector-remont").click(function() {
    $('.etap-promyvka').css("display","none");
    $('.etap-img-remont').css("display","none");
    $('.remont-opisanie').css("display","none");
});  
});
$(document).ready(function(){
$(".etap-selector1-remont").click(function() {
    $('.etap1-remont').css("display","inline-block");
    $('.remont-opisanie1').css("display","inline-block");
});  
});
$(document).ready(function(){
$(".etap-selector2-remont").click(function() {
    $('.etap2-remont').css("display","inline-block");
    $('.remont-opisanie2').css("display","inline-block");
});  
});
$(document).ready(function(){
$(".etap-selector3-remont").click(function() {
    $('.etap3-remont').css("display","inline-block");
     $('.remont-opisanie3').css("display","inline-block");
});  
});
    }
}); 


// Нажатия на блоке РЕМОНТ БАССЕЙНОВ


$(document).ready(function(){
$(".etap-selector-remont2").click(function() {
    $('.etap-selector-remont2').removeClass("active");
    $('.etap-promyvka2').css("display","none");
    $(this).addClass("active");
    $('.remont2-opisanie').css("display","none");
     $('.etap-img-remont2').css("display","none");
});  
});
$(document).ready(function(){
$(".etap-selector1-remont2").click(function() {
    $('.etap1-remont2').css("display","inline-block");
    $('.remont2-opisanie1').css("display","inline-block");
    $('.etap1-remont2').css("display","inline-block");
});  
});
$(document).ready(function(){
$(".etap-selector2-remont2").click(function() {
    $('.etap2-remont2').css("display","inline-block");
    $('.remont2-opisanie2').css("display","inline-block");
    $('.etap2-remont2').css("display","inline-block");
});  
});

$(function() {
    if($(window).width()>992) {
        $(document).ready(function(){
$(".etap-selector-remont").click(function() {
    $('.etap-promyvka').css("display","none");
    $('.etap-img-remont').css("display","none");
    $('.remont-opisanie').css("display","none");
});  
});
$(document).ready(function(){
$(".etap-selector1-remont").click(function() {
    $('.etap1-remont').css("display","inline-block");
    $('.remont-opisanie1').css("display","inline-block");
});  
});
$(document).ready(function(){
$(".etap-selector2-remont").click(function() {
    $('.etap2-remont').css("display","inline-block");
    $('.remont-opisanie2').css("display","inline-block");
});  
});
$(document).ready(function(){
$(".etap-selector3-remont").click(function() {
    $('.etap3-remont').css("display","inline-block");
     $('.remont-opisanie3').css("display","inline-block");
});  
});
    }
}); 


// Нажатия на странице "наши работы"


$(document).ready(function(){
$("#works .basseyn-type a").click(function() {
    $('#works .basseyn-type a').removeClass("active");
    $('.works-fade').css("display","none");
    $(this).addClass("active");
});  
});
$(document).ready(function(){
$("#selector-works-1").click(function() {
    $('.kompozit-works').css("display","flex");
});  
});
$(document).ready(function(){
$("#selector-works-2").click(function() {
    $('.polipropilen-works').css("display","flex");
});  
});
$(document).ready(function(){
$("#selector-works-3").click(function() {
    $('.karkas-works').css("display","flex");
});  
});
$(document).ready(function(){
$("#selector-works-4").click(function() {
    $('.plenka-works').css("display","flex");
});  
});
$(document).ready(function(){
$("#selector-works-5").click(function() {
    $('.spa-works').css("display","flex");
});  
});
// Всплытие окна "Спасибо за заявку" на белой модалке
$(document).ready(function(){
$('#send').click(function() {
    if($(this).hasClass("disabled"))
        {}
    else {
    $('#zayavka').modal('hide');
    $("body").attr("style","padding-right:0px");
    $('#spasibo-za-zayavku').modal('show');
    }
});
});
// Всплытие окна "Спасибо за заявку" на синей модалке
$(document).ready(function(){
$('#send-blue').click(function() {
    if($(this).hasClass("disabled"))
        {}
    else {
    $('#zayavka-blue').modal('hide');
    $("body").attr("style","padding-right:0px");
    $('#spasibo-za-zayavku').modal('show');
    }
});
});


// Всплытие окна "Спасибо за заявку" на блоке "Заказывая у нас..."


$(document).ready(function(){
$('#send-zakazyvaya').click(function() {
    if($(this).hasClass("disabled"))
        {}
    else {
    $('#spasibo-za-zayavku').modal('show');
    }
});
});






// Огромный скрипт для огромного блока



// // Нажатия основных кнопок
$(document).ready(function(){
$("#service .basseyn-type button").click(function() {
    $('#service .basseyn-type button').removeClass("active");
    $(this).addClass("active");
    $('.big-selector').removeClass("active");
    $('.bs-etap1').addClass("active");
    $('.bs-etap2').removeClass("active");
    $('.bs-etap3').removeClass("active");
    $('.bs-etap4').removeClass("active");
    $('.bs-etap5').removeClass("active");
    $('.bs-etap6').removeClass("active");
    $('.bs-etap7').removeClass("active");
    $('.bs-etap8').removeClass("active");
    $('.etap-selector').removeClass("active");
    $('.etap-selector1').addClass("active");
});  
});
// Композитные бассейны big-selector-button-1
$(document).ready(function(){
$("#big-selector-button-1").click(function() {
    $('.kompozit-big-selector').addClass("active");
});  
});
// ПОЛИПРОПИЛЕНОВЫЕ бассейны big-selector-button-2
$(document).ready(function(){
$("#big-selector-button-2").click(function() {
    $('.polipropilen-big-selector').addClass("active");
});  
});
// КАРКАСНЫЕ бассейны big-selector-button-3
$(document).ready(function(){
$("#big-selector-button-3").click(function() {
    $('.karkas-big-selector').addClass("active");
});  
});
// ПЛЕНОЧНЫЕ бассейны big-selector-button-4
$(document).ready(function(){
$("#big-selector-button-4").click(function() {
    $('.plenka-big-selector').addClass("active");
});  
});
// СПА бассейны big-selector-button-5
$(document).ready(function(){
$("#big-selector-button-5").click(function() {
    $('.spa-big-selector').addClass("active");
});  
});

$(function() {
    if($(window).width()>992) {
        // Новые скрипты для нажатий на странице "Сервис"

// Композитные бассейны----------------------------------------------------------------------------------------------

$(document).ready(function(){
$(".kompozit-big-selector .etap-selector").click(function() {
    $('.kompozit-big-selector .bs-etap-zagolovok').removeClass("active");
    $('.kompozit-big-selector .big-selector-etap-time span').removeClass("active");
    $('.kompozit-big-selector .bs-etap-img').removeClass("active");
    $('.kompozit-big-selector .bs-etap-text').removeClass("active");

});  
});

$(document).ready(function(){
$(".kompozit-big-selector .etap-selector1").click(function() {
    $('.kompozit-big-selector .bs-etap1').addClass("active");

});  
});
$(document).ready(function(){
$(".kompozit-big-selector .etap-selector2").click(function() {
    $('.kompozit-big-selector .bs-etap2').addClass("active");

});  
});
$(document).ready(function(){
$(".kompozit-big-selector .etap-selector3").click(function() {
    $('.kompozit-big-selector .bs-etap3').addClass("active");

});  
});
$(document).ready(function(){
$(".kompozit-big-selector .etap-selector4").click(function() {
    $('.kompozit-big-selector .bs-etap4').addClass("active");

});  
});
$(document).ready(function(){
$(".kompozit-big-selector .etap-selector5").click(function() {
    $('.kompozit-big-selector .bs-etap5').addClass("active");

});  
});
$(document).ready(function(){
$(".kompozit-big-selector .etap-selector6").click(function() {
    $('.kompozit-big-selector .bs-etap6').addClass("active");

});  
});
$(document).ready(function(){
$(".kompozit-big-selector .etap-selector7").click(function() {
    $('.kompozit-big-selector .bs-etap7').addClass("active");

});  
});

// Полипропиленовые бассейны----------------------------------------------------------------------------------------------

$(document).ready(function(){
$(".polipropilen-big-selector .etap-selector").click(function() {
    $('.polipropilen-big-selector .bs-etap-zagolovok').removeClass("active");
    $('.polipropilen-big-selector .big-selector-etap-time span').removeClass("active");
    $('.polipropilen-big-selector .bs-etap-img').removeClass("active");
    $('.polipropilen-big-selector .bs-etap-text').removeClass("active");

});  
});

$(document).ready(function(){
$(".polipropilen-big-selector .etap-selector1").click(function() {
    $('.polipropilen-big-selector .bs-etap1').addClass("active");

});  
});
$(document).ready(function(){
$(".polipropilen-big-selector .etap-selector2").click(function() {
    $('.polipropilen-big-selector .bs-etap2').addClass("active");

});  
});
$(document).ready(function(){
$(".polipropilen-big-selector .etap-selector3").click(function() {
    $('.polipropilen-big-selector .bs-etap3').addClass("active");

});  
});
$(document).ready(function(){
$(".polipropilen-big-selector .etap-selector4").click(function() {
    $('.polipropilen-big-selector .bs-etap4').addClass("active");

});  
});
$(document).ready(function(){
$(".polipropilen-big-selector .etap-selector5").click(function() {
    $('.polipropilen-big-selector .bs-etap5').addClass("active");

});  
});
$(document).ready(function(){
$(".polipropilen-big-selector .etap-selector6").click(function() {
    $('.polipropilen-big-selector .bs-etap6').addClass("active");

});  
});
$(document).ready(function(){
$(".polipropilen-big-selector .etap-selector7").click(function() {
    $('.polipropilen-big-selector .bs-etap7').addClass("active");

});  
});
$(document).ready(function(){
$(".polipropilen-big-selector .etap-selector8").click(function() {
    $('.polipropilen-big-selector .bs-etap8').addClass("active");

});  
});

// Каркасные бассейны----------------------------------------------------------------------------------------------

$(document).ready(function(){
$(".karkas-big-selector .etap-selector").click(function() {
    $('.karkas-big-selector .bs-etap-zagolovok').removeClass("active");
    $('.karkas-big-selector .big-selector-etap-time span').removeClass("active");
    $('.karkas-big-selector .bs-etap-img').removeClass("active");
    $('.karkas-big-selector .bs-etap-text').removeClass("active");

});  
});

$(document).ready(function(){
$(".karkas-big-selector .etap-selector1").click(function() {
    $('.karkas-big-selector .bs-etap1').addClass("active");

});  
});
$(document).ready(function(){
$(".karkas-big-selector .etap-selector2").click(function() {
    $('.karkas-big-selector .bs-etap2').addClass("active");

});  
});
$(document).ready(function(){
$(".karkas-big-selector .etap-selector3").click(function() {
    $('.karkas-big-selector .bs-etap3').addClass("active");

});  
});
$(document).ready(function(){
$(".karkas-big-selector .etap-selector4").click(function() {
    $('.karkas-big-selector .bs-etap4').addClass("active");

});  
});
$(document).ready(function(){
$(".karkas-big-selector .etap-selector5").click(function() {
    $('.karkas-big-selector .bs-etap5').addClass("active");

});  
});
$(document).ready(function(){
$(".karkas-big-selector .etap-selector6").click(function() {
    $('.karkas-big-selector .bs-etap6').addClass("active");

});  
});
$(document).ready(function(){
$(".karkas-big-selector .etap-selector7").click(function() {
    $('.karkas-big-selector .bs-etap7').addClass("active");

});  
});

// Пленочные бассейны----------------------------------------------------------------------------------------------

$(document).ready(function(){
$(".plenka-big-selector .etap-selector").click(function() {
    $('.plenka-big-selector .bs-etap-zagolovok').removeClass("active");
    $('.plenka-big-selector .big-selector-etap-time span').removeClass("active");
    $('.plenka-big-selector .bs-etap-img').removeClass("active");
    $('.plenka-big-selector .bs-etap-text').removeClass("active");

});  
});

$(document).ready(function(){
$(".plenka-big-selector .etap-selector1").click(function() {
    $('.plenka-big-selector .bs-etap1').addClass("active");

});  
});
$(document).ready(function(){
$(".plenka-big-selector .etap-selector2").click(function() {
    $('.plenka-big-selector .bs-etap2').addClass("active");

});  
});
$(document).ready(function(){
$(".plenka-big-selector .etap-selector3").click(function() {
    $('.plenka-big-selector .bs-etap3').addClass("active");

});  
});
$(document).ready(function(){
$(".plenka-big-selector .etap-selector4").click(function() {
    $('.plenka-big-selector .bs-etap4').addClass("active");

});  
});
$(document).ready(function(){
$(".plenka-big-selector .etap-selector5").click(function() {
    $('.plenka-big-selector .bs-etap5').addClass("active");

});  
});
$(document).ready(function(){
$(".plenka-big-selector .etap-selector6").click(function() {
    $('.plenka-big-selector .bs-etap6').addClass("active");

});  
});

// СПА бассейны----------------------------------------------------------------------------------------------

$(document).ready(function(){
$(".spa-big-selector .etap-selector").click(function() {
    $('.spa-big-selector .bs-etap-zagolovok').removeClass("active");
    $('.spa-big-selector .big-selector-etap-time span').removeClass("active");
    $('.spa-big-selector .bs-etap-img').removeClass("active");
    $('.spa-big-selector .bs-etap-text').removeClass("active");

});  
});

$(document).ready(function(){
$(".spa-big-selector .etap-selector1").click(function() {
    $('.spa-big-selector .bs-etap1').addClass("active");

});  
});
$(document).ready(function(){
$(".spa-big-selector .etap-selector2").click(function() {
    $('.spa-big-selector .bs-etap2').addClass("active");

});  
});
$(document).ready(function(){
$(".spa-big-selector .etap-selector3").click(function() {
    $('.spa-big-selector .bs-etap3').addClass("active");

});  
});

    }
}); 