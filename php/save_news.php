<?php
header('Content-Type: application/json');

// Şəkil yükləmə
$uploadDir = '../images/news/';
$imagePath = '';

if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
    $fileName = uniqid() . '_' . basename($_FILES['image']['name']);
    $targetPath = $uploadDir . $fileName;
    
    if (move_uploaded_file($_FILES['image']['tmp_name'], $targetPath)) {
        $imagePath = 'images/news/' . $fileName;
    }
}

// Xəbər məlumatları
$newsData = [
    'id' => isset($_POST['edit_id']) ? intval($_POST['edit_id']) : time(),
    'title' => $_POST['title'],
    'date' => $_POST['date'],
    'summary' => $_POST['summary'],
    'content' => $_POST['content'],
    'image' => $imagePath ?: (isset($_POST['old_image']) ? $_POST['old_image'] : 'images/default-news.jpg')
];

// Xəbərləri oxu və yenilə
$newsFile = '../data/news.json';
$existingNews = file_exists($newsFile) ? json_decode(file_get_contents($newsFile), true) : [];

if (isset($_POST['edit_id'])) {
    // Redaktə rejimi
    $index = array_search($newsData['id'], array_column($existingNews, 'id'));
    if ($index !== false) {
        // Köhnə şəkli saxla, əgər yeni şəkil yüklənməyibsə
        if (empty($imagePath)) {
            $newsData['image'] = $existingNews[$index]['image'];
        }
        $existingNews[$index] = $newsData;
    }
} else {
    // Yeni xəbər
    array_push($existingNews, $newsData);
}

// Fayla yaz
if (file_put_contents($newsFile, json_encode($existingNews, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE))) {
    echo json_encode([
        'success' => true,
        'message' => isset($_POST['edit_id']) ? 'Xəbər uğurla redaktə edildi!' : 'Xəbər uğurla əlavə edildi!'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'error' => 'Fayla yazıla bilmədi'
    ]);
}
?>