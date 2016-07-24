

$(document).ready(function () {
    $(window).bind('scroll', function () {
        var navHeight = $(window).height() - 70;
        if ($(window).scrollTop() > navHeight) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    });
});


// ********************************************************
// NAV BAR
//
$(function(){

    // Returns width of browser viewport
    var browser = $(window).width();
    // Returns width of HTML document
    var document = $(document).width();

    $('.nav .toggle-nav').click(function(e){
        $('.nav .nav-mobile').addClass('style-mobile').slideToggle('slow');
        e.preventDefault();
    });

});

