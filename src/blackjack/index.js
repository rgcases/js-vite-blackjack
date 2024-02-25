import _ from 'underscore'; // importamos todo el paquete underscore. Me valdría con hacer una importación {shuffle}, pero en este caso importamos todo
//import { crearDeck as crearNuevoDeck } from './usecases/crear-deck.js'; // puedo cambiarle el nombre en este archivo utilizando "as"
//si utilizo la exportacion por defecto, tendría que importar así:
// import crearNuevoDeck from './usecases/crear-deck';

// También podemos importar por defecto y además alguna variable o metodo concreto:
// import crearNuevoDeck, { miNombre } from './usecases/crear-deck';

//import { pedirCarta as pedirNuevaCarta } from './usecases/pedir-carta.js';
//import { valorCarta as valorNuevaCarta } from './usecases/valor-carta.js';

// Hacemos las importaciones en una línea:

import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML } from './usecases';



/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck         = []; //iniciamos la baraja como array vacío
const tipos      = ['C','D','H','S']; //los 4 palos de la baraja
const especiales = ['A','J','Q','K']; // ases y figuras

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');// lo mete en un array en el que la posición 0 es el primer small que detecta y la 1 el siguiente

deck = crearDeck(tipos, especiales);

// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta( deck);
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    const imgCarta = crearCartaHTML(carta);
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora ,deck);

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora ,deck);
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora ,deck);
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck(tipos, especiales);

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});