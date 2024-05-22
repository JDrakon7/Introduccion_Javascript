// Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • obtenga el resultado
// • lo pushee a un nuevo array
// • devuelva el array final con el resultado de cada una de las llamadas al callback.


// El ejercicio consiste en crear una función map en JavaScript que tome un array y un callback como argumentos.
// Para cada elemento del array, la función ejecutará el callback pasándole dicho elemento como argumento.
// La función debe obtener el resultado de cada llamada al callback y agregarlo a un nuevo array.
// Finalmente, la función debe devolver el nuevo array con los resultados de cada llamada al callback.


const numeros = [5, 8, 19, 22] // Definir el array numeros 
const duplicar = x => x * 2 //Definir la funcion duplicar
const resultado = numeros.map(duplicar) //  Uso de Map  , el cual realizara , Tome cada elemento del array numeros , Aplique la función duplicar a cada elemento , Cree un nuevo array resultado con los resultados de cada llamada a duplicar
console.table(resultado)

