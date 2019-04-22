<?php

    $server="127.0.0.1";
    $user="root";
    $password="";
    $bd="mysql";
    $con= mysqli_connect($server,$user,$password,$bd);
    if($con->connect_error)
        die($con->connect_error);

   
?>

