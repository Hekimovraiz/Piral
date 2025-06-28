// Slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[n].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Auto slide change every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Load news from JSON
    loadNews();
});

// Load news from JSON file
function loadNews() {
    fetch('data/news.json')
        .then(response => response.json())
        .then(data => {
            displayLatestNews(data);
            displayAllNews(data);
        })
        .catch(error => console.error('Error loading news:', error));
}

// Display latest 3 news on home page
function displayLatestNews(news) {
    const latestNewsContainer = document.getElementById('latest-news');
    if (!latestNewsContainer) return;
    
    const latestNews = news.slice(0, 3);
    latestNewsContainer.innerHTML = latestNews.map(item => `
        <div class="news-card">
            <img src="${item.image}" alt="${item.title}" class="news-image">
            <div class="news-content">
                <p class="news-date">${item.date}</p>
                <h4 class="news-title">${item.title}</h4>
                <p>${item.summary}</p>
                <a href="news.html#news-${item.id}" class="btn">Ətraflı</a>
            </div>
        </div>
    `).join('');
}

// Display all news on news page
function displayAllNews(news) {
    const newsGrid = document.getElementById('news-grid');
    if (!newsGrid) return;
    
    newsGrid.innerHTML = news.map(item => `
        <div class="news-card" id="news-${item.id}">
            <img src="${item.image}" alt="${item.title}" class="news-image">
            <div class="news-content">
                <p class="news-date">${item.date}</p>
                <h4 class="news-title">${item.title}</h4>
                <p>${item.content}</p>
            </div>
        </div>
    `).join('');
}

