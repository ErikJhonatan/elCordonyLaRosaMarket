// Seleccionar los botones de next y prev de wow slider
const next = document.querySelector('.ws_next');
const prev = document.querySelector('.ws_prev');
// Quitar el background de los botones
next.style.background = 'none';
prev.style.background = 'none';
// Hacer tenga un tamaño de 40px
next.style.width = '40px';
next.style.height = '40px';
prev.style.width = '40px';
prev.style.height = '40px';
// Hacer que tenga el display flex
next.style.display = 'flex';
prev.style.display = 'flex';
// Centrar los botones
next.style.justifyContent = 'center';
prev.style.justifyContent = 'center';
next.style.alignItems = 'center';
prev.style.alignItems = 'center';
