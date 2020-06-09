<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With");
header('Content-Type: text/html; charset=utf-8');
//header('Access-Control-Allow-Origin: http://localhost/tw/api/view/fetchStatesCases.php');

include_once $_SERVER['DOCUMENT_ROOT'].'/tw/config/Database.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/tw/models/Weather.php';


 $database = new Database();
 $db = $database->connect();

 $arrayTemp = array(

    'name' => 0,
    'belowMinusFifty' => 0,
    'belowZero' => 0,
    'belowFifty' => 0,
    'belowHundred' => 0,
    'belowHundredFifty' => 0,
    'aboveHundredFifty' => 0

);

$state = $_GET['state'];


$weather = new Weather($db);

$result = $weather->getTemperature($state);

$num = $result->rowCount();


if($num > 0){

while($row = $result->fetch(PDO::FETCH_ASSOC)){

    extract($row);
    
    $arrayTemp = array(

        'name' => $state,
        'belowMinusFifty' => $tempBelowMinusFifty,
        'belowZero' => $tempBelowZero,
        'belowFifty' => $tempBelowFifty,
        'belowHundred' => $tempBelowHundred,
        'belowHundredFifty' => $tempBelowHundredFifty,
        'aboveHundredFifty' => $tempAboveHundredFifty
    
    );
}
}

echo json_encode($arrayTemp);



?>




