// Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise
// resuelta" cuando se cumpla.

// Crear una nueva promesa que se resuelva después de 3 segundos
const la_promesa = new Promise((resolve, reject) => {
    // Usar setTimeout para esperar 3 segundos (3000 milisegundos)
    setTimeout(() => {
        // Resolver la promesa después de 3 segundos
        resolve("Promise resuelta");
    }, 3000);
});

// Usar el método .then() para manejar la promesa cuando se resuelve
la_promesa.then((mensaje) => {
    // Imprimir el mensaje cuando la promesa se haya cumplido
    console.log(mensaje);
});
