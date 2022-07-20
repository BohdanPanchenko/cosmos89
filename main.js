const burgerBtn = document.querySelector(".burger"),
    navBar = document.querySelector(".menu");
burgerBtn.addEventListener("click", a => { navBar.classList.contains("menu_active") ? (navBar.classList.add("menu_out"), setTimeout(() => { navBar.classList.remove("menu_out"), navBar.classList.toggle("menu_active") }, 500)) : navBar.classList.toggle("menu_active"), burgerBtn.classList.toggle("burger_active") });
const CoursesTitle = document.querySelector(".courses__title"),
    coursersButtons = document.querySelectorAll(".nav-menu__item button"),
    coursesCards = document.querySelectorAll(".item-courses"),
    dropDown = document.querySelector(".side-bar__drop-down"),
    dropDownBtn = document.querySelector(".side-bar__drop-down button");
document.addEventListener("click", a => { if (a.target.closest(".nav-menu__item")) { CoursesTitle.innerHTML = a.target.innerHTML, dropDown.textContent, dropDown.innerHTML = a.target.textContent, dropDown.appendChild(dropDownBtn), coursersButtons.forEach(a => { a.classList.contains("active") && a.classList.remove("active") }), a.target.classList.add("active"); let c = a.target.innerHTML.toLowerCase().replace(" ", "-");
        coursesCards.forEach(a => { let b = a.dataset.category.split(" "),
                d = 0;
            b.forEach(b => { c === b && (a.classList.add("visible"), d++) }), 0 === d && a.classList.remove("visible") }) } let b = document.querySelector(".nav-menu");
    a.target.closest(".side-bar__drop-down") ? (b.classList.toggle("visible"), console.log(a.target + " !!")) : a.target.closest(".nav-menu") && setTimeout(() => { b.classList.toggle("visible") }, 150) }), document.querySelector(".swiper") && new Swiper(".swiper", { direction: "horizontal", loop: !0, allowSlideNext: !0, pagination: { el: ".swiper-pagination", clickable: !0 }, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }, slidesPerView: 1, allowTouchMove: !0, touchRatio: 1.5, centeredSlides: !0 })