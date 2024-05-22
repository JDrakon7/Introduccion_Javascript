// 18. Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
// mostrar solo los nombres que comiencen con "A").

// Hacemos una solicitud para obtener el archivo JSON local
fetch('/Ejercicios/javascript/archivo.json')
  .then(response => {
    // Verificamos si la respuesta es exitosa
    if (!response.ok) {
      throw new Error('Ocurrió un error al obtener el archivo JSON.');
    }
    // Parseamos la respuesta como JSON y la retornamos
    return response.json();
  })
  .then(data => {
    // Filtramos los datos para mostrar solo los nombres que comiencen con "A"
    const nombresConA = data.filter(item => item.nombre.startsWith('A'));
    // Mostramos los nombres filtrados en la consola
    console.log('Nombres que comienzan con "A":', nombresConA);
  })
  .catch(error => {
    // Capturamos y mostramos cualquier error que ocurra
    console.error('Error:', error.message);
  });
