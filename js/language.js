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
            'about_p1': 'Piral kəndi Azərbaycanın şimal-şərqində, Qusar rayonunda yerləşir. Dəniz səviyyəsindən 850 metr yüksəklikdə, 41°3137.05" şimal enliyi və 48°1803.54" şərq uzunluğu koordinatlarında yerləşir. Kəndin ümumi sahəsi 2422 hektardır.',
            'about_p2': 'Kənd şimaldan və qərbdən Böyük Qafqaz dağları ilə əhatələnib. Ətrafı genişyarpaqlı meşələrlə örtülüdür. İqlimi mülayim kontinentaldır',
            'about_p3': 'Piral kəndinin əsası XVIII əsrin əvvəllərində qoyulub. Kəndin adı "pir" (müqəddəs yer) və "al" (ətraf) sözlərindən yaranıb. Tarixi qaynaqlara görə ilk sakinləri Dağıstandan köçüb gəlmiş ləzgi ailələri olub.',
            'culture_dance': 'Ləzgi Rəqsləri',
            'culture_clothes': 'Milli Geyimlər',
            'infra1': 'Piral kənd orta məktəbi (300+ şagird)',
            'infra2': 'Kənd xəstəxanası (10+ nəfərlik tibb işçisi heyəti)',
            'infra3': 'Mədəniyyət evi (150 nəfərlik auditoriya)',
            'infra4': 'Kütləvi kitabxana (5000-dən çox kitab)',
            'infra5': 'İdman kompleksi (futbol meydançası, voleybol meydançası)',
            'map_alt': 'Piral kəndinin xəritədə yeri',
            'history_alt': 'Piral kəndinin tarixi',
            'footer_text': '© 2025 Piral Kəndi. Bütün hüquqlar qorunur.',
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
            'menu_about': 'Haqqında',
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
            'footer_text': '© 2025 Piral Kəndi. Bütün hüquqlar qorunur.',
            'AAA1' : 'Burada yaşayanlar əsasən ləzgi millətinə məxsusdur. 2023-cü il məlumatına görə kəndin əhalisi 3207 nəfərdir. ',
            'KKK1' : 'Piral Kəndi Xəbərləri',
            'pers1' : 'Sovet boyunduruğunun azad edilməsindən cəmi bir il sonra, 1992-ci ildə Barselona Oyunlarında Nazim fəxri kürsünün ən yüksək pilləsinə qalxdı və olimpiya mükafatlarını qazandı. Uzun illər sonra sakitləşən və dəyişilən Bakıda, cüdo üzrə 2018-ci il Dünya Çempionatı dünya dövrəsinin üfüqündə (sentyabr 2018) və Tokio 2020-yə gedən yolda hələ də tatamidə fəal olan bu sadə qəhrəmanla qarşılaşdıq.',
            'pers11' : 'Əgər o, bir az güləşlə başlamışdısa, baş qəhrəman Yasuhiro Yamaşitanın (JPN) Yapon döyüş sənəti ilə məşğul olduğu sənədli filmi kəşf etdikdən sonra diqqəti sürətlə cüdoya yönəldi: "Dostlarımla kubokun sendviç və ya dondurma olduğu kiçik qarşıdurmalar təşkil edirdik. Yamaşitanın görüşlərini görmüşdüm və bu, mənə çoxlu ilham verdi və bu, mənə tez-tez qələbə qazandırdı".',
            'Nazim' : 'Nazim Hüseynov',
            'pers12' : 'Nazim Hüseynov 1969-cu ilin 2 avqust tarixində Bakı şəhərində ləzgi ailəsində anadan olub. Hüseynovun atası əslən Qusar rayonunun Piral kəndidən, anası isə Dağıstanın Axtı rayonundandır. Nazim Hüseynovun birinci məşqçisi Azərbaycanın əməkdar məşqçisi Tərlan Həsənovdur.',
            'menu_people' : 'Tanınmışlar',
            'people_title' : 'Piral Kəndinin Tanınmış Şəxsləri',
            'people_subtitle' : 'Kəndimizdən çıxan görkəmli şəxslər və onların nailiyyətləri',
            'pers2' : 'Sahil Qorxmaz oğlu Şakirov 1998-ci ildə Azərbaycanın şimalında, Qusar rayonunun Piral kəndində anadan olub. Uşaqlıq illərindən idmana maraq göstərən Sahil, fiziki gücü və mübarizə əzmi ilə yaşıdları arasında seçilirdi.',
            'pers21' : 'Sahil Şakirov 2025-ci ildə Serbiyanın Belqrad şəhərində keçirilən IMMAF Avropa Çempionatında çıxış edərək bantamweight (61.2 kq) çəki dərəcəsində Avropa çempionu adını qazanmışdır. Bu uğur onu beynəlxalq arenada tanıtdı və Azərbaycanı MMA sahəsində təmsil edən ən ümidverici gənclərdən biri kimi ön plana çıxardı. Onun döyüş tərzi balanslıdır – həm ayaqüstü (stend-up), həm də yerüstü (grappling, submission) texnikalarda ustalığı ilə seçilir. İndiyədək keçirdiyi döyüşlərin əksəriyyətini qalibiyyətlə başa vuraraq məğlubiyyətsiz rekord saxlamışdır',
            'pers22' : 'Şəxsi həyatına gəlincə, Sahil sadə və zəhmətkeş kənd mühitində böyümüşdür. Ailəsinə və doğma Piral kəndinə dərin bağlılığı ilə tanınır. Onun üçün uğur yalnız rinqdə qalib gəlmək deyil, həm də gənclərə nümunə olmaq və doğma bölgəsini layiqincə təmsil etməkdir. Boş vaxtlarında idman zalında məşq etmək, sağlam qidalanmaq və ailəsi ilə vaxt keçirmək onun həyat tərzinin ayrılmaz hissələrindəndir. O, həmçinin sosial mediada da aktivdir və gənc idmançılara motivasiya verən çıxışları ilə tanınır.',
            'Sahil' : 'Sahil Şakirov'

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
            'about_p1': 'Piral village is located in the north-east of Azerbaijan, in the Gusar district. It is located at an altitude of 850 meters above sea level, at the coordinates of 41°3137.05" north latitude and 48°1803.54" east longitude. The total area of ​​the village is 2422 hectares.',
            'about_p2': 'The village is surrounded by the Greater Caucasus Mountains to the north and west. It is covered with broad-leaved forests. Its climate is temperate continental.',
            'about_p3': 'The village of Piral was founded in the early 18th century. The name of the village comes from the words "pir" (sacred place) and "al" (surroundings). According to historical sources, the first inhabitants were Lezgi families who migrated from Dagestan.',
            'culture_dance': 'Lezgi Dances',
            'culture_clothes': 'Traditional Clothes',
            'infra1': 'Piral village secondary school (300+ students)',
            'infra2': 'Village hospital (10+ medical staff)',
            'infra3': 'Culture house (150-seat auditorium)',
            'infra4': 'Public library (more than 5000 books)',
            'infra5': 'Sports complex (football field, volleyball)',
            'map_alt': 'Location of Piral village on map',
            'history_alt': 'History of Piral village',
            'footer_text': '© 2025 Piral Village. All rights reserved.',
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
            'footer_text': '© 2025 Piral Village. All rights reserved.',
            'AAA1' : 'The people living here are mainly Lezgi. According to 2023 data, the village-s population is 3,207 people.',
            'KKK1' : 'Piral Village News',
            'pers1' : 'Only one year after the liberation of the Soviet yoke, at the Barcelona Games in 1992, Nazim climbed on top of the podium and won Olympic laurels. Many years later, in a city of Baku appeased and transformed, while the Judo World Championships 2018 are looming on the horizon of the world circuit (September 2018) and on the road to Tokyo 2020, we met this simple hero, who is still active on the tatami.',
            'pers11' : 'If he started with a bit of wrestling, his attention quickly turned to judo after he discovered a documentary in which the main character, Yasuhiro Yamashita (JPN), practiced the Japanese martial art: "With my friends we used to organize small confrontations during which the trophy was a sandwich or an ice cream. I had seen Yamashitas matches, and that inspired me a lot and especially it allowed me to win the trophy often."',
            'Nazim' : 'Nazim Huseynov',
            'pers12' : 'Nazim Huseynov was born on August 2, 1969 in Baku to a Lezgi family. Huseynov-s father is originally from the village of Piral in the Gusar region, and his mother is from the Akhty region of Dagestan. Nazim Huseynov-s first coach was the Honored Coach of Azerbaijan, Tarlan Hasanov.',
            'menu_people' : 'Celebrities',
            'people_title' : 'Famous People of Piral Village',
            'people_subtitle' : 'Prominent people from our village and their achievements',
            'pers2' : 'Sahil Gorkhmaz oglu Shakirov was born in 1998 in the village of Piral, Gusar district, in northern Azerbaijan. Sahil, who showed interest in sports since childhood, stood out among his peers with his physical strength and fighting spirit.',
            'pers21' : 'Sahil Shakirov won the European bantamweight (61.2 kg) title at the 2025 IMMAF European Championships in Belgrade, Serbia. This success introduced him to the international arena and brought him to the forefront as one of the most promising young people representing Azerbaijan in the MMA field. His fighting style is balanced - he is distinguished by his mastery of both stand-up (stand-up) and ground (grappling, submission) techniques. He has won most of his fights so far and has an undefeated record',
            'pers22' : 'As for his personal life, Sahil grew up in a simple and hardworking rural environment. He is known for his deep devotion to his family and his native village of Piral. For him, success is not only about winning in the ring, but also being an example to the youth and representing his native region. In his free time, working out at the gym, eating healthy, and spending time with his family are integral parts of his lifestyle. He is also active on social media and is known for his motivational speeches to young athletes.',
            'Sahil' : 'Sahil Shakirov'

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
            'about_p1': 'Село Пирал расположено на северо-востоке Азербайджана, в Гусарском районе. Расположено на высоте 850 метров над уровнем моря, с координатами 41°3137.05" северной широты и 48°1803.54" восточной долготы. Общая площадь села составляет 2422 гектара.',
            'about_p2': 'Село окружено горами Большого Кавказа с севера и запада. Оно покрыто широколиственными лесами. Климат умеренно-континентальный.',
            'about_p3': 'Село Пирал было основано в начале XVIII века. Название села происходит от слов «пир» (святое место) и «ал» (окрестности). Согласно историческим источникам, первыми жителями были лезгинские семьи, переселившиеся из Дагестана.',
            'culture_dance': 'Лезгинские танцы',
            'culture_clothes': 'Национальная одежда',
            'infra1': 'Средняя школа села Пирал (300+ учеников)',
            'infra2': 'Сельская больница (10+ медицинских работников)',
            'infra3': 'Дом культуры (зал на 150 мест)',
            'infra4': 'Общественная библиотека (более 5000 книг)',
            'infra5': 'Спортивный комплекс (футбольное поле, залы для волейбола)',
            'map_alt': 'Расположение села Пирал на карте',
            'history_alt': 'История села Пирал',
            'footer_text': '© 2025 Село Пирал. Все права защищены.',
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
            'footer_text': '© 2025 Село Пирал. Все права защищены.',
            'ppp' : 'В 1921 году был создан Пиральский сельский исполнительный орган Губинского района. В 1930 году был организован Хилийский район (с 1938 года — Гусарский район).',
            'AAA1' : 'Проживающие здесь люди в основном лезгины. По данным на 2023 год население села составляет 3207 человек.',
            'KKK1' : 'Новости деревни Пирал',
            'pers1' : 'Всего через год после освобождения от советского ига, на Играх в Барселоне в 1992 году, Назим поднялся на вершину пьедестала и завоевал олимпийские лавры. Много лет спустя, в умиротворенном и преображенном Баку, в то время как чемпионат мира по дзюдо 2018 года маячил на горизонте мирового турнира (сентябрь 2018 года) и на пути в Токио 2020 года, мы встретили этого простого героя, который все еще активен на татами.',
            'pers11' : 'Если он начинал с борьбы, то его внимание быстро переключилось на дзюдо после того, как он обнаружил документальный фильм, в котором главный герой Ясухиро Ямашита (Япония) практиковал японское боевое искусство: «Мы с друзьями устраивали небольшие стычки, во время которых трофеем был сэндвич или мороженое. Я видел поединки Ямашиты, и это меня очень вдохновляло, и особенно это позволяло мне часто выигрывать трофей».',
            'Nazim' : 'Назим Гусейнов',
            'pers12' : 'Назим Гусейнов родился 2 августа 1969 года в Баку в лезгинской семье. Отец Гусейнова родом из села Пирал Гусарского района, а мать — из Ахтынского района Дагестана. Первым тренером Назима Гусейнова был заслуженный тренер Азербайджана Тарлан Гасанов.',
            'menu_people' : 'Знаменитости',
            'people_title' : 'Знаменитые люди деревни Пирал',
            'people_subtitle' : 'Известные люди нашего села и их достижения',
            'pers2' : 'Сахил Горхмаз оглу Шакиров родился в 1998 году в селе Пирал Гусарского района на севере Азербайджана. Сахил, проявлявший интерес к спорту с детства, выделялся среди сверстников физической силой и бойцовским духом.',
            'pers21' : 'Сахил Шакиров завоевал титул чемпиона Европы в легчайшем весе (61,2 кг) на чемпионате Европы IMMAF 2025 года в Белграде, Сербия. Этот успех вывел его на международную арену и вывел его на передовые позиции как одного из самых перспективных молодых людей, представляющих Азербайджан в области ММА. Его стиль боя сбалансирован - он отличается мастерством как в стойке (стойка), так и в партере (грепплинг, сабмишн). Он выиграл большинство своих боев и имеет непобежденный рекорд',
            'pers22' : 'Что касается личной жизни, Сахил вырос в простой и трудолюбивой сельской среде. Он известен своей глубокой преданностью своей семье и родной деревне Пирал. Для него успех заключается не только в победе на ринге, но и в том, чтобы быть примером для молодежи и представлять свой родной регион. В свободное время занятия в спортзале, здоровое питание и общение с семьей являются неотъемлемой частью его образа жизни. Он также активен в социальных сетях и известен своими мотивационными речами для молодых спортсменов.',
            'Sahil' : 'Сахил Шакиров'
            
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