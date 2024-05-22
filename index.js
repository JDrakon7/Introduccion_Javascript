// Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
//   comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado
//SetInterval
// Diferencias Clave
// setInterval: Ejecuta la función repetidamente cada intervalo de tiempo específico. Es más sencillo para tareas repetitivas que deben detenerse después de un cierto punto.
// setTimeout: Ejecuta la función una sola vez después del retraso especificado, y requiere anidación para repetir la tarea. Es más flexible en términos de control de la ejecución de la función.
function imprimir_numeros_interval(desde, hasta) {  //Declarando la funcion  imprimir_numeros_interval(desde, hasta) //declara una función que toma dos parámetros: desde y hasta.
  let contador = desde  //inicializar variable contador con el valor = desde
  let intervalo = setInterval(function () { //establece un intervalo que se ejecuta cada segundo o 1000 milisegundos 
    console.log(contador)  //imprimir el valor actual de contador 
    contador++ // incrementar el valor del contador de 1 en  1
    if (contador === hasta + 1) { //verificar si el valor de contador es exactamente igual al valor hasta + 1 , y si se cumple esto
      clearInterval(intervalo); // se detiene el intervalo con cleanInterval  e imprimir interval terminado 
      console.log("Interval Terminado")
    }
  }, 1000)  // Esta función imprimirá los números desde desde hasta hasta cada segundo, y luego se detendrá.
}
imprimir_numeros_interval(1, 10)
// setTimeout anidado 
function imprimir_numeros_timeout(desde, hasta) { //Declaracion de la funcion imprimir_numeros_timeout con los parametros desde hasta
  let contador = desde  //inicialiazcion del contador con el valor =  desde 
  setTimeout(function anidado() { // Inicio del temporizador que ejecuta la funcion anidado despues de 1 seg o 1000 milisegundos
    console.log(contador) //imprimir el valor actual de contador 
    if (contador < hasta) {  // identifica si el valor de contador es < menor que hasta , si es asi 
      setTimeout(anidado, 1000)  // se ejecutara la funcion anidado despues de un segundo 
    }
    contador++ // incrementar el valor de contador de 1 en 1 
  }, 1000)
}
imprimir_numeros_timeout(1, 10)

//En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
//pesado que demora más de 100 ms en finalizar.
//¿Cuándo se ejecutará la función programada y por qué se ejecutará?
//a) Después del bucle.
//b) Antes del bucle.
//c) Al comienzo del bucle.
//¿Qué va a mostrar alert()
let i = 0; // Declarar de la variable i = 0 
setTimeout(() => alert(i), 100); // Programar una funcion que se ejecutara cada 100 milisegundos , el cual mostrar un alert con el valor de i
for (let j = 0; j < 100000000; j++) { // Se ejecuta el ciclo pesado cada 100 milisegundos 
  i++
}
// RESPUESTA CORRECTA LA B : La funcion se ejecuta despues de que el bucle "for" haya terminado , debido a que se bloquea mientras este ejecutandose
// Que va a mostrar el alert() Mostrata el la variable i , es decir el valor 0

// Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • obtenga el resultado
// • lo pushee a un nuevo array
// • devuelva el array final con el resultado de cada una de las llamadas al callback.
const numeros = [5, 8, 19, 22] // Definir el array numeros 
const duplicar = x => x * 2 //Definir la funcion duplicar
const resultado = numeros.map(duplicar) //  Uso de Map  , el cual realizara , Tome cada elemento del array numeros , Aplique la función duplicar a cada elemento , Cree un nuevo array resultado con los resultados de cada llamada a duplicar
console.table(resultado)

// Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro".
function filter(array, callback) {
  // Crear función filter con dos parámetros (array, callback)
  // array: el array a filtrar
  // callback: la función que decide si un elemento pasa el filtro
  let resultado = []; 
  // Crear un array vacío para almacenar los elementos que pasen el filtro
  for (let i = 0; i < array.length; i++) {
    // Recorrer cada elemento en el array de entrada usando un bucle for
    // i es el índice del elemento actual
    if (callback(array[i])) {
      // Si el callback devuelve true para el elemento actual
      // array[i] es el elemento actual del array
      resultado.push(array[i]); 
      // Agregar el elemento actual al array resultado
    }
  }
  return resultado; 
  // Devolver el array con los elementos que pasaron el filtro
}

// Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true
function every (array , callback){
  // Crear función every con dos parámetros (array, callback)
  // array: el array a evaluar
  // callback: la función que decide si un elemento pasa la condición
  const numeros = [2, 4, 6, 8]
  const esPar = num => num % 2 === 0
  const todosPares = every(numeros, esPar)
  console.log(todosPares); // true
  for (let i = 0; i < array.length; i++ )
    // Recorrer cada elemento en el array de entrada usando un bucle for
  // i es el índice del elemento actual
  if (!callback(array[i])){
      // Si el callback devuelve false para el elemento actual
      // array[i] es el elemento actual del array
      return false;
      // Devolver false inmediatamente, ya que no se cumplen todas las condiciones
      
  } 
}

// Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true
function some(array, callback) { 
  // Crear función some con dos parámetros (array, callback)
  // array: el array a evaluar
  // callback: la función que decide si un elemento pasa la condición
  for (let i = 0; i < array.length; i++) {
    // Recorrer cada elemento en el array de entrada usando un bucle for
    // i es el índice del elemento actual
    const numeros = [1, 3, 5, 7];
  const esPar = num => num % 2 === 0;
  const alMenosUnPar = some(numeros, esPar);
  console.log(alMenosUnPar); // false

    if (callback(array[i])) {
      // Si el callback devuelve true para el elemento actual
      // array[i] es el elemento actual del array
      return true;
      // Devolver true inmediatamente, ya que al menos una condición se cumple
    }
  }
  return false; 
  // Si el bucle termina y ninguna llamada al callback devolvió true
  // Devolver false
}

// Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined
function find(array, callback) {
  // Crear función find con dos parámetros (array, callback)
  // array: el array a evaluar
  // callback: la función que decide si un elemento cumple la condición
  for (let i = 0; i < array.length; i++) {
    // Recorrer cada elemento en el array de entrada usando un bucle for
    // i es el índice del elemento actual
    if (callback(array[i])) {
      // Si el callback devuelve true para el elemento actual
      // array[i] es el elemento actual del array
      return array[i];
      // Devolver el elemento actual, ya que cumple la condición
    }
  }
  return undefined;
  // Si el bucle termina y ninguna llamada al callback devolvió true
  // Devolver undefined
}

// Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que
// devuelva true
// • sí ningún callback devuelve true, devuelva undefined



