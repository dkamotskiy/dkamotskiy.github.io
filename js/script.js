$('#try').each(function(){
var height = $(this).height();
$(this).find('.col-md-1').css('min-height', height);
});

$(window).resize(function() {
$('#try').each(function(){
var height = $(this).height();
$(this).find('.col-md-1').css('min-height', height);
});
});

