// Селектор для модального окна расчета
$('select').each(function(){
	$(this).siblings('p').text( $(this).children('option:selected').text() );
});
$('select').change(function(){
	$(this).siblings('p').text( $(this).children('option:selected').text() );
});
// Обработка нажатий на странице "Цены"
$(document).ready(function(){
    $( "#button-novostroyka" ).click(function() {
        $("#button-kapital").attr("style","border-bottom: 3px solid transparent;");
        $("#button-novostroyka").attr("style","border-bottom: 3px solid #899e00;");
        $("#button-kosmetika").attr("style","border-bottom: 3px solid transparent");
        $("#table-kapital").fadeOut(300);
        $("#table-kosmetika").fadeOut(300);
        $("#table-novostroyka").fadeIn(500);
        });
    $( "#button-kosmetika" ).click(function() {
        $("#button-kapital").attr("style","border-bottom: 3px solid transparent;");
        $("#button-novostroyka").attr("style","border-bottom: 3px solid transparent;");
        $("#button-kosmetika").attr("style","border-bottom: 3px solid #899e00;");
        $("#table-kapital").fadeOut(300);
        $("#table-novostroyka").fadeOut(300);
        $("#table-kosmetika").fadeIn(500);
        });
    $( "#button-kapital" ).click(function() {
        $("#button-kapital").attr("style","border-bottom: 3px solid #899e00;");
        $("#button-novostroyka").attr("style","border-bottom: 3px solid transparent;");
        $("#button-kosmetika").attr("style","border-bottom: 3px solid transparent;");
        $("#table-novostroyka").fadeOut(300);
        $("#table-kosmetika").fadeOut(300);
        $("#table-kapital").fadeIn(500);
        });
});
// Поддержка свайпа на каруселях Bootstrap
$('#carousel-example-generic').bcSwipe({ threshold: 50 });

$(document).ready(function(){
    $("#fancybox-image-wrap img").attr("max-width","100%;");
});
// Активауия тултипа
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});