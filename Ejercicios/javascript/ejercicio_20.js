// Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.

// Función que crea una Promise que se resuelve después de un cierto tiempo
function crearPromise(tiempo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Promise resuelta después de ${tiempo} milisegundos`);
      }, tiempo);
    });
  }
  
  // Creamos tres Promises con diferentes tiempos de resolución
  const promise1 = crearPromise(1000); // 1 segundo
  const promise2 = crearPromise(2000); // 2 segundos
  const promise3 = crearPromise(3000); // 3 segundos
  
  // Usamos Promise.all() para esperar a que todas las Promises se resuelvan
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      // Cuando todas se hayan resuelto, mostramos un mensaje
      console.log('Todas las Promises se han resuelto:');
      results.forEach((result) => {
        console.log(result);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  