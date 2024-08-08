"use strict";

/*
 ! EJERCICIO:
 * - Crea ejemplos de funciones básicas que representen las diferentes
 *   posibilidades del lenguaje:
 *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 * - Comprueba si puedes crear funciones dentro de funciones.
 * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
 *
 TODO: DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 *
 * Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
 * Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
 */

// Funciones básicas
function funcionBasica() {
  console.log("Hola Mundo");
}

function funcionConParametro(parametro) {
  console.log(parametro);
}

function funcionConParametros(num1, num2) {
  console.log(num1 + num2);
}

function funcionConRetorno(num1, num2) {
  return num1 + num2;
}

// Funciones dentro de funciones
function funcionExterna() {
  let num = 10;
  let num2 = 5;
  const funcionInterna = (num1, num2) => {
    let resultado = num1 + num2;
    return resultado;
  };
  console.log(funcionInterna(num, num2));
}
funcionExterna();

// Funciones ya creadas
let ranNum = Math.random();
console.log(ranNum);

// Variable LOCAL y GLOBAL
let variableGlobal = 10;

function variableLocal() {
  let variableLocal = 5;
  console.log(variableLocal);
}
variableLocal();

// DIFICULTAD EXTRA
function funcionExtra(cad1, cad2) {
  let contador = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log(cad1);
    }
    if (i % 5 === 0) {
      console.log(cad2);
    }
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(cad1 + " " + cad2);
    } else {
      console.log(i);
      contador++;
    }
  }
  console.log("Cantidad de numeros impresos: ", contador);
}

funcionExtra("Fizz", "Buzz");

