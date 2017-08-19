$('select').each(function(){
	$(this).siblings('p').text( $(this).children('option:selected').text() );
});
$('select').change(function(){
	$(this).siblings('p').text( $(this).children('option:selected').text() );
});
	$(document).ready(function() {
    $("a[rel=example_group]").fancybox({
        'transitionIn' : 'none',
        'transitionOut' : 'none',
        'titlePosition' : 'over',
        'titleFormat' : function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });
	});
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
// $(document).ready(function() {  
//         $('#carousel-example-generic').hammer().on('swipeleft', function(){
//             $(this).carousel('next'); 
//         })
//         $('#carousel-example-generic').hammer().on('swiperight', function(){
//             $(this).carousel('prev'); 
//         })
//  }); 
$('#carousel-example-generic').bcSwipe({ threshold: 50 });