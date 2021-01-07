<?php

    $host = require('../host.php');

    $email = $_POST['email'];
    $password = $_POST['password'];

    if(!$host) echo("Connection failed: " . mysqli_connect_error());

    $findEmail = 'SELECT * from customer where email = \''.$email.'\'';
    if($output = $host->query($findEmail)){
        while($row = $output->fetch_row()){
            echo('<br>'.$row[5].'<br>'.$password.'<br>');
            if($row[5]===$password){
                session_start();
                $_SESSION['uid'] = $row[0];
                $_SESSION['name'] = $row[1];
                $_SESSION['email'] = $row[4];
                $_SESSION['address'] = $row[3];
                $_SESSION['phone'] = $row[2];
                header('Location: ../');
            }
        }
    }else{
        echo('failed miserabaly');
    }
    $host->close();
?>