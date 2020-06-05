<?php

class Database{


    private $hostName = "localhost";
    private $dbName = "avi";
    private $username = "root";
    private $password = "serverpass"; 
    private $conn;
    
    
    public function connect() {
    
    $this->conn = null;
    try{

        $this->conn = new PDO('mysql:host='.$this->hostName.';dbname='.$this->dbName, 
        $this->username, $this->password);

        $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->conn->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);

    }catch(PDOException $e){
        echo 'Connection failed: '.$e->getMessage();
    }
        return $this->conn;
    }
       

      




}

