/* 
  ====================================================================
  CONTROL DE ACCESO, CARRUSEL DE DOCENTES Y FORMULARIOS - CBTis 166
  ==================================================================== 
*/

// --- 1. CARRUSEL PRINCIPAL DE INICIO ---
let indiceHero = 0;
const imagenesHero = document.querySelectorAll('#carousel-principal .carousel-img');

function rotarHero() {
    if (imagenesHero.length === 0) return;
    imagenesHero[indiceHero].classList.remove('active');
    indiceHero = (indiceHero + 1) % imagenesHero.length;
    imagenesHero[indiceHero].classList.add('active');
}
// Intervalo de cambio automático (cada 4 segundos)
setInterval(rotarHero, 4000);

// --- FUNCIÓN PARA EL MINI CARRUSEL DE FLECHAS ---
function cambiarMiniSlide(idCarousel, direccion) {
    const contenedor = document.getElementById('mini-carousel-' + idCarousel);
    if (!contenedor) return;

    const slides = contenedor.querySelectorAll('.mini-slide');
    if (slides.length === 0) return;

    let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    if (currentIndex === -1) currentIndex = 0;

    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direccion + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
}

// --- FUNCIÓN PARA EL CARRUSEL DE BOTONES NUMÉRICOS (TARJETA 2) ---
function irASlide(idCarousel, indexDestino) {
    const contenedor = document.getElementById('mini-carousel-' + idCarousel);
    if (!contenedor) return;

    const slides = contenedor.querySelectorAll('.mini-slide');
    const dots = contenedor.querySelectorAll('.dot-btn');

    if (slides.length === 0 || dots.length === 0) return;

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[indexDestino].classList.add('active');
    dots[indexDestino].classList.add('active');
}

// --- 2. BOTONES DE LA SECCIÓN DE CHEFS (DESPLAZAMIENTO HORIZONTAL) ---
const track = document.getElementById('teachers-track');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

if (track && btnPrev && btnNext) {
    btnPrev.addEventListener('click', (e) => {
        e.preventDefault();
        track.scrollBy({ left: -320, behavior: 'smooth' });
    });

    btnNext.addEventListener('click', (e) => {
        e.preventDefault();
        track.scrollBy({ left: 320, behavior: 'smooth' });
    });
}