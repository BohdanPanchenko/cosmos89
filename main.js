const burgerBtn = document.querySelector('.burger');
const navBar = document.querySelector('.menu');

burgerBtn.addEventListener('click', (e) => {

    if (navBar.classList.contains('menu_active')) {
        navBar.classList.add('menu_out');
        setTimeout(() => {
            navBar.classList.remove('menu_out');
            navBar.classList.toggle('menu_active');
        }, 500)
    } else {
        navBar.classList.toggle('menu_active');
    }

    burgerBtn.classList.toggle('burger_active');
})

if (document.querySelector('.swiper')) {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // spaceBetween: 104,
        allowSlideNext: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        // slidesPerGroup: 1,
        allowTouchMove: true,
        touchRatio: 1.5,
        centeredSlides: true,

        // breakpoints: {
        //     // when window width is >= 320px
        //     320: {
        //         slidesPerView: 1,
        //         spaceBetween: 20,
        //         centeredSlides: false,

        //     },
        //     // when window width is >= 480px
        //     696: {
        //         slidesPerView: 2,
        //         spaceBetween: 0
        //     },
        //     986: {
        //         slidesPerView: 3,
        //         spaceBetween: 0
        //     },
        //     // when window width is >= 640px
        //     1280: {
        //         slidesPerView: 4,
        //         spaceBetween: 44
        //     }
        // }

    });
}