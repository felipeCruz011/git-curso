// Variables
const contenedorImagenes = document.getElementById('carrusel');

// EventListeners
contenedorImagenes.addEventListener('mouseover', ampliarImagen);
//contenedorImagenes.addEventListener('mouseleave', carruselNormal);

// Funciones

function ampliarImagen(e) {
    let figureNodo = document.querySelector('.paraQuitar figure img');
    if (figureNodo != null) {
        console.log('d')
        let figureNodo = document.querySelector('.paraQuitar figure img');
        let paraQuitar = document.querySelector('.paraQuitar figure');
        let imgCarruselFondo = document.createElement('img');
        imgCarruselFondo.setAttribute('src', 'img/fondoCarrusel.jpg')
        imgCarruselFondo.style.objectFit = 'cover';
        imgCarruselFondo.style.width = '100%';
        paraQuitar.replaceChild(imgCarruselFondo, figureNodo);   
    }

    console.log(e.target);
    if (e.target.className === 'carruselImagen') {
        setTimeout(function() {
            let imagenAmpliada;
            imagenAmpliada = e.target.cloneNode();
            let figureNodo = document.querySelector('.paraQuitar figure img');
            document.querySelector('.paraQuitar figure').replaceChild(imagenAmpliada, figureNodo);
            imagenAmpliada.style.width = '100%';
            imagenAmpliada.style.objectFit = 'cover';
            e.target.addEventListener('mouseout', eliminarImg);
        }, 100);

        function eliminarImg() {
            if (figureNodo != null) {
                console.log('d')
                let figureNodo = document.querySelector('.paraQuitar figure img');
                let paraQuitar = document.querySelector('.paraQuitar figure');
                let imgCarruselFondo = document.createElement('img');
                imgCarruselFondo.setAttribute('src', 'img/fondoCarrusel.jpg')
                imgCarruselFondo.style.objectFit = 'cover';
                imgCarruselFondo.style.width = '100%';
                paraQuitar.replaceChild(imgCarruselFondo, figureNodo);   
            }
        }
    }
}