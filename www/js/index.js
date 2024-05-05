const navbar = document.querySelector('nav')

const sc = ScrollReveal()

window.onscroll = function () {
    let scroll = scrollY
    if (scroll > 50) {
        navbar.style.background = 'rgba(255,255,255,0.1)';
        navbar.style.backdropFilter = 'blur(5px)';
        navbar.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
        navbar.style.transition = 'all 0.5s ease';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'none';
        navbar.style.boxShadow = 'none';
        navbar.style.transition = 'all 0.5s ease';
    }
}

sc.reveal('.animacionTitulo', {
    duration: 1000,
    origin: 'bottom',
    distance: '30px',
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)'
})
sc.reveal('.animacionParrafo', {
    duration: 800,
    origin: 'left',
    distance: '30px',
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)'
})

sc.reveal('.nosotrosAnimacion', {
    duration: 800,
    origin: 'top',
    distance: '30px',
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)'
})

sc.reveal('.servicioImagen', {
    duration: 800,
    origin: 'top',
    distance: '30px',
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)'
})