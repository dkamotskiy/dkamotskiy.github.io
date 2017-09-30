        $(document).ready(function() {
            $('#minus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
            });
            $('#plus').click(function () {
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
            });
        });
        $(document).ready(function() {
            $('#minus-left').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
            });
            $('#plus-left').click(function () {
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
            });
        });
        $(document).ready(function() {
            $('#minus-right').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
            });
            $('#plus-right').click(function () {
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
            });
        });
// Наведение на главной
$(document).ready(function(){
    $(".hover1").mouseover(function() {
        $(".hover1").attr("src","img/1h.jpg");
        });
    $(".hover1").mouseleave(function() {
        $(".hover1").attr("src","img/1.jpg");
        });
    $(".hover2").mouseover(function() {
        $(".hover2").attr("src","img/2h.jpg");
        });
    $(".hover2").mouseleave(function() {
        $(".hover2").attr("src","img/2.jpg");
        });
    $(".hover3").mouseover(function() {
        $(".hover3").attr("src","img/3h.jpg");
        });
    $(".hover3").mouseleave(function() {
        $(".hover3").attr("src","img/3.jpg");
        });
    $(".hover4").mouseover(function() {
        $(".hover4").attr("src","img/4h.jpg");
        });
    $(".hover4").mouseleave(function() {
        $(".hover4").attr("src","img/4.jpg");
        });
    $(".hover5").mouseover(function() {
        $(".hover5").attr("src","img/5h.jpg");
        });
    $(".hover5").mouseleave(function() {
        $(".hover5").attr("src","img/5.jpg");
        });
    $(".hover6").mouseover(function() {
        $(".hover6").attr("src","img/6h.jpg");
        });
    $(".hover6").mouseleave(function() {
        $(".hover6").attr("src","img/6.jpg");
        });
    $(".hover7").mouseover(function() {
        $(".hover7").attr("src","img/7h.jpg");
        });
    $(".hover7").mouseleave(function() {
        $(".hover7").attr("src","img/7.jpg");
        });
    $(".hover8").mouseover(function() {
        $(".hover8").attr("src","img/8h.jpg");
        });
    $(".hover8").mouseleave(function() {
        $(".hover8").attr("src","img/8.jpg");
        });
    $(".hover9").mouseover(function() {
        $(".hover9").attr("src","img/9h.jpg");
        });
    $(".hover9").mouseleave(function() {
        $(".hover9").attr("src","img/9.jpg");
        });
    $(".hover10").mouseover(function() {
        $(".hover10").attr("src","img/10h.jpg");
        });
    $(".hover10").mouseleave(function() {
        $(".hover10").attr("src","img/10.jpg");
        });
    $(".hover11").mouseover(function() {
        $(".hover11").attr("src","img/11h.jpg");
        });
    $(".hover11").mouseleave(function() {
        $(".hover11").attr("src","img/11.jpg");
        });
    });