<?php
include("conect.php");

if( isset($_POST["id"])) {
    $id = $_POST["id"];
    $query = 'delete from goods where idgoods='.$id.'; ';
    mysqli_query($con,$query);
    $con->close();
 }
?>