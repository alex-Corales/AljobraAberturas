// Selecciona todas las imágenes del carrusel
const images = document.querySelectorAll('.carrusel-images img');
let currentIndex = 0;

// Función para mostrar la imagen actual
function showSlide(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

// Función para mostrar la siguiente imagen
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

// Función para mostrar la imagen anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

// Mostrar la primera imagen al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
