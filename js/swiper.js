var swiper = new Swiper(".slide-content", {
    loop: true,
    fade: true,
    grabCursor: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: false
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 10,
            navigation: false
        },
        868: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1250: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
});

