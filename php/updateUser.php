<?php
include("conect.php");

if( isset($_POST["name"]) && isset($_POST["password"]) && isset($_POST["id"])) {
    $nombre=$_POST["name"];
    $password=$_POST["password"];
    $id = $_POST["id"];
    $query = 'update goods SET name="'.$nombre.'",value='.$password.' WHERE idgoods='.$id.' ';
    mysqli_query($con,$query);
 }

?>