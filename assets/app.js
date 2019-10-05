$(function() {
    let header = $("#header");
    let intro = $("#intro");
    let introH  = 0;

    $(window).on("scroll load resize", function() {
    	introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        if (scrollPos > introH) {
            header.addClass("fixed");
        } 
        else {
            header.removeClass("fixed");
        }
    });
});