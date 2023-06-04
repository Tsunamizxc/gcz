
$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#topNubex').fadeIn();
        } else {
            $('#topNubex').fadeOut();
        }
    });
    $('#topNubex').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 700);
    });
});


$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#topNubexTel').fadeIn();
        } else {
            $('#topNubexTel').fadeOut();
        }
    });

});