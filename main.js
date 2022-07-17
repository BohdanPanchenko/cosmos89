//  ----------------------BURGER MENU--------------------------------
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

// ---------------------------COURSES PAGE TABS---------------------------------------
const CoursesTitle = document.querySelector('.courses__title');
const coursersButtons = document.querySelectorAll('.nav-menu__item button');
const coursesCards = document.querySelectorAll('.item-courses');
const dropDown = document.querySelector('.side-bar__drop-down');
const dropDownBtn = document.querySelector('.side-bar__drop-down button');

document.addEventListener('click', (e) => {
    if (e.target.closest('.nav-menu__item')) {
        CoursesTitle.innerHTML = e.target.innerHTML;

        const innerDropDown = dropDown.textContent;
        dropDown.innerHTML = e.target.textContent;
        dropDown.appendChild(dropDownBtn);

        coursersButtons.forEach(el => {
            if (el.classList.contains('active'))
                el.classList.remove('active');
        })

        e.target.classList.add('active');

        const tagName = e.target.innerHTML.toLowerCase().replace(' ', '-');

        coursesCards.forEach(el => {
            const categories = el.dataset.category.split(' ');
            let counter = 0;
            categories.forEach(item => {
                if (tagName === item) {
                    el.classList.add('visible');
                    counter++;
                }
            })
            if (counter === 0) {
                el.classList.remove('visible');
            }
        })
    }

    const sideBar = document.querySelector('.nav-menu'); // реализовыаем выпадающий список

    if (e.target.closest('.side-bar__drop-down')) {
        sideBar.classList.toggle('visible');
        console.log(e.target + ' !!')
    }
})

// ---------------------------SWIPER SLIDER---------------------------------------
if (document.querySelector('.swiper')) {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // spaceBetween: 104,
        allowSlideNext: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },


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