$(function () {

    $("#sidemenu .menu-list li a").click(function (e) {
        e.preventDefault();
    });

    $("#sidemenu .menu-list li").click(function (e) {
        var $contentId = $(this).find("a").attr("href");

        $("#main article.content").removeClass("active");
        $($contentId).addClass("active");
    });

    $("#main article.content").click(function (e) {
        $("#main article.content").removeClass("active");
        $(this).addClass("active");
    });

});