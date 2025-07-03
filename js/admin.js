document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const loginSection = document.getElementById('login-section');
    const dashboardSection = document.getElementById('dashboard-section');

    // Admin Girişi
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'admin' && password === 'piral123') {
                loginSection.style.display = 'none';
                dashboardSection.style.display = 'block';
                localStorage.setItem('adminLoggedIn', 'true');
                loadNews();
            } else {
                alert('Yanlış istifadəçi adı və ya şifrə!');
            }
        });
    }

    if (localStorage.getItem('adminLoggedIn') === 'true') {
        if (loginSection) loginSection.style.display = 'none';
        if (dashboardSection) dashboardSection.style.display = 'block';
        loadNews();
    }

    document.getElementById('logout-btn')?.addEventListener('click', function () {
        localStorage.removeItem('adminLoggedIn');
        window.location.href = 'index.html';
    });

    // Tab dəyişmə
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Xəbər əlavə etmə
    const addNewsForm = document.getElementById('add-news-form');
    if (addNewsForm) {
        addNewsForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const title = document.getElementById('news-title').value;
            const date = document.getElementById('news-date').value;
            const summary = document.getElementById('news-summary').value;
            const content = document.getElementById('news-content').value;
            const imageFile = document.getElementById('news-image').files[0];

            const reader = new FileReader();

            reader.onload = function () {
                const newNews = {
                    id: Date.now(),
                    title,
                    date,
                    summary,
                    content,
                    image: reader.result
                };

                fetch('php/save_news.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newNews)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.message) {
                            alert(data.message);
                            addNewsForm.reset();
                            loadNews();
                        } else {
                            alert('Xəta: ' + (data.error || 'Bilinməyən xəta'));
                        }
                    })
                    .catch(err => {
                        console.error(err);
                        alert('Serverə qoşulmaq mümkün olmadı.');
                    });
            };

            if (imageFile) {
                reader.readAsDataURL(imageFile);
            } else {
                alert('Zəhmət olmasa şəkil seçin.');
            }
        });
    }

    // Xəbərləri yüklə
    function loadNews() {
        fetch('data/news.json')
            .then(response => response.json())
            .then(data => {
                displayAdminNews(data);
            })
            .catch(error => {
                console.error('Xəbərlər yüklənərkən xəta:', error);
                displayAdminNews([]);
            });
    }

    // Admin panelində xəbərləri göstər
    function displayAdminNews(news) {
        const adminNewsList = document.getElementById('admin-news-list');
        if (!adminNewsList) return;

        adminNewsList.innerHTML = news.map(item => `
            <div class="news-item">
                <div class="news-item-header">
                    <h4>${item.title}</h4>
                    <span>${item.date}</span>
                </div>
                <div class="news-item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="news-item-content">
                    <p>${item.summary}</p>
                    <div class="news-actions">
                        <button class="btn edit-btn" data-id="${item.id}">Düzəlt</button>
                        <button class="btn delete-btn" data-id="${item.id}">Sil</button>
                    </div>
                </div>
            </div>
        `).join('');

        // Silmə funksiyası
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                alert('Sil funksiyası hələ aktiv deyil.');
            });
        });

        // Redaktə funksiyası
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                alert('Redaktə funksiyası demo rejimindədir.');
            });
        });
    }
});
