<?php

$errors = array();
$form_data = array();
$name = htmlspecialchars($_POST['name']);
$phone = htmlspecialchars($_POST['phone']);

if ($name == "")
{
    $errors['name'] = '<div class="red-errors">Введите Ваше имя</div>';
}
if ($phone == "")
{
  $errors['phone'] = '<div class="red-errors">Введите Ваш телефон</div>';
}
if (!empty($errors))
{
    $form_data['success'] = false;
    $form_data['errors']  = $errors;
}
else
{
  $message = '<h3>Заявка с сайта</h3>';
  $message = 'Имя отправителя: '.$name.'<br />
  Телефон: '.$phone.'<br />
  ';

  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=utf8' . "\r\n";
  $headers .= 'From: "Мастер окон"'.$eol;

  if (mail('hts6456@yandex.ru', 'Заявка с сайта', $message, $headers))
  {
    $form_data['success'] = true;
    $form_data['posted'] = '<div class="comment-big h3 text-center">Ваше сообщение успешно отправлено!</div><div class="comment-little">Наш менеджер ответит вам в ближайшее время</div>';
}
else
{
    $errors['name'] = 'Ошибка отправки письма';
}

}


echo json_encode($form_data);

?>
