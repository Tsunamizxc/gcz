
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




// маска
function noDigits(event) {
  if ("1234567890".indexOf(event.key) != -1) event.preventDefault();
}

document.addEventListener("DOMContentLoaded", function () {
  var eventCalllback = function (e) {
    var el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "+7(___) ___-__-__",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");
    if (clearVal !== "false" && e.type === "blur") {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = "";
        return;
      }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
          ? ""
          : a;
    });
  };
  var phone_inputs = document.querySelectorAll("[data-phone-pattern]");
  for (let elem of phone_inputs) {
    for (let ev of ["input", "blur", "focus"]) {
      elem.addEventListener(ev, eventCalllback);
    }
  }
});