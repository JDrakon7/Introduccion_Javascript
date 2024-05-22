// Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
// "Error: Promise rechazada".

// Creamos una nueva Promise
const mi_promesa = new Promise((resolve, reject) => {
  // Simulamos una operación que tome un tiempo
  setTimeout(() => {
    // Rechazamos la Promise después de 2 segundos
    reject(new Error('Promise rechazada'));
  }, 2000); // 2000 milisegundos = 2 segundos
});

// Capturamos el error si la Promise es rechazada
mi_promesa.catch((error) => {
  // Imprimimos el mensaje de error
  console.error('Error:', error.message);
});
