// Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
// try/catch para mostrar un mensaje de error en caso de fallo.

async function cargarArchivoJSON(ruta) {
    try {
      // Realizamos la solicitud para obtener el archivo JSON local
      const response = await fetch(ruta);
      if (!response.ok) {
        throw new Error('Error al cargar el archivo JSON: ' + response.statusText);
      }
      // Parseamos la respuesta como JSON y la retornamos
      return await response.json();
    } catch (error) {
      // Capturamos y manejamos cualquier error que ocurra durante la carga del archivo
      console.error('Error:', error.message);
      return null; // Retornamos null en caso de error
    }
  }
  
  // Llamamos a la función para cargar el archivo JSON local
  const rutaArchivo = 'datos.json'; // Coloca la ruta de tu archivo JSON local
  cargarArchivoJSON(rutaArchivo)
    .then((datos) => {
      if (datos) {
        console.log('Archivo cargado correctamente:', datos);
      }
    })
    .catch((error) => {
      console.error('Error al cargar el archivo JSON:', error);
    });
  