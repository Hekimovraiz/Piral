document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const loginSection = document.getElementById('login-section');
    const dashboardSection = document.getElementById('dashboard-section');
    const logoutBtn = document.getElementById('logout-btn');
    const addNewsForm = document.getElementById('add-news-form');
    const adminNewsList = document.getElementById('admin-news-list');

    // Tarixi Azərbaycan formatına çevir (dd-mm-yyyy)
    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

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

    // Əgər admin giriş edibsə
    if (localStorage.getItem('adminLoggedIn') === 'true') {
        if (loginSection) loginSection.style.display = 'none';
        if (dashboardSection) dashboardSection.style.display = 'block';
        loadNews();
    }

    // Çıxış etmə
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            localStorage.removeItem('adminLoggedIn');
            window.location.href = 'index.html';
        });
    }

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
    if (addNewsForm) {
        addNewsForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const title = document.getElementById('news-title').value.trim();
            const date = document.getElementById('news-date').value.trim();
            const summary = document.getElementById('news-summary').value.trim();
            const content = document.getElementById('news-content').value.trim();
            const imageInput = document.getElementById('news-image');

            if (!title || !date || !summary || !content || imageInput.files.length === 0) {
                alert("Zəhmət olmasa bütün sahələri doldurun və şəkil seçin.");
                return;
            }

            const formData = new FormData();
            formData.append('title', title);
            formData.append('date', formatDate(date));
            formData.append('summary', summary);
            formData.append('content', content);
            formData.append('image', imageInput.files[0]);

            try {
                const response = await fetch('php/save_news.php', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();

                if (result.success) {
                    alert(result.message);
                    addNewsForm.reset();
                    loadNews();
                } else {
                    alert('Xəta: ' + (result.error || 'Bilinməyən xəta'));
                }
            } catch (error) {
                console.error('Xəta:', error);
                alert('Serverə qoşulmaq mümkün olmadı.');
            }
        });
    }

    // Xəbərləri yüklə
    async function loadNews() {
        try {
            const response = await fetch('data/news.json');
            const data = await response.json();
            displayAdminNews(data);
        } catch (error) {
            console.error('Xəbərlər yüklənərkən xəta:', error);
            displayAdminNews([]);
        }
    }

    // Admin panelində xəbərləri göstər
    function displayAdminNews(news) {
        if (!adminNewsList) return;

        adminNewsList.innerHTML = news.map(item => `
            <div class="news-item" data-id="${item.id}">
                <div class="news-item-header">
                    <h4>${item.title || ''}</h4>
                    <span>${item.date || ''}</span>
                </div>
                <div class="news-item-image">
                    <img src="${item.image}" alt="${item.title || 'news image'}">
                </div>
                <div class="news-item-content">
                    <p>${item.summary || ''}</p>
                    <div class="news-actions">
                        <button class="btn edit-btn" data-id="${item.id}">Düzəlt</button>
                        <button class="btn delete-btn" data-id="${item.id}">Sil</button>
                    </div>
                </div>
            </div>
        `).join('');

        // Silmə funksiyası
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', async function () {
                const id = this.getAttribute('data-id');
                if (confirm('Bu xəbəri silmək istədiyinizə əminsiniz?')) {
                    try {
                        const response = await fetch('php/delete_news.php', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id })
                        });

                        const result = await response.json();

                        if (result.success) {
                            alert(result.message);
                            loadNews();
                        } else {
                            alert('Xəta: ' + result.error);
                        }
                    } catch (error) {
                        console.error('Xəta:', error);
                        alert('Xəbər silinərkən xəta baş verdi.');
                    }
                }
            });
        });

        // Redaktə funksiyası
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const id = this.getAttribute('data-id');
                editNews(id);
            });
        });
    }

    // Xəbəri redaktə etmə
    async function editNews(id) {
        try {
            const response = await fetch('data/news.json');
            const news = await response.json();
            const newsItem = news.find(item => item.id == id);

            if (!newsItem) {
                alert('Xəbər tapılmadı!');
                return;
            }

            // Formu doldur
            document.getElementById('news-title').value = newsItem.title || '';
            document.getElementById('news-date').value = newsItem.date ? newsItem.date.split('-').reverse().join('-') : '';
            document.getElementById('news-summary').value = newsItem.summary || '';
            document.getElementById('news-content').value = newsItem.content || '';

            // Formu redaktə rejiminə keçir
            addNewsForm.dataset.editId = id;
            addNewsForm.querySelector('button[type="submit"]').textContent = 'Redaktəni Yadda Saxla';

            // Şəkil üçün xəbərdarlıq
            alert('Qeyd: Yeni şəkil seçməsəniz, köhnə şəkil saxlanılacaq.');

            // Formu yuxarı çək
            window.scrollTo({
                top: addNewsForm.offsetTop - 100,
                behavior: 'smooth'
            });
        } catch (error) {
            console.error('Xəta:', error);
            alert('Xəbər yüklənərkən xəta baş verdi.');
        }
    }
});
