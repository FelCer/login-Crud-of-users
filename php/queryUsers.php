<?php
include("conect.php");

$query = 'SELECT *  FROM goods';
    $result = mysqli_query($con,$query) or die('Consulta fallida: ' . mysql_error());
    $json =array();
    while ($line = mysqli_fetch_array($result)) {
      $json[]=array(
          'name' => $line['name'],
          'value' => $line['value'],
          'id' => $line['idgoods']
      );
    }
    $data = json_encode($json);
    echo $data;
    $con->close();
?>