$("#carousel-example-generic").on("touchstart", function(event){
        var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event){
        var xMove = event.originalEvent.touches[0].pageX;
        if( Math.floor(xClick - xMove) > 5 ){
            $("#carousel-example-generic").carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -5 ){
            $("#carousel-example-generic").carousel('prev');
        }
    });
    $("#carousel-example-generic").on("touchend", function(){
            $(this).off("touchmove");
    });
});