// Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.

// Primera Promise que devuelve el número 5 después de 1 segundo
const promise_1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 1000); // 1000 milisegundos = 1 segundo
});

// Segunda Promise que devuelve el número 10 después de 1 segundo
const promise_2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000); // 1000 milisegundos = 1 segundo
});

// Tercera Promise que devuelve el número 15 después de 1 segundo
const promise_3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(15);
  }, 1000); // 1000 milisegundos = 1 segundo
});

// Encadenamos las tres Promises para sumar los resultados
Promise.all([promise_1, promise_2, promise_3])
  .then((results) => {
    // Sumamos los resultados
    const sum = results.reduce((total, num) => total + num, 0);
    // Mostramos el resultado final
    console.log('Resultado final:', sum);
  })
  .catch((error) => {
    console.error('Error:', error);
  });



