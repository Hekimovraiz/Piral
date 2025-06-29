document.addEventListener('DOMContentLoaded', function() {
    // Complete translations for all languages
    const translations = {
        'az': {
            // Menu
            'menu_home': 'Ana Səhifə',
            'menu_about': 'Haqqında',
            'menu_gallery': 'Qalereya',
            'menu_news': 'Xəbərlər',
            'menu_contact': 'Əlaqə',
            'menu_admin': 'Admin',
            
            // About Page
            'title_about': 'Piral Kəndi - Haqqımızda',
            'about_title': 'Piral Kəndi Haqqında',
            'about_subtitle': 'Qədim tarixi və zəngin mədəniyyəti ilə tanınan kəndimiz',
            'about_location': 'Coğrafi Mövqe',
            'about_history': 'Tarixi Arxa Plan',
            'about_culture': 'Mədəniyyət və Ənənələr',
            'about_infrastructure': 'İnfrastruktur',
            'about_p1': 'Piral kəndi Azərbaycanın şimal-şərqində, Qusar rayonunun ən gözəl dağ kəndlərindən biridir...',
            'about_p2': 'Piral kəndinin tarixi XVIII əsrin əvvəllərinə təsadüf edir...',
            'about_p3': 'Piral kəndində ənənəvi ləzgi mədəniyyəti bütün canlılığı ilə qorunub saxlanılır...',
            'culture_dance': 'Ləzgi Rəqsləri',
            'culture_clothes': 'Milli Geyimlər',
            'infra1': 'Piral kənd orta məktəbi (300+ şagird)',
            'infra2': 'Kənd xəstəxanası (10+ nəfərlik tibb işçisi heyəti)',
            'infra3': 'Mədəniyyət evi (150 nəfərlik auditoriya)',
            'infra4': 'Kütləvi kitabxana (5000-dən çox kitab)',
            'infra5': 'İdman kompleksi (futbol meydançası, voleybol meydançası)',
            'map_alt': 'Piral kəndinin xəritədə yeri',
            'history_alt': 'Piral kəndinin tarixi',
            'footer_text': '© 2026 Piral Kəndi. Bütün hüquqlar qorunur.',
            'footer_privacy': 'Məxfilik Siyasəti',
            'footer_terms': 'İstifadə Qaydaları',
            // ... other translations ...
            'about_title': 'Piral Kəndi Haqqında',
            'about_subtitle': 'Qədim tarixi və zəngin mədəniyyəti ilə tanınan kəndimiz',
            'about_culture': 'Mədəniyyət',
            'about_p6': 'Piral kəndində ənənəvi ləzgi mədəniyyəti qorunub saxlanılır. İllik "Ləzgi Mədəniyyəti Günü", "Novruz" və digər milli bayramlar böyük şənliklərlə qeyd olunur.',
            'about_population': 'Əhali',
            'about_p5': '2023-cü il məlumatına görə kəndin əhalisi 2097 nəfərdir. Əhalinin əsas hissəsini ləzgilər təşkil edir. Kənddə əsasən azərbaycan və ləzgi dillərində danışılır.',
            'ppp' : '1921-ci ildə Quba rayonunun Piral kənd icra nümayəndəliyi yaradılıb. 1930-cu ildə Xılı rayonu (1938-ci ildən Qusar rayonu) təşkil edilib.',
            'title_home': 'Piral Kəndi - Ana Səhifə',
            'site_title': 'PIRAL',
            'menu_home': 'Ana Səhifə',
            'menu_about': 'Haqqımızda',
            'menu_news': 'Xəbərlər',
            'menu_contact': 'Əlaqə',
            'menu_admin': 'Admin',
            'welcome_title': 'Piral Kəndinə Xoş Gəlmisiniz',
            'welcome_subtitle': 'Qədim tarixi və təbii gözəlliyi ilə məşhur olan Piral kəndi',
            'about_section': 'Piral Haqqında',
            'about_summary': 'Piral — Azərbaycan Respublikasının Qusar rayonunda yerləşən kənd. Rayon mərkəzindən 20 km şimal-qərbdə yerləşir.',
            'btn_read_more': 'Daha çox',
            'gallery_title': 'Kəndimizdən Görüntülər',
            'slide1_alt': 'Piral dağları',
            'slide2_alt': 'Piral bulağı',
            'slide3_alt': 'Piral məktəbi',
            'latest_news': 'Son Xəbərlər',
            'btn_all_news': 'Bütün xəbərlər',
            'footer_text': '© 2026 Piral Kəndi. Bütün hüquqlar qorunur.',
            'AAA1' : 'Burada yaşayanlar əsasən ləzgi millətinə məxsusdur. 2023-cü il məlumatına görə kəndin əhalisi 3207 nəfərdir. ',
            'KKK1' : 'Piral Kəndi Xəbərləri'
        },
        'en': {
            // Menu
            'menu_home': 'Home',
            'menu_about': 'About',
            'menu_gallery': 'Gallery',
            'menu_news': 'News',
            'menu_contact': 'Contact',
            'menu_admin': 'Admin',
            
            // About Page
            'title_about': 'Piral Village - About',
            'about_title': 'About Piral Village',
            'about_subtitle': 'Our village known for its ancient history and rich culture',
            'about_location': 'Geographic Location',
            'about_history': 'Historical Background',
            'about_culture': 'Culture and Traditions',
            'about_infrastructure': 'Infrastructure',
            'about_p1': 'Piral village is located in the northeast of Azerbaijan...',
            'about_p2': 'The history of Piral village dates back to the early 18th century...',
            'about_p3': 'Traditional Lezgi culture is preserved in all its vitality in Piral village...',
            'culture_dance': 'Lezgi Dances',
            'culture_clothes': 'Traditional Clothes',
            'infra1': 'Piral village secondary school (300+ students)',
            'infra2': 'Village hospital (10+ medical staff)',
            'infra3': 'Culture house (150-seat auditorium)',
            'infra4': 'Public library (more than 5000 books)',
            'infra5': 'Sports complex (football field, volleyball)',
            'map_alt': 'Location of Piral village on map',
            'history_alt': 'History of Piral village',
            'footer_text': '© 2023 Piral Village. All rights reserved.',
            'footer_privacy': 'Privacy Policy',
            'footer_terms': 'Terms of Use',
            // ... other translations ...
            'about_title': 'About Piral Village',
            'about_subtitle': 'Our village known for its ancient history and rich culture',
            'about_culture': 'Culture',
            'about_p6': 'Traditional Lezgi culture is preserved in Piral village. Annual "Lezgi Culture Day", "Novruz" and other national holidays are celebrated with great festivities.',
            'about_population': 'Population',
            'about_p5': 'According to 2023 data, the population of the village is 2097 people. The majority of the population are Lezgins. Mainly Azerbaijani and Lezgi languages are spoken in the village.',
            'ppp' : 'In 1921, the Piral village executive office of the Guba region was established. In 1930, the Khili region (Gusar region since 1938) was organized.',
            'title_home': 'Piral Village - Home',
            'site_title': 'PIRAL',
            'menu_home': 'Home',
            'menu_about': 'About',
            'menu_news': 'News',
            'menu_contact': 'Contact',
            'menu_admin': 'Admin',
            'welcome_title': 'Welcome to Piral Village',
            'welcome_subtitle': 'Piral village famous for its ancient history and natural beauty',
            'about_section': 'About Piral',
            'about_summary': 'Piral is a village in Gusar District of Azerbaijan. It is located 20 km northwest of the district center.',
            'btn_read_more': 'Read more',
            'gallery_title': 'Images from Our Village',
            'slide1_alt': 'Piral mountains',
            'slide2_alt': 'Piral spring',
            'slide3_alt': 'Piral school',
            'latest_news': 'Latest News',
            'btn_all_news': 'All news',
            'footer_text': '© 2026 Piral Village. All rights reserved.',
            'AAA1' : 'The people living here are mainly Lezgi. According to 2023 data, the village-s population is 3,207 people.',
            'KKK1' : 'Piral Village News'
        },
        'ru': {
            // Menu
            'menu_home': 'Главная',
            'menu_about': 'О нас',
            'menu_gallery': 'Галерея',
            'menu_news': 'Новости',
            'menu_contact': 'Контакты',
            'menu_admin': 'Админ',
            
            // About Page
            'title_about': 'Село Пирал - О нас',
            'about_title': 'О селе Пирал',
            'about_subtitle': 'Наше село, известное своей древней историей и богатой культурой',
            'about_location': 'Географическое положение',
            'about_history': 'Историческая справка',
            'about_culture': 'Культура и традиции',
            'about_infrastructure': 'Инфраструктура',
            'about_p1': 'Село Пирал расположено на северо-востоке Азербайджана...',
            'about_p2': 'История села Пирал восходит к началу XVIII века...',
            'about_p3': 'Традиционная лезгинская культура сохраняется в селе Пирал во всей своей жизненности...',
            'culture_dance': 'Лезгинские танцы',
            'culture_clothes': 'Национальная одежда',
            'infra1': 'Средняя школа села Пирал (300+ учеников)',
            'infra2': 'Сельская больница (10+ медицинских работников)',
            'infra3': 'Дом культуры (зал на 150 мест)',
            'infra4': 'Общественная библиотека (более 5000 книг)',
            'infra5': 'Спортивный комплекс (футбольное поле, залы для волейбола)',
            'map_alt': 'Расположение села Пирал на карте',
            'history_alt': 'История села Пирал',
            'footer_text': '© 2026 Село Пирал. Все права защищены.',
            'footer_privacy': 'Политика конфиденциальности',
            'footer_terms': 'Условия использования',
            'about_title': 'О селе Пирал',
            'about_subtitle': 'Наше село, известное своей древней историей и богатой культурой',
            'about_culture': 'Культура',
            'about_p6': 'В селе Пирал сохраняется традиционная лезгинская культура. Ежегодно отмечаются "День лезгинской культуры", "Новруз" и другие национальные праздники.',
            'about_population': 'Население',
            'about_p5': 'По данным 2023 года, население села составляет 2097 человек. Большую часть населения составляют лезгины. В селе в основном говорят на азербайджанском и лезгинском языках.',
            'title_home': 'Село Пирал - Главная',
            'site_title': 'ПИРАЛ',
            'menu_home': 'Главная',
            'menu_about': 'О нас',
            'menu_news': 'Новости',
            'menu_contact': 'Контакты',
            'menu_admin': 'Админ',
            'welcome_title': 'Добро пожаловать в село Пирал',
            'welcome_subtitle': 'Село Пирал, известное своей древней историей и природной красотой',
            'about_section': 'О Пирале',
            'about_summary': 'Пирал — село в Губинском районе Азербайджана. Расположено в 20 км к северо-западу от районного центра.',
            'btn_read_more': 'Подробнее',
            'gallery_title': 'Фотографии нашего села',
            'slide1_alt': 'Горы Пирала',
            'slide2_alt': 'Родник Пирала',
            'slide3_alt': 'Школа Пирала',
            'latest_news': 'Последние новости',
            'btn_all_news': 'Все новости',
            'footer_text': '© 2026 Село Пирал. Все права защищены.',
            'ppp' : 'В 1921 году был создан Пиральский сельский исполнительный орган Губинского района. В 1930 году был организован Хилийский район (с 1938 года — Гусарский район).',
            'AAA1' : 'Проживающие здесь люди в основном лезгины. По данным на 2023 год население села составляет 3207 человек.',
            'KKK1' : 'Новости деревни Пирал'
            
        }
    };

    // Function to set language
    function setLanguage(lang) {
        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Update alt attributes for images
        document.querySelectorAll('[data-translate-alt]').forEach(element => {
            const key = element.getAttribute('data-translate-alt');
            if (translations[lang] && translations[lang][key]) {
                element.setAttribute('alt', translations[lang][key]);
            }
        });

        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Save preference to localStorage
        localStorage.setItem('preferredLanguage', lang);
    }

    // Initialize language
    function initLanguage() {
        const savedLang = localStorage.getItem('preferredLanguage');
        const browserLang = navigator.language.substring(0, 2);
        const defaultLang = 'az';
        
        const langToSet = savedLang || (['az', 'en', 'ru'].includes(browserLang) ? browserLang : defaultLang);
        setLanguage(langToSet);
    }

    // Language button event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setLanguage(this.dataset.lang);
        });
    });

    // Initialize
    initLanguage();
});