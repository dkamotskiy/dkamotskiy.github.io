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
$(document).ready(function() {
	$(".phone-number").mask("8(999) 999-9999");
});
$(function(){
  
});