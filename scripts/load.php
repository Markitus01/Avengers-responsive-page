<?php 
    header('Content-Type: application/json');
    function obtenirImgs($tamany)
    {
        $dir = "../img/$tamany/";
        $img = glob($dir . "*.png"); //Carreguem totes les imatges png del directori

        return $img;
    }

    $tamany = $_GET["tamany"];

    $img = obtenirImgs($tamany);

    echo json_encode($img);
?>