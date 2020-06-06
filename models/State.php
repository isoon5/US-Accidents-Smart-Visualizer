<?php
header('Acces-Control-Allow-Origin: *');
include_once $_SERVER['DOCUMENT_ROOT'].'/tw/config/Database.php';

class State {

private $conn;
private $table = 'state_cases';

public $count;

public function __construct($db){

    $this->conn = $db;
    
}


public function getStateAccidentFreq($state){

    $filter = "'{$state}'";
    $query = 'SELECT u.cases FROM '.$this->table.' u  WHERE u.name LIKE '.$filter.';';

    $stmt = $this->conn->prepare($query);
    $stmt->execute();
   // $stmt->nextRowSet();

    return $stmt;

}

}


