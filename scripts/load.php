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

    //Tornem un json amb totes les imatges carregades dinàmicament
    echo json_encode($img);
?>