//Логотип
$(window).load(function(){
$(".logo-ekran1").delay(1000).animate({bottom: "50%"}, 2000);
});
//Инициализация свайпа карусели
$('.jcarousel')
    .jcarousel()       // init jcarousel
    .jcarouselSwipe(); // init jcarouselSwipe
// Инициализация скроллинга
$(document).ready(function() {
                if ($(window).width() > 76){
                  $('#fullpage').fullpage({
    anchors:['firstSlide','secondSlide','3rdSlide','4thSlide','5thSlide','6thSlide','7thSlide','8thSlide','newSlide','9thSlide'],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    controlArrows: false,
    navigation:true,
    navigationPosition:'left',
    overflowScroll:true,
    // navigationTooltips
    scrollOverflow:true,
    normalScrollElements: '',
    afterLoad:function(link,index) {
// первый слайд
        if(index == 1) {
          $(".menu-button").css({'color':'#fff'});
          $(".bar").css({'background-color':'#fff'});
          $("#fp-nav ul li a span").css({'background-color':'#fff'});
          $("#fp-nav ul li a span").css({'border':'1px solid #fff'});
          $("#fp-nav ul li:hover a span").css({'border':'1px solid #fff'});
          $("#fp-nav ul li a.active span").css({'border':'1px solid #fff'});
          $("#top").css({'display':'none'});
        }
        if(link == 'firstSlide') {
         $(".menu-button").css({'color':'#fff'});
         $(".bar").css({'background-color':'#fff'});
         $("#fp-nav ul li a span").css({'background-color':'#fff'});
         $("#fp-nav ul li a span").css({'border':'1px solid #fff'});
         $("#fp-nav ul li:hover a span").css({'border':'1px solid #fff'});
         $("#fp-nav ul li a.active span").css({'border':'1px solid #fff'});
         $("#top").css({'display':'none'});
        }
// второй слайд
        if(index == 2) {
          $(".menu-button").css({'color':'black'});
          $(".bar").css({'background-color':'black'});
          $("#fp-nav ul li a span").css({'background-color':'#95989A'});
          $("#fp-nav ul li a span").css({'border':'1px solid #95989A'});
          $("#fp-nav ul li:hover a span").css({'border':'1px solid #95989A'});
          $("#fp-nav ul li a.active span").css({'border':'1px solid #95989A'});
          $("#top").css({'display':'block'});
        }
        if(link == 'secondSlide') {
         $(".menu-button").css({'color':'black'});
         $(".bar").css({'background-color':'black'});
         $("#fp-nav ul li a span").css({'background-color':'#95989A'});
         $("#fp-nav ul li a span").css({'border':'1px solid #95989A'});
         $("#fp-nav ul li:hover a span").css({'border':'1px solid #95989A'});
         $("#fp-nav ul li a.active span").css({'border':'1px solid #95989A'});
         $("#top").css({'display':'block'});
        }
// третий слайд
        if(index == 3) {
          $(".menu-button").css({'color':'#fff'});
          $(".bar").css({'background-color':'#fff'});
          $("#fp-nav ul li a span").css({'background-color':'#fff'});
          $("#fp-nav ul li a span").css({'border':'1px solid #fff'});
          $("#fp-nav ul li:hover a span").css({'border':'1px solid #fff'});
          $("#fp-nav ul li a.active span").css({'border':'1px solid #fff'});
        }
        if(link == '3rdSlide') {
         $(".menu-button").css({'color':'#fff'});
         $(".bar").css({'background-color':'#fff'});
         $("#fp-nav ul li a span").css({'background-color':'#fff'});
         $("#fp-nav ul li a span").css({'border':'1px solid #fff'});
          $("#fp-nav ul li:hover a span").css({'border':'1px solid #fff'});
          $("#fp-nav ul li a.active span").css({'border':'1px solid #fff'});
        }  
// 4 слайд
        if(index == 4) {
          $(".menu-button").css({'color':'#000'});
          $(".bar").css({'background-color':'#000'});
          $("#fp-nav ul li a span").css({'background-color':'#95989A'});
          $("#fp-nav ul li a span").css({'border':'1px solid #95989A'});
          $("#fp-nav ul li:hover a span").css({'border':'1px solid #95989A'});
          $("#fp-nav ul li a.active span").css({'border':'1px solid #95989A'});
        }
        if(link == '4thSlide') {
         $(".menu-button").css({'color':'#000'});
         $(".bar").css({'background-color':'#000'});
         $("#fp-nav ul li a span").css({'background-color':'#95989A'});
         $("#fp-nav ul li a span").css({'border':'1px solid #95989A'});
          $("#fp-nav ul li:hover a span").css({'border':'1px solid #95989A'});
          $("#fp-nav ul li a.active span").css({'border':'1px solid #95989A'});
        }  
// 5 слайд
        if(index == 5) {
          $(".menu-button").css({'color':'#fff'});
          $(".bar").css({'background-color':'#fff'});
          $("#fp-nav ul li a span").css({'background-color':'#fff'});
          $("#fp-nav ul li a span").css({'border':'1px solid #fff'});
          $("#fp-nav ul li:hover a span").css({'border':'1px solid #fff'});
          $("#fp-nav ul li a.active span").css({'border':'1px solid #fff'});
        }
        if(link == '5thSlide') {
         $(".menu-button").css({'color':'#fff'});
         $(".bar").css({'background-color':'#fff'});
         $("#fp-nav ul li a span").css({'background-color':'#fff'});
         $("#fp-nav ul li a span").css({'border':'1px solid #fff'});
          $("#fp-nav ul li:hover a span").css({'border':'1px solid #fff'});
          $("#fp-nav ul li a.active span").css({'border':'1px solid #fff'});
        } 
// 6 слайд
        if(index == 6) {
          $(".menu-button").css({'color':'#000'});
          $(".bar").css({'background-color':'#000'});
          $("#fp-nav ul li a span").css({'background-color':'#95989A'});
          $("#fp-nav ul li a span").css({'border':'1px solid #95989A'});
          $("#fp-nav ul li:hover a span").css({'border':'1px solid #95989A'});
          $("#fp-nav ul li a.active span").css({'border':'1px solid #95989A'});
        }
        if(link == '6thSlide') {
         $(".menu-button").css({'color':'#000'});
         $(".bar").css({'background-color':'#000'});
         $("#fp-nav ul li a span").css({'background-color':'#95989A'});
          $("#fp-nav ul li:hover a span").css({'border':'1px solid #95989A'});
          $("#fp-nav ul li a.active span").css({'border':'1px solid #95989A'});
        } 
// 7 слайд
        if(index == 7) {
          $(".menu-button").css({'color':'#fff'});
          $(".bar").css({'background-color':'#fff'});
          $("#fp-nav ul li a span").css({'background-color':'#fff'});
          $("#fp-nav ul li a span").css({'border':'1px solid #fff'});
          $("#fp-nav ul li:hover a span").css({'border':'1px solid #fff'});
          $("#fp-nav ul li a.active span").css({'border':'1px solid #fff'});
        }
        if(link == '7thSlide') {
         $(".menu-button").css({'color':'#fff'});
         $(".bar").css({'background-color':'#fff'});
         $("#fp-nav ul li a span").css({'background-color':'#fff'});
         $("#fp-nav ul li a span").css({'border':'1px solid #fff'});
          $("#fp-nav ul li:hover a span").css({'border':'1px solid #fff'});
          $("#fp-nav ul li a.active span").css({'border':'1px solid #fff'});
        }       
      }
    // другие опции
});
                }
         else   {
            }

});
// Появление левой кнопки
$(document).ready(function(){
$( "#ekran4 .jcarousel-control-next" ).click(function() {
    $("#ekran4 .jcarousel-control-prev").attr("style","display:block");
});  
});
$(document).ready(function(){
$( "#ekran6 .jcarousel-control-next" ).click(function() {
    $("#ekran6 .jcarousel-control-prev").attr("style","display:block");
});  
});
// Смена свойств кнопки "Меню при скролле"
// var target = $('#ekran2');
// var targetPos = target.offset().top;
// var winHeight = $(window).height();
// var scrollToElem = targetPos - winHeight;
// $(window).scroll(function(){
//   var winScrollTop = $(this).scrollTop();
//   if(winScrollTop > scrollToElem){
//    $(".menu-button").attr("style","background-color:#000;");
//   }
// });
// var target = $('#ekran3');
// var targetPos = target.offset().top;
// var winHeight = $(window).height();
// var scrollToElem = targetPos - winHeight;
// $(window).scroll(function(){
//   var winScrollTop = $(this).scrollTop();
//   if(winScrollTop > scrollToElem){
//    $(".menu-button").css({'color':'#000'});
//   }
// });
// var target = $('#ekran3');
// var targetPos = target.offset().top;
// var winHeight = $(window).height();
// var scrollToElem = targetPos - winHeight;
// $(window).scroll(function(){
//   var winScrollTop = $(this).scrollTop();
//   if(winScrollTop > scrollToElem){
//    $(".menu-button").css({'color':'#fff'});
//   }
// });
// var target = $('#ekran3');
// var targetPos = target.offset().top;
// var winHeight = $(window).height();
// var scrollToElem = targetPos - winHeight;
// $(window).scroll(function(){
//   var winScrollTop = $(this).scrollTop();
//   if(winScrollTop > scrollToElem){
//    $(".menu-button").css({'color':'#000'});
//   }
// });

// //скролл
// $(window).scroll(function(){
//   var offset = $('.white').offset(),
//       offsetwb = $('.white + .black').offset();
//   if ($(this).scrollTop() > offset.top && $(this).scrollTop() < offsetwb.top) {
//     $('.menu-button').css('background-color','black !important');
//   }
//   else {
//     $('.menu-button').css('background-color','white !important');
//   }
// });
// Маска
jQuery(function($){
   $("#phone-form").mask("+7 (999) 999-9999");
   $("#phone-forma2").mask("+7 (999) 999-9999");
});
//GoogleMap
                  function initMap() {
                    var uluru = {lat: 54.736908, lng: 55.987691};
                    var map = new google.maps.Map(document.getElementById('map'), {
                      zoom: 15,
                      center: uluru,
                      scrollwheel: false,
                      minZoom: 10,
                      styles: [
            {elementType: 'geometry', stylers: [{color: '#0A3848'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#0A3848'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ],
            disableDefaultUI: true,
                    });
                    var marker = new google.maps.Marker({
                      position: uluru,
                      map: map
                    });
                  }