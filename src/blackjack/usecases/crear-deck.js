
//import { shuffle } from 'underscore'; // con la funcion shuffle ya me sirve
import _ from 'underscore';

// Esta función crea un nuevo deck


//Comentarios para aclarar tipos de datos
/**
 * Esta función crea un nuevo deck
 * @param {array<String>} tiposDeCarta Ejemplo:['C','D','H','S']
 * @param {array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {array<String>} return un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => { // paso estos 2 parametros ya que aqui no tengo las variables "tipos" y "especiales" que tenían en el código original.

   //vamos a hacer validaciones para el tipo de dato de entrada. en Typescript no sería necesario porque los datos ya están tipados.

   if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error ('tiposDeCarta es obligatorio como un arreglo de string');
   
   if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error ('tiposEspeciales es obligatorio como un arreglo de string');
   
   
   
    let deck = []; // tengo que iniciar el arreglo deck porque la función sólo me va a buscar en este scope


    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    // deck = shuffle( deck ); si hacemos import sólo del shuffle
    deck = _.shuffle( deck ); // si importamos todo el underscore

    return deck;
}

// Otra forma de hacer exportacion:
// export default crearDeck; 