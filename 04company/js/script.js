$(document).ready(function(){
    var mySlider = $('.slider').bxSlider({
        pager: false, controls: false
    })
    $(".nextBtn").on('click', function () {
        mySlider.goToNextSlide()
    });
    $(".prevBtn").on('click', function () {
        mySlider.goToPrevSlide()
    });
    var mySlider1 = $('.slider2').bxSlider({
        pager: false, controls: false, auto:true
    })

});

$(document).ready(function(){
    $(".youtube").colorbox({
        iframe:true,
        innerWidth:700,
        innerHeight:394
    });
});


