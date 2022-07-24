<?php

    $HOST = "localhost";
    $USER = "root";
    $PASS = "sqlsvpass";
    $DB = "rataorana";

    $connection =  mysqli_connect  ($HOST ,$USER , $PASS, $DB);

    if (!$connection) {
        die ('Error de Conexión:' . mysqli_connect_error());
    }

    //if ($connection) {
    //    echo "Database is connected.";
    //}

?>