// Crear una función dropWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos a partir del primer callback que devolvió false
// • (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el
// callback de true, no los agrega, cuando el callback da false por primera vez agrega
// todos los elementos restantes a partir de dicho elemento inclusive)

function dropWhile(array, callback) {
  // Crear una función dropWhile con dos parámetros (array, callback)
  // array: el array a evaluar
  // callback: la función que decide si un elemento cumple la condición

  let newArray = [];
  // Crear un nuevo array para almacenar los elementos que no cumplen la condición

  let dropping = true;
  // Variable para controlar cuándo dejar de descartar elementos

  for (let i = 0; i < array.length; i++) {
    // Recorrer cada elemento del array de entrada usando un bucle for
    // i es el índice del elemento actual

    if (dropping && !callback(array[i])) {
      // Si estamos descartando elementos y el callback devuelve false
      // dejar de descartar elementos
      dropping = false;
    }

    if (!dropping) {
      // Si ya hemos encontrado un elemento que no cumple la condición
      // agregar el elemento actual al nuevo array
      newArray.push(array[i]);
    }
  }

  return newArray;
  // Devolver el nuevo array con los elementos que no cumplieron la condición
}


function esMenorA5(num) {
  return num < 5;
}

const numeros = [2, 4, 6, 3, 1, 7, 8];
const numerosFiltrados = dropWhile(numeros, esMenorA5);

console.log(numerosFiltrados); // Output: [6, 3, 1, 7, 8]
