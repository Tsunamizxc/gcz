
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



$('.menu').click(function () {
    $(this).toggleClass('open');
});

let openp = document.getElementById('openp');
let popup = document.querySelector('.popup-vis');
let exitp = document.querySelector('.popup-exit');
let bg = document.querySelector('.bg')


openp.addEventListener("click", function () {
    popup.style.display = 'block';
    bg.style.display = 'block';
});
bg.addEventListener("click", function () {
    popup.style.display = 'none';
    bg.style.display = 'none';
});
exitp.addEventListener("click", function () {
    popup.style.display = 'none';
    bg.style.display = 'none';
});