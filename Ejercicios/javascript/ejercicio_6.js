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


const numeros = [1, 3, 5, 7];
const esPar = num => num % 2 === 0;
const alMenosUnPar = some(numeros, esPar);
console.log(alMenosUnPar); // false