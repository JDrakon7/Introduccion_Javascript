//Para crear una función delay(ms) que utilice promesas y se resuelva después de ms milisegundos, 
//podemos utilizar la función setTimeout dentro de una promesa. Aquí tienes cómo puedes hacerlo:


// Crear una función delay que acepte un parámetro ms (milisegundos) y devuelva una promesa
function delay(ms) {
    // Devolvemos una nueva promesa
    return new Promise(resolve => {
        // Usamos setTimeout para esperar el número de milisegundos especificados
        setTimeout(() => {
            // Cuando el tiempo ha pasado, llamamos a resolve para cumplir la promesa
            resolve();
        }, ms);
    });
}

// Usamos la función delay con 3000 milisegundos (3 segundos)
delay(3000).then(() => {
    // Esta función se ejecuta cuando la promesa se cumple, después de 3 segundos
    alert("se ejecuta después de 3 segundos");
});
