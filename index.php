<!DOCTYPE html>

<?php 
    function carregarImgs($imatges, $ruta)
    {
        if ($ruta == "./img/lg/")
        {
            $i = 0;
            foreach($imatges as $imatge)
            {
                $i++;
                echo    "<div id='lg'>
                            <h1>$i</h1><img src='$imatge'></img><h1>" . basename($imatge, ".png") . "</h1>
                        </div>";
            }
        }
        else if ($ruta == "./img/land/")
        {
            $i = 0;
            foreach($imatges as $imatge)
            {
                $i++;
                echo    "<div id='land'>
                            <h2>$i</h2><img src='$imatge'></img><h2>" . basename($imatge, ".png") . "</h2>
                        </div>";
            }
        }
        else if ($ruta == "./img/sm/")
        {
            $i = 0;
            foreach($imatges as $imatge)
            {
                $i++;
                echo    "<div id='sm'>
                            <h3>$i</h3><img src='$imatge'></img><h3>" . basename($imatge, ".png") . "</h3>
                        </div>";
            }
        }
        else
        {
            echo "ERROR";
        }
    }
?>

<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="./icon/shield.png" type="image/png">
        <title>Avengers Page</title>
        <link rel="stylesheet" href="./styles/estils.css">
    </head>

    <body>
        <header>
            <h1>AVENGERS</h1>
        </header>

        <main id="galeria">
            <?php 
                $ruta = "./img/lg/";
                $imatges = glob($ruta . "*.png");
                carregarImgs($imatges, $ruta);

                $ruta = "./img/land/";
                $imatges = glob($ruta . "*.png");
                carregarImgs($imatges, $ruta);

                $ruta = "./img/sm/";
                $imatges = glob($ruta . "*.png");
                carregarImgs($imatges, $ruta);
            ?>
        </main>

        <footer>

        </footer>
    </body>
</html>