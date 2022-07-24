<?php

    //En este archivo php nos encargaremos de sumar un punto a rata
    //en nuestra base de datos.

    include('config.php');

    $imgurl = $_POST['imgurl'];

    if (isset($imgurl)){
        $query = "UPDATE rataorana SET ratavotes=ratavotes+1 WHERE imgurl='$imgurl'";
        $result = mysqli_query($connection, $query);

            if(!$result) {
                die('Query Error'. msqli_error($connection));    
            }

            echo "Task Added Successfully";
        
    }