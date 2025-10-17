// Map Initialization (OpenStreetMap) - YENİ KOORDINATLAR
let map;
let currentSlide = 0;
const totalSlides = 4;

function initMap() {
    // YENİ KOORDINATLAR: Piral başlanğıc və son nöqtələri
    const startLat = 41.49837975969222;
    const startLng = 48.294214063280165;
    const endLat = 41.479011260722224;
    const endLng = 48.27517368419263;

    const centerLat = (startLat + endLat) / 2;
    const centerLng = (startLng + endLng) / 2;

    map = L.map('map').setView([centerLat, centerLng], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // YOL ROTASI (başlanğıc-dan son-a)
    const roadCoords = [
        [startLat, startLng],
        [41.4900, 48.2850], // Aralıq nöqtə 1
        [41.4850, 48.2800], // Aralıq nöqtə 2
        [endLat, endLng]
    ];

    const road = L.polyline(roadCoords, {
        color: '#f1c40f',
        weight: 10,
        opacity: 0.9
    }).addTo(map);

    // MARKERLƏR
    L.marker([startLat, startLng]).addTo(map)
        .bindPopup('<b>🚩 Начало</b><br>Центр деревни Пирал')
        .openPopup();

    L.marker([endLat, endLng]).addTo(map)
        .bindPopup('<b>🏫 Конец</b><br>Школа и центр');

    // YOL MƏLUMATI
    road.bindPopup(`
        <div style="text-align: center; width: 200px;">
            <h3 style="color: #f1c40f;">🛣 Новая дорога</h3>
            <p><strong>Длина:</strong> 4.2 км</p>
            <p><strong>Статус:</strong> Сбор средств</p>
            <p><strong>Срок:</strong> Август 2025</p>
        </div>
    `);
}

// Carousel
function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-img');
    const dots = document.querySelectorAll('.dot');

    currentSlide += direction;
    if (currentSlide >= totalSlides) currentSlide = 0;
    if (currentSlide < 0) currentSlide = totalSlides - 1;

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Initialize Dots
function initDots() {
    const dotsContainer = document.getElementById('carouselDots');
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.onclick = () => {
            currentSlide = i;
            changeSlide(0);
        };
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    }
}

// Auto slide
setInterval(() => changeSlide(1), 5000);

// Contact form
document.addEventListener('DOMContentLoaded', function () {
    initMap();
    initDots();

    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Спасибо! Ваше сообщение отправлено.');
        this.reset();
    });
});
