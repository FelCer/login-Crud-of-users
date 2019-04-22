<?php
include("conect.php");

if( isset($_POST["name"]) && isset($_POST["password"])  ) {
  $nombre = $_POST["name"];
  $password = $_POST["password"];
  
  $query = 'select * from goods where name="'.$nombre.'" and value='.$password.';';
  $sql =mysqli_query($con,$query);
  if(mysqli_num_rows($sql) > 0){
    echo 1;
  }else{
    echo 2;
  }
  $con->close();
}
?>