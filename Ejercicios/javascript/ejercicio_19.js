// Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica.

async function empleados_salarios(monto) {
  try {
    // Hacemos una solicitud para obtener el archivo JSON local
    const response = await fetch('/Ejercicios/javascript/datos.json');
    if (!response.ok) {
      throw new Error('Ocurrió un error al obtener el archivo JSON.');
    }
    // Parseamos la respuesta como JSON
    const data = await response.json();

    // Filtramos los empleados con un salario mayor al monto especificado
    const empleadosFiltrados = data.filter(empleado => empleado.salario > monto);

    // Mostramos la información específica de los empleados filtrados
    empleadosFiltrados.forEach(empleado => {
      console.log(`Nombre: ${empleado.nombre}, Salario: $${empleado.salario}`);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Llamamos a la función con un monto específico (por ejemplo, $35000)
empleados_salarios(35000);
