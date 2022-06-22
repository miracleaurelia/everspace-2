// initialize nice select
$(document).ready(function() {
    $('.language-select').niceSelect();
});

// navbar appear again when user scroll
var fixed_top = $(".header-section");
var fixed_nav = $(".navbar");
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 500) {
        fixed_top.addClass("fadeInDown header-fixed");
        fixed_nav.addClass("expanded");
    }
    else {
        fixed_top.removeClass("fadeInDown header-fixed");
        fixed_nav.removeClass("expanded");
    }
});

// initialize paroller
$('.my-paroller').paroller();

// slider for testimonials
var swiper = new Swiper('.client-wrapper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.ruddra-next',
        prevEl: '.ruddra-prev',
    },
    autoplay: {
        speeds: 1000,
        delay: 3000,
    },
    speed: 1000,
    breakpoints: {
        991: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
    }
});

// map in join section
jQuery(document).ready(function () {
    jQuery('#vmap').vectorMap({
        map: 'world_en',
        color: '#2a3e72',
        backgroundColor: 'transparent',
        hoverOpacity: 0.8,
        selectedColor: '#ffca24',
        scaleColors: ['#f7fcff', '#f7fcff'],
        normalizeFunction: 'polynomial'
    });
});

// odometer display number when the area is in viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

var pageOdometer = document.querySelector(".pageView");
var usersOdometer = document.querySelector(".users");
var countriesOdometer = document.querySelector(".countries");
var odometer1 = new Odometer({
    el: pageOdometer,
});
var odometer2 = new Odometer({
    el: usersOdometer,
});
var odometer3 = new Odometer({
    el: countriesOdometer,
});

document.addEventListener('scroll', function () {
    if (isInViewport(pageOdometer)) {
        pageOdometer.innerHTML = 271288;
        usersOdometer.innerHTML = 255451;
        countriesOdometer.innerHTML = 45;
    }
});