// Seleccionamos el navbar
const navContainer = document.querySelector(".nav_container");
// Seleccionamos el boton de menu
const menuBtn = document.querySelector(".menu_icon");
// Seleccionamos el boton de cerrar
const closeBtn = document.querySelector(".close_icon"); 
// Seleccionamos el menu
const nav_list = document.querySelector(".nav_list");

let closeTimer;
function openMenu() {
    if (!nav_list) return;
    clearTimeout(closeTimer);
    nav_list.classList.remove('close');
    nav_list.classList.add('active');
    menuBtn?.setAttribute('aria-expanded', 'true');
    closeBtn?.focus();
}
function closeMenu() {
    if (!nav_list) return;
    clearTimeout(closeTimer);
    nav_list.classList.add('close');
    menuBtn?.setAttribute('aria-expanded', 'false');
    closeTimer = setTimeout(() => { nav_list.classList.remove('close', 'active'); menuBtn?.focus(); }, 500);
}
for (const [button, action, label] of [[menuBtn, openMenu, 'Abrir menú'], [closeBtn, closeMenu, 'Cerrar menú']]) {
    if (!button) continue;
    button.setAttribute('role', 'button');
    button.tabIndex = 0;
    button.setAttribute('aria-label', label);
    button.addEventListener('click', action);
    button.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); action(); }
    });
}
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav_list?.classList.contains('active')) closeMenu(); });
window.addEventListener('pagehide', () => clearTimeout(closeTimer));

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
    if (!nav || !main) return;
    if (window.scrollY > 80) {
        nav.classList.add("scroll");
        main.style.marginTop = "60px";
    } else {
        nav.classList.remove("scroll");
        main.style.marginTop = "0px";
    }
}
);