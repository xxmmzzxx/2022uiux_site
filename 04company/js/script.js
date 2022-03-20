$(document).ready(function(){
    var mySlider = $('.slider').bxSlider({
        pager: false, controls: false
    })
    $(".nSlider").bxSlider({
        pager: false, controls: false
    });

    $(".nextBtn").on('click', function () {
        mySlider.goToNextSlide()
    });
    $(".prevBtn").on('click', function () {
        mySlider.goToPrevSlide()
    });
    var mySlider1 = $('.slider2').bxSlider({
        pager: false, controls: false, auto:true
    })
      $(window).scroll(function () {
        let scrollY = window.pageYOffset;
        console.log(scrollY)
        if (scrollY > 200) {
            $("#header").addClass("fixed");
        } else {
            $("#header").removeClass("fixed")
        }
    })
    const $toElem = $(".toggle");
    let chk = true;
    $toElem.click(function () {
        console.log("click")
        if (chk == true) {
            $(this).addClass("active");
            $(".navbar").css({ left: 0 })
            $(".lang").css("display", "flex");
            $(".overLayer").show();
            chk = false;
        } else {
            $(this).removeClass("active");
            $(".navbar").css({ left: "-100%" })
            $(".lang").hide();
            chk = true;
        }
    })
    $(window).resize(function () {
        $(".toggle").removeClass("active");
        $(".navbar").removeAttr("style");
        $(".lang").removeAttr("style");
        $(".overLayer").hide();
    })

});

$(document).ready(function(){
    $(".youtube").colorbox({
        iframe:true,
        innerWidth:700,
        innerHeight:394
    });
});


