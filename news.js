const burgerBtn = document.querySelector(".burger"),
    navBar = document.querySelector(".menu");

function onClick(a) { if (console.log(a.target), a.target.closest(".tabs-nav")) { let b = document.querySelectorAll(".item-news"),
            c = document.querySelectorAll(".tabs-nav__btn"),
            d = document.querySelectorAll(".item-news__category");
        b.forEach(a => { a.classList.remove("visible") }), c.forEach(a => { a.classList.remove("active") }), a.target.classList.add("active"), d.forEach(c => { c.textContent.toLocaleLowerCase() === a.target.textContent.toLocaleLowerCase() ? (c.closest(".item-news").classList.add("visible"), console.log()) : "All" === a.target.textContent && b.forEach(a => { a.classList.add("visible") }) }), a.target.textContent } }
burgerBtn.addEventListener("click", a => { navBar.classList.contains("menu_active") ? (navBar.classList.add("menu_out"), setTimeout(() => { navBar.classList.remove("menu_out"), navBar.classList.toggle("menu_active") }, 500)) : navBar.classList.toggle("menu_active"), burgerBtn.classList.toggle("burger_active") }), document.addEventListener("click", onClick)