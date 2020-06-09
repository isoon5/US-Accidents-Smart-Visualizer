<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With");
//header('Access-Control-Allow-Origin: http://localhost/tw/api/view/fetchStatesCases.php');

include_once $_SERVER['DOCUMENT_ROOT'].'/tw/config/Database.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/tw/models/Weather.php';

 $database = new Database();
 $db = $database->connect();

 $state = $_GET['state'];


$weather = new Weather($db);

$result = $weather->getHumidity($state);

$num = $result->rowCount();

if($num > 0){

while($row = $result->fetch(PDO::FETCH_ASSOC)){

    extract($row);
    
    $arrayTemp = array(

        'name' => $state,
        'belowThirty' => $humidityBelowThirty,
        'belowSixty' => $humidityBelowSixty,
        'aboveSixty' => $humidityAboveSixty
       
    );
}
}

echo json_encode($arrayTemp);



?>




