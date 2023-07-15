// Seleccionamos el navbar
const navContainer = document.querySelector(".nav_container");
// Seleccionamos el boton de menu
const menuBtn = document.querySelector(".menu_icon");
// Seleccionamos el boton de cerrar
const closeBtn = document.querySelector(".close_icon"); 
// Seleccionamos el menu
const nav_list = document.querySelector(".nav_list");

menuBtn.addEventListener("click", () => {
    nav_list.classList.add("active");
}
);
closeBtn.addEventListener("click", () => {
    nav_list.classList.add("close");
    setTimeout(() => {
        nav_list.classList.remove("close");
        nav_list.classList.remove("active");
    }, 500);
});

// Seleccionamos el nav_link
const nav_link = document.querySelectorAll(".nav_link");
// Cuando se haga click en el nav_link, los demas nav_link no deben tener la clase active
nav_link.forEach((item) => {
    item.addEventListener("click", () => {
        nav_link.forEach((item) => {
            item.classList.remove("active");
        });
        item.classList.add("active");
    });
});

/*
Si el usuario hace scroll 60px hacia abajo, añadimos la clase scroll al navbar
*/
const nav = document.querySelector("nav");
const main = document.querySelector("main");
window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        nav.classList.add("scroll");
        main.style.marginTop = "60px";
    } else {
        nav.classList.remove("scroll");
        main.style.marginTop = "0px";
    }
}
);