<?php 
    $host = require('../host.php');
    $email = $_POST['email'];
    $password = $_POST['password'];
    $auth = 'SELECT `password` from `customer` where `email` = \''.$email.'\'';

    $value = $host->query($auth)->fetch_row();
    echo $value[0] == $password ? 'success' : 'failed';
?>