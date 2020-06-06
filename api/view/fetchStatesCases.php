<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With");
//header('Access-Control-Allow-Origin: http://localhost/tw/api/view/fetchStatesCases.php');

include_once $_SERVER['DOCUMENT_ROOT'].'/tw/config/Database.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/tw/models/State.php';



 $database = new Database();
 $db = $database->connect();

 $us_state_accidents = array(
    'AL'=> 0,
    'AK'=> 0,
    'AS'=> 0,
    'AZ'=> 0,
    'AR'=> 0,
    'CA'=> 0,
    'CO'=> 0,
    'CT'=> 0,
    'DE'=> 0,
    'DC'=> 0,
    'FM'=> 0,
    'FL'=> 0,
    'GA'=> 0,
    'GU'=> 0,
    'HI'=> 0,
    'ID'=> 0,
    'IL'=> 0,
    'IN'=> 0,
    'IA'=> 0,
    'KS'=> 0,
    'KY'=> 0,
    'LA'=> 0,
    'ME'=> 0,
    'MH'=> 0,
    'MD'=> 0,
    'MA'=> 0,
    'MI'=> 0,
    'MN'=> 0,
    'MS'=> 0,
    'MO'=> 0,
    'MT'=> 0,
    'NE'=> 0,
    'NV'=> 0,
    'NH'=> 0,
    'NJ'=> 0,
    'NM'=> 0,
    'NY'=> 0,
    'NC'=> 0,
    'ND'=> 0,
    'MP'=> 0,
    'OH'=> 0,
    'OK'=> 0,
    'OR'=> 0,
    'PA'=> 0,
    'PR'=> 0,
    'RI'=> 0,
    'SC'=> 0,
    'SD'=> 0,
    'TN'=> 0,
    'TX'=> 0,
    'UT'=> 0
);

//set_time_limit(500);


$state = new State($db);
foreach($us_state_accidents as $key => $value){

$result = $state->getStateAccidentFreq($key);

 $row = $result->fetchAll(PDO::FETCH_COLUMN);
 $count = $row;
 $us_state_accidents[$key] = $count;
 

}
echo json_encode($us_state_accidents);



?>




