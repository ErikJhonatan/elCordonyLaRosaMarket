const body = document.body;
const loader = document.querySelector('.loader_container');
if (body && loader) {
    const originalOverflow = body.style.overflow;
    body.style.overflow = 'hidden';
    let hideTimer;
    const timer = setTimeout(() => {
        body.style.overflow = originalOverflow;
        loader.style.animation = 'slideOut 1s ease';
        loader.addEventListener('animationend', () => { loader.style.display = 'none'; }, {once: true});
        // Restore the page even when reduced motion suppresses animations.
        loader.style.pointerEvents = 'none';
        hideTimer = setTimeout(() => { loader.style.display = 'none'; }, 1000);
    }, 3000);
    window.addEventListener('pagehide', () => { clearTimeout(timer); clearTimeout(hideTimer); body.style.overflow = originalOverflow; }, {once: true});
}
