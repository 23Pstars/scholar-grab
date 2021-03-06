<?php

include_once 'db.php';

$pdo = new PDO('mysql:host=' . HOST . ';dbname=' . NAME, USER, PASS);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

header('Access-Control-Allow-Origin: *');
$data = json_decode(file_get_contents("php://input"));

foreach($data as $d){
    $d[] = date('Y-m-d H:i:s');
    $insert = $pdo->prepare('INSERT INTO `' . TABLE . '` VALUES (?, ?, ?, ?, ?, ?)');
    $insert->execute($d);
}

echo 'ok';

// $out = fopen('data.csv', 'a+');
// fputcsv($out, $data);