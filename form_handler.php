<?php

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$name = $data['name'];
$email = $data['email'];
$profession = $data['profession'];
$agreement = $data['agreement'];

$fName = 'data/' . $email . '.txt';
$fp = fopen($fName, 'w');
    
    

$text = $name . PHP_EOL . $email . PHP_EOL . $profession . PHP_EOL . $agreement;

$ok = fwrite($fp, $text);

if ($ok) {
    http_response_code(200);
    $json = [
        'status' => 200,
        'meassage' => 'Success',
        'content' => $data,
    ];
    echo json_encode($json);
}
else {
    http_response_code(500);
    $json = [
        'status' => 500,
        'meassage' => 'Oh no...',
        'content' => $data,
    ];
   echo json_encode($json);
}
