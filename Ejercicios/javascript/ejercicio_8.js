// Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que
// devuelva true
// • sí ningún callback devuelve true, devuelva undefined

function findIndex(array, callback) {
  // Definición de la función con dos parámetros (array, callback)

  for (let i = 0; i < array.length; i++) {
    // Recorrer cada elemento del array

    if (callback(array[i])) {
      // Ejecutar el callback con el elemento actual
      // Si el callback devuelve true, devolver el índice actual

      return i;
    }
  }

  // Si el bucle termina y ningún callback devolvió true, devolver undefined
  return undefined;
}
