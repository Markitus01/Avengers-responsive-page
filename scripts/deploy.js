document.addEventListener("DOMContentLoaded", main);
let lastWidth = window.innerWidth;
window.addEventListener('resize', function()
{
    // Comprobem si la finestra a creuat els limits per fer un resize de les imatges trucant a la funció main només si pasa els limits
    if ((lastWidth <= 700 && window.innerWidth > 700) || 
        (lastWidth > 700 && lastWidth <= 1300 && (window.innerWidth <= 700 || window.innerWidth > 1300)) 
        || (lastWidth > 1300 && window.innerWidth <= 1300))
    {
        console.log("UPDATE IMATGES");
        main();
    }

    // Actualitzem l'ample de la pagina
    lastWidth = window.innerWidth;
});

function main() {
    let galeria = document.getElementById('galeria');

    obtenirTamanyPag().then(tamany =>
    {
        return carregarImg(tamany);
    })
    .then(img =>
    { 
        // Cada cop que canviem d'imatges, netejem i tornem a imprimir
        galeria.innerHTML = "";
        for (let i = 0; i < img.length; i++)
        {
            let imgElement = document.createElement('img');
            imgElement.src = img[i];
            galeria.appendChild(imgElement);
        }
    })
    .catch(error =>
    {
        console.log("NO entra al bucle de obtenir tamany");
        console.error('Error:', error);
    });
}

function obtenirTamanyPag()
{
    return new Promise((resolve) =>
    {
        const WIDTH = window.innerWidth;

        if (WIDTH <= 700)
        {
            resolve('sm');
        }
        else if (WIDTH > 700 && WIDTH <= 1300)
        {
            resolve('land');
        }
        else
        {
            resolve('lg');
        }
    });
}

//Promesa que retornara un json amb tots els avengers, o bé la causa de l'error si no funciona
function carregarImg(tamany)
{
    return new Promise((resolve, reject) =>
    {
        let xhr = new XMLHttpRequest(); 
        xhr.onreadystatechange = function ()
        {
            if (xhr.readyState == 4)
            {
                // console.log(xhr.responseText); aquest console log mirava que tornés un json
                if (xhr.status == 200)
                {
                    let imagenes = JSON.parse(xhr.responseText);
                    resolve(imagenes);
                }
                else
                {
                    reject(xhr.statusText);
                }
            }
        };
        xhr.open('GET', './scripts/load.php?tamany=' + tamany, true);
        xhr.send();
    });
}