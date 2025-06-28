document.addEventListener('DOMContentLoaded', function() {
    // Admin girişi
    const loginForm = document.getElementById('login-form');
    const loginSection = document.getElementById('login-section');
    const dashboardSection = document.getElementById('dashboard-section');
    
    // Demo admin girişi
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
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
    
    // Əgər admin artıq giriş edibsə
    if (localStorage.getItem('adminLoggedIn') === 'true') {
        if (loginSection) loginSection.style.display = 'none';
        if (dashboardSection) dashboardSection.style.display = 'block';
        loadNews();
    }
    
    // Çıxış düyməsi
    document.getElementById('logout-btn')?.addEventListener('click', function() {
        localStorage.removeItem('adminLoggedIn');
        window.location.href = 'index.html';
    });
    
    // Tab sistemini idarə etmə
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Aktiv tabı dəyiş
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Uyğun kontenti göstər
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Xəbər əlavə etmə formu
    const addNewsForm = document.getElementById('add-news-form');
    if (addNewsForm) {
        addNewsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = document.getElementById('news-title').value;
            const date = document.getElementById('news-date').value;
            const summary = document.getElementById('news-summary').value;
            const content = document.getElementById('news-content').value;
            const imageFile = document.getElementById('news-image').files[0];
            
            // Şəkil yükləmə
            let imageUrl = 'images/default-news.jpg';
            if (imageFile) {
                imageUrl = URL.createObjectURL(imageFile);
            }
            
            // Yeni xəbər yarat
            const newNews = {
                id: Date.now(),
                title,
                date,
                summary,
                content,
                image: imageUrl
            };
            
            // Xəbərləri data/news.json faylına əlavə et
            fetch('data/news.json')
                .then(response => response.json())
                .then(data => {
                    data.unshift(newNews); // Ən üstə əlavə et
                    return fetch('js/admin.js', {
                        method: 'POST',
                        body: JSON.stringify({ news: data }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                })
                .then(() => {
                    alert('Xəbər uğurla əlavə edildi!');
                    this.reset();
                    loadNews();
                })
                .catch(error => {
                    console.error('Xəta:', error);
                    alert('Xəbər əlavə edilərkən xəta baş verdi!');
                });
        });
    }
    
    // Xəbərləri yüklə və göstər
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
    
    // Xəbərləri admin panelində göstər
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
        
        // Sil və düzəlt düymələrinə hadisə əlavə et
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const newsId = parseInt(this.getAttribute('data-id'));
                if (confirm('Bu xəbəri silmək istədiyinizə əminsiniz?')) {
                    // Burada real tətbiqdə serverə silmə sorğusu göndərilməlidir
                    alert('Xəbər silindi! (Demo rejimində heç nə silinməyəcək)');
                    loadNews();
                }
            });
        });
        
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const newsId = parseInt(this.getAttribute('data-id'));
                // Burada real tətbiqdə redaktə səhifəsinə yönləndirmə olmalıdır
                alert('Redaktə funksiyası demo rejimində işləmir');
            });
        });
    }
});