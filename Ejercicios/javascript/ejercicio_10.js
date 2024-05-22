// Crear una función takeWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos hasta el primer callback que devolvió false
// • (Inverso del dropWhile)

function takeWhile(array, callback) {
  // Crear una función takeWhile con dos parámetros (array, callback)
  // array: el array a evaluar
  // callback: la función que decide si un elemento cumple la condición

  let newArray = [];
  // Crear un nuevo array para almacenar los elementos que cumplen la condición

  for (let i = 0; i < array.length; i++) {
    // Recorrer cada elemento del array de entrada usando un bucle for
    // i es el índice del elemento actual

    if (!callback(array[i])) {
      // Si el callback devuelve false, dejar de agregar elementos al nuevo array
      break;
    }

    // Si el callback devuelve true, agregar el elemento actual al nuevo array
    newArray.push(array[i]);
  }

  return newArray;
  // Devolver el nuevo array con los elementos que cumplieron la condición
}


const numeros = [1, 2, 3, 4, 5, 6];
const menor_4 = num => num < 4;

const resultado = takeWhile(numeros, menor_4);
console.log(resultado); // [1, 2, 3]
