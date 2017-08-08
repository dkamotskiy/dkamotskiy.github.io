//   $('#try').each(function(){
// 	var height1 = $(this).height();
// 	$(this).find('.col-md-1').css('height', height1);
// });
// $(window).resize(function() {
// 	$('#try').each(function(){
// 	var height2 = $(this).height();
// 	$(this).find('.col-md-1').css('height', height2);
// 	var height3 = $('#colonka').height();
// 	$(this).find('.col-md-1').css('height', height3);
// });

// });
$(document).ready(function() {
	$(".phone-number").mask("8(999) 999-9999");
});
$(document).ready(function() {
	$('#top').click(function () {
		$('body, html').animate({scrollTop: 0}, 1000);
});
});