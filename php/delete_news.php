<?php
header('Content-Type: application/json');

$input = json_decode(file_get_contents('php://input'), true);
$id = isset($input['id']) ? intval($input['id']) : null;

if (!$id) {
    echo json_encode(['success' => false, 'error' => 'Xəbər ID-si təqdim edilməyib']);
    exit;
}

$newsFile = '../data/news.json';
$news = file_exists($newsFile) ? json_decode(file_get_contents($newsFile), true) : [];

// Xəbəri tap və sil
$updatedNews = array_filter($news, function($item) use ($id) {
    return $item['id'] != $id;
});

// Fayla yaz
if (file_put_contents($newsFile, json_encode(array_values($updatedNews), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE))) {
    echo json_encode([
        'success' => true,
        'message' => 'Xəbər uğurla silindi!'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'error' => 'Fayla yazıla bilmədi'
    ]);
}
?>