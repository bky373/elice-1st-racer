$(function () {
    // 내비게이션 기능
    $("header a").click(function (e) {
        e.preventDefault();

        var $target = $(this.hash);

        $("html, body").animate({
            scrollTop: $target.offset().top
        }, "slow");
    })


    // 이미지 슬라이드 애니메이션 기능
    var $slider = $("#slider");
    var $slides = $slider.find(".slides");
    var $slide = $slides.find(".slide");

    var currentSlide = 1;

    setInterval(function () {

        $slides.animate({
            'margin-left': "-=" + 1024
        }, 1000, function () {
            currentSlide++;

            if (currentSlide === $slide.length) {
                currentSlide = 1;
                $slides.css("margin-left", 0)
            }
        })
    }, 3000);


    // 탭 기능
    $(".tabs-list li a").click(function (e) {
        e.preventDefault();
    });

    $(".tabs-list li").click(function () {
        var $tabId = $(this).find("a").attr("href");

        $(".tabs-list li, .tabs div.tab").removeClass("active");
        $($tabId).addClass("active");
        $(this).addClass("active");
    });


    // 이미지 슬라이드 클릭 기능
    $(".right-arrow").click(function(){
        var $curSlide = $("#photo .slide.active");
        var $nextSlide = $curSlide.next();

        $curSlide.fadeOut().removeClass("active");
        $nextSlide.fadeIn().addClass("active");

        if ($nextSlide.length === 0) {
            $("#photo .slide").first().fadeIn().addClass("active");
        }
    });

    $(".left-arrow").click(function(){
        var $curSlide = $("#photo .slide.active");
        var $prevSlide = $curSlide.prev();

        $curSlide.fadeOut().removeClass("active");
        $prevSlide.fadeIn().addClass("active");

        if ($prevSlide.length === 0) {
            $("#photo .slide").last().fadeIn().addClass("active");
        }
    });
});