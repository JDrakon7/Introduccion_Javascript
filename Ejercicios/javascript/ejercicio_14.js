// Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
// diga "Operación completada". Utiliza async/await.

// Definir una función delay que devuelve una promesa que se resuelve después de ms milisegundos
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Definir una función asincrónica llamada operacionAsincronica
async function operacionAsincronica() {
    // Esperar 1 segundo (1000 milisegundos) usando await con la función delay
    await delay(1000);
    // Devolver la cadena "Operación completada" después de esperar
    return "Operación completada";
}

// Llamar a la función operacionAsincronica y manejar el resultado usando .then
operacionAsincronica().then(resultado => {
    // Imprimir el resultado cuando la promesa se resuelve
    console.log(resultado);
});
