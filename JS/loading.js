const body = document.querySelector("body");
// Ocultar la barra de scroll
body.style.overflow = "hidden";

const loader = document.querySelector(".loader_container");

setTimeout(() => {
    setTimeout(() => {
        body.style.overflow = "auto";
        loader.style.animation = "slideOut 1s ease";
        setTimeout(() => {
        loader.style.display = "none";
        }, 1000);
    }, 30);
    }
, 3000);
