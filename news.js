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

// ---------------------------NEWS PAGE TABS---------------------------------------

function onClick(event) {

    console.log(event.target);

    if (event.target.closest('.tabs-nav')) {
        const newsItems = document.querySelectorAll('.item-news');
        const btns = document.querySelectorAll('.tabs-nav__btn');
        const labels = document.querySelectorAll('.item-news__category');

        newsItems.forEach((el) => { el.classList.remove('visible') });
        btns.forEach((el) => { el.classList.remove('active') });

        event.target.classList.add('active');
        labels.forEach((el) => {
            if (el.textContent.toLocaleLowerCase() === event.target.textContent.toLocaleLowerCase()) {
                el.closest('.item-news').classList.add('visible');
                console.log()
            } else if (event.target.textContent === 'All') {
                newsItems.forEach((el) => { el.classList.add('visible') })
            }

        })
        event.target.textContent
    }


}
document.addEventListener('click', onClick)