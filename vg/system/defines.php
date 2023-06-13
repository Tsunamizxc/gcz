<?php

//Почта администратора, кому будут приходить письма
define("_ADMIN_EMAIL_", "Eko-Sibir55@yandex.ru");

/*
 * Настройки почты по умолчанию
 */
define('_MAIL_TYPE_', 'SMTP');
define('_SMTP_HOST_', 'smtp.timeweb.ru');
define('_SMTP_LOGIN_', 'commercia@xn--55-9kc1abj2atf8id.xn--p1ai'); // email с которого будут отправлятся письма
define('_SMTP_PASSWORD_', '111082pochta'); // пароль от почты с которой будут отправлятся письма
define('_SMTP_SECURE_', 'ssl'); // tls
define('_SMTP_PORT_', 465);
/*
 * Настрйоки ReCaptha
 */
define('_RECAPTCHA_', false); // Если включить CAPTCHA то true, если отключить то false
define('_PRIVATE_KEY_', ''); //секретный ключ
define('_RESPONCE_NAME_', 'g-recaptcha-response');


