document.addEventListener("DOMContentLoaded", carregarImatges)

//Funció per crear elements al html
function createElement(tag, attributes, content) {
    let element = document.createElement(tag);

    for (let key in attributes)
    {
        element.setAttribute(key, attributes[key]);
    }

    if (content)
    {
        element.innerHTML = content;
    }

    return element;
}

function carregarImatges()
{
    fetch('./scripts/avengers.json').then(response => response.json()).then(avengers =>
    {
        avengers.forEach(avenger => {
            let figure = createElement('figure');

            //Afegim el numero a la figure
            let numberSpan = createElement('span', null, avenger.numero);
            figure.appendChild(numberSpan);

            let picture = createElement('picture');

            // Afegim les sources per a les imatges mitjana y petita a picture
            let medias = ["(max-width: 700px)", "(min-width: 700px) and (max-width: 1300px)"];
            medias.forEach((size) =>
            {
                let source;

                if (size === "(max-width: 700px)")
                {
                    source = createElement('source', { type: 'image/png', media: size, srcset: avenger.imatges.petit });
                }
                else if (size === "(min-width: 700px) and (max-width: 1300px)")
                {
                    source = createElement('source', { type: 'image/png', media: size, srcset: avenger.imatges.mig });
                }

                if (source)
                {
                    picture.appendChild(source);
                }
            });

            // Afegim la imatge gran a picture
            let img = createElement('img', { src: avenger.imatges.gran });
            picture.appendChild(img);

            // Afegim picture a la figure
            figure.appendChild(picture);

            // Afegim figcaption amb el nom a figure
            let nomSpan = createElement('span', null, avenger.nom);
            figure.appendChild(nomSpan);

            // Finalment afegim la figure del avenger al main
            document.querySelector("main").appendChild(figure);
        });
    }).catch(error => console.error('Error al cargar el JSON:', error));
}