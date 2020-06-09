<?php
header('Acces-Control-Allow-Origin: *');
include_once $_SERVER['DOCUMENT_ROOT'].'/tw/config/Database.php';

class Weather {

private $conn;
private $table = 'populate_factors';

public $count;

public function __construct($db){

    $this->conn = $db;
    
}


public function getTemperature($state){

    $filter = "'{$state}'";
    $query = 'SELECT p.tempBelowMinusFifty, p.tempBelowZero, p.tempBelowFifty, p.tempBelowHundred, p.tempBelowHundredFifty, p.tempAboveHundredFifty FROM '.$this->table.' p  WHERE p.name LIKE '.$filter.';';

    $stmt = $this->conn->prepare($query);
    $stmt->execute();
   // $stmt->nextRowSet();

    return $stmt;

}

public function getHumidity($state){

        
    $filter = "'{$state}'";
    $query = 'SELECT p.humidityBelowThirty, p.humidityBelowSixty, p.humidityAboveSixty FROM '.$this->table.' p  WHERE p.name LIKE '.$filter.';';

    $stmt = $this->conn->prepare($query);
    $stmt->execute();
   // $stmt->nextRowSet();

    return $stmt;


}

public function getPressure($state){

        
    $filter = "'{$state}'";
    $query = 'SELECT p.pressureBelowTen, p.pressureBelowTwenty, p.pressureAboveTwenty FROM '.$this->table.' p  WHERE p.name LIKE '.$filter.';';

    $stmt = $this->conn->prepare($query);
    $stmt->execute();
   // $stmt->nextRowSet();

    return $stmt;


}


public function getVisibility($state){

        
    $filter = "'{$state}'";
    $query = 'SELECT p.visibilityBelowThirty, p.visibilityBelowSixty, p.visibilityBelowHundred, p.visibilityAboveHundred FROM '.$this->table.' p  WHERE p.name LIKE '.$filter.';';

    $stmt = $this->conn->prepare($query);
    $stmt->execute();
   // $stmt->nextRowSet();

    return $stmt;


}

public function getWindSpeed($state){

        
    $filter = "'{$state}'";
    $query = 'SELECT p.windSpeedBelowThirty, p.windSpeedBelowSixty, p.windSpeedBelowHundred, p.windSpeedBelowTwoHundred, p.windSpeedBelowThreeHundred, p.windSpeedAboveThreeHundred FROM '.$this->table.' p  WHERE p.name LIKE '.$filter.';';

    $stmt = $this->conn->prepare($query);
    $stmt->execute();
   // $stmt->nextRowSet();

    return $stmt;


}

public function getWeather($state){

        
    $filter = "'{$state}'";
    $query = 'SELECT p.clearWeather, p.overcast, p.snow, p.fog, p.rain, p.drizzle, p.windy, p.hail, p.storm, p.tornado FROM '.$this->table.' p  WHERE p.name LIKE '.$filter.';';

    $stmt = $this->conn->prepare($query);
    $stmt->execute();
   // $stmt->nextRowSet();

    return $stmt;


}


public function getDayTime($state){

        
    $filter = "'{$state}'";
    $query = 'SELECT p.dayTime, p.nightTime FROM '.$this->table.' p  WHERE p.name LIKE '.$filter.';';

    $stmt = $this->conn->prepare($query);
    $stmt->execute();
   // $stmt->nextRowSet();

    return $stmt;


}


}


