// variables
const btnReservaciones = document.getElementById('reservaciones');
const btnInvetarios = document.getElementById('inventarios');
const btnInicio = document.getElementById('inicio');
const reservaciones = document.getElementById('seccionReservaciones');
const menu = document.getElementById('menu');
const contenedorNumeracionHabitaciones = document.getElementById('img');
const arregloHabitaciones = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
var menuEncogido = 1;


// EventListeners
btnReservaciones.addEventListener('click', abrirSeccionReservaciones);
btnInvetarios.addEventListener('click', abrirSeccionInventarios);
btnInicio.addEventListener('click', irInicio);
contenedorNumeracionHabitaciones.addEventListener('click', elegirHabitacion);


// Funciones
// Abrir reservaciones
function abrirSeccionReservaciones () {
    ocultarSectionActiva();
    encogerMenu();
    reservaciones.style.display = 'block';
}

// Abrir inventarios
function abrirSeccionInventarios() {
    ocultarSectionActiva();
    verificarSectionReservacionesExiste = document.getElementById('seccionReservaciones');
    if (verificarSectionReservacionesExiste == null) {
        const sectionReservaciones = document.createElement('section');
        let contenidoReservaciones;
        sectionReservaciones.classList.add('seccion-reservaciones', 'container', 'pt-4', 'pb-4');
        sectionReservaciones.id = 'seccionReservaciones';
        document.body.appendChild(sectionReservaciones);    
        contenidoReservaciones = `
            <div class="container m-3">
                <div class="row">
                    <div class="col-md-6">
                        <div class="img-container">
                            <h3 class="text-center">Control de Inventarios</h3 class="text-center">
                            <div align="center">
                            <img src="img/plano_hotel.jpg" alt="Vista de Reservaciones">
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('seccionReservaciones').innerHTML = contenidoReservaciones;
    }

}

// Ir al Inicio 
function irInicio() {
    ocultarSectionActiva();
    mostrarMenu();
    document.querySelector('.home').style.display = 'block';
}

// Funcion para ocultar las secciones no Activas
function ocultarSectionActiva() {
    const sectionOcultar = document.querySelectorAll('section');   
    for (let i = 1; i < sectionOcultar.length; i++){
        sectionOcultar[i].style.display = 'none';     
    }
    
}
    
// Funcion para encoger el menu
function encogerMenu() {
    setTimeout(function() {
        menu.style.top = '-115px';
    }, 290);
    menu.style.animation= 'encogerMenuAnimacion 0.3s';
}

// Funcion para volver a mostrar el menu
function mostrarMenu() {
    setTimeout(function() {
        menu.style.top = '0';
    }, 290);
    menu.style.animation= 'mostrarMenuAnimacion 0.3s';
}

// Funcion para elegri una habitacion en reservas
function elegirHabitacion(e) {
    e.stopPropagation();
    let pintarContenedor;
    console.log(e.target.textContent);
    for (let i = 0; i <= arregloHabitaciones.length; i++) {
        pintarContenedor = i + 1;
        if (e.target.textContent == arregloHabitaciones[i] && e.target.id != 'img') {
            e.target.parentElement.style.background = "blue";
        }
    }
}