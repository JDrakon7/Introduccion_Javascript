// Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true


function every(array, callback) {
  // Crear función every con dos parámetros (array, callback)
  // array: el array a evaluar
  // callback: la función que decide si un elemento pasa la condición

  for (let i = 0; i < array.length; i++)
    // Recorrer cada elemento en el array de entrada usando un bucle for
    // i es el índice del elemento actual
    if (!callback(array[i])) {
      // Si el callback devuelve false para el elemento actual
      // array[i] es el elemento actual del array
      return false;
      // Devolver false inmediatamente, ya que no se cumplen todas las condiciones

    }
  // Si todas las llamadas al callback devolvieron true, devolver true al final
  return true;
}


//Ejemplo de uso numeros pares 

const numeros = [2, 4, 6, 8]
const esPar = num => num % 2 === 0
const todos_pares = every(numeros, esPar)
console.log(todos_pares); // true