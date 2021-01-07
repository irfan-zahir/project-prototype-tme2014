<?php
    
    $connecting = require('../host.php');

    $name = $_POST['regFN'];
    $phone = $_POST['regMPN'];
    $email = $_POST['regEmail'];
    $password = $_POST['regPwd'];

    if(!$connecting){
        echo("Connection failed: " . mysqli_connect_error());
    }

    $register_command = "INSERT INTO customer (name, phone, email, password) VALUES ('$name', '$phone', '$email', '$password')";

    if($connecting -> query($register_command) === TRUE){
        session_start();
        $_SESSION['id'] = session_id();
        $_SESSION['email'] = $email;
        header("Location: ../customer/dashboard/dashboard.html");
    }else{
        header("Location: ../");
    }

?>