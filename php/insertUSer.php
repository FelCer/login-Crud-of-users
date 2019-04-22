<?php
include("conect.php");

if( isset($_POST["name"]) && isset($_POST["password"])  ) {
    $nombre = $_POST["name"];
    $password = $_POST["password"];
    
    $query = 'insert into goods (name,value) values ("'.$nombre.'",'.$password.'); ';
    
    mysqli_query($con,$query);
    $con->close();
 }
?>