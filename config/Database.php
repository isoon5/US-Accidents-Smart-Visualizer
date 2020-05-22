<?php

class Database{


    private $hostName = "localhoast";
    private $dbName = "";
    private $username = "root";
    private $password = "serverpass";
    private &conn;
    //private $pdo;


    public function connect(){
       
        $this->conn = null;

        try{
            
            $this->conn = new PDO('mysql:host='. $this->host . ';dbname=' . $this->dbName, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        }catch(PDOException e){
            echo 'Connection failed: '.$e->getMessage();
        }

        return $this->conn;
    }

}

