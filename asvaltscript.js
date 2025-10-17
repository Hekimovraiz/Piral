let map;
let currentSlide = 0;
const totalSlides = 4;

function initMap() {
    const roadCoords = [
        [41.49840928838477, 48.2942075434036],
        [41.49782506422974, 48.292583498610405],
        [41.49739746818773, 48.29186459743658],
        [41.4975101397748, 48.28958662198602],
        [41.496758992158426, 48.28943618964494],
        [41.49582254006677, 48.28799937041494],
        [41.49587075569661, 48.28723762303616],
        [41.49271419363961, 48.28690423742677],
        [41.491125531559575, 48.284715829541234],
        [41.48881207266099, 48.28249260138276],
        [41.48536555790238, 48.27885147351034],
        [41.483072075797246, 48.27716344280398],
        [41.479448364972335, 48.2755432912965],
        [41.47889974757609, 48.275138901013634]
    ];

    const centerLat = roadCoords.reduce((sum, coord) => sum + coord[0], 0) / roadCoords.length;
    const centerLng = roadCoords.reduce((sum, coord) => sum + coord[1], 0) / roadCoords.length;

    // 🛰️ CANLI UYDU GÖRÜNTÜSÜ - EVLER GÖRÜNÜR!
    map = L.map('map', {
        center: [centerLat, centerLng],
        zoom: 18,
        zoomControl: true,
        layers: [
            L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: '© Esri & OpenStreetMap'
            })
        ]
    });

    // 🛣 SARı QALIN YOL (2.9 km)
    const road = L.polyline(roadCoords, {
        color: '#f1c40f',
        weight: 14,
        opacity: 1,
        smoothFactor: 1
    }).addTo(map);

    // 🚩 BAŞLANĞIÇ (SARI)
    L.marker(roadCoords[0], {
        icon: L.divIcon({
            html: '<div style="background: #f1c40f; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px #f1c40f;"></div>',
            iconSize: [30, 30],
            className: 'custom-marker'
        })
    }).addTo(map)
        .bindPopup('<h3 style="color: #f1c40f;">🚩 Начало</h3><p></p>')
        .openPopup();

    // 🏁 SON (QIRMIZI)
    L.marker(roadCoords[roadCoords.length - 1], {
        icon: L.divIcon({
            html: '<div style="background: #e74c3c; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px #e74c3c;"></div>',
            iconSize: [30, 30],
            className: 'custom-marker'
        })
    }).addTo(map)
        .bindPopup('<h3 style="color: #e74c3c;">🏁 Конец</h3><p></p>');

    // 📋 YOL MƏLUMAT
    road.bindPopup(`
        <div style="width: 280px; background: #2c3e50; color: white; padding: 15px; border-radius: 10px;">
            <h3 style="color: #f1c40f; margin: 0 0 10px;">🛣 Новая асфальтированная дорога</h3>
            <hr style="border: 1px solid #f1c40f;">
            <p><strong>📏 Длина:</strong> <span style="color: #f1c40f;">2.9 км</span></p>
            <p><strong>💰 Бюджет:</strong> <span style="color: #f1c40f;">200 000 ₼</span></p>
            <p><strong>⏰ Срок:</strong> <span style="color: #f1c40f;">Август 2026</span></p>
            <p><strong>🚧 Статус:</strong> <span style="color: #e74c3c;">Сбор средств</span></p>
            <hr style="border: 1px solid #f1c40f;">
            <small><strong>14 точек маршрута</strong></small>
        </div>
    `);

    // AVTO ZOOM YOLA
    map.fitBounds(road.getBounds().pad(0.05));
}

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

function initDots() {
    const dotsContainer = document.getElementById('carouselDots');
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.onclick = () => { currentSlide = i; changeSlide(0); };
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    }
}

setInterval(() => changeSlide(1), 5000);

document.addEventListener('DOMContentLoaded', function () {
    initMap();
    initDots();
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Спасибо! Ваше сообщение отправлено.');
        this.reset();
    });
});
