<?php 
    // $servername = "localhost";
    // $username = "id15788967_tme2014";
    // $password = "Server@tme2014";
    // $dbname = "id15788967_dbsystem";

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "dbconcert";


    $conn = new mysqli($servername, $username, $password, $dbname);
    if($conn->connect_errno){
        return false;
    }
    
    return $conn;
?>