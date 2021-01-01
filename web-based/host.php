<?php 
    // $servername = "localhost";
    // $username = "id15788967_tme2014";
    // $password = "Server@tme2014";
    // $dbname = "id15788967_dbsystem";

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "dbconcert";


    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if(!$conn){
        return false;
    }

    return $conn;
?>