<?php
// Подключим composer, defines
require_once __DIR__ .'/../../../../../system/defines.php';
require_once __DIR__ .'/../../../../../system/vendor/autoload.php';

// e-mail кому отправить
$emailto = _ADMIN_EMAIL_;

// Получим данные
$data = $_POST;



//Сохраним файл
$attachments=[];
$uploaddir =  __DIR__.'/../../../../../temp/';
if (!file_exists($uploaddir)) {
    mkdir($uploaddir, 0777, true);
}
if(!empty($_FILES['file']['tmp_name'])){
    $uploadfile = $uploaddir . basename($_FILES['file']['name']);
    if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile)) {
        // echo "Файл корректен и был успешно загружен.\n";
    } else {
        echo json_encode(['error' => 1, 'data' => 'Возможная атака с помощью файловой загрузки!']);
        exit();
    }
    $attachments[]=$uploadfile;
}

$message = '<p>Новое сообщение с формы обратной связи.</p>';

// Прикрепим все данные из формы
$message .= \modules\mail\services\sMail::instance()->getBlockBuffer($data);


\core\PHPMail::instance()->sendSMTPMail($emailto, 'Новое сообщение с сайта ЭкоСибирь55', $message, $attachments);

echo json_encode(['error' => 0, 'data' => 'Сообщение успешно отправлено']);
exit();