// Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
// obtenidos en la consola.

// Hacemos una solicitud para obtener el archivo JSON local

fetch('/Ejercicios/javascript/archivo.json').then(response => {
  // Verificamos si la respuesta es exitosa
  if (!response.ok) {
    throw new Error('Ocurrió un error al obtener el archivo JSON.');
  }
  // Parseamos la respuesta como JSON y la retornamos
  return response.json();
})
  .then(data => {
    // Mostramos los datos obtenidos en la consola
    console.log('Datos obtenidos:', data);
  })
  .catch(error => {
    // Capturamos y mostramos cualquier error que ocurra
    console.error('Error:', error.message);
  });
