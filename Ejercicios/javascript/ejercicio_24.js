// Crear un objeto proxy usando la clase Proxy
  
// Objeto objetivo
const objetoObjetivo = {
    nombre: 'Juan',
    edad: 20
  };
  
  // Crear un objeto proxy
  const proxyObjeto = new Proxy(objetoObjetivo, {
    // Handler que define el comportamiento del proxy
    get: function(target, propiedad) {
      console.log(`Obteniendo propiedad "${propiedad}"`);
      // Retornamos el valor de la propiedad del objeto objetivo
      return target[propiedad];
    },
    set: function(target, propiedad, valor) {
      console.log(`Estableciendo propiedad "${propiedad}" a "${valor}"`);
      // Actualizamos la propiedad en el objeto objetivo
      target[propiedad] = valor;
      // Indicamos que la operación fue exitosa
      return true;
    },
    deleteProperty: function(target, propiedad) {
      console.log(`Eliminando propiedad "${propiedad}"`);
      // Eliminamos la propiedad del objeto objetivo
      delete target[propiedad];
      // Indicamos que la operación fue exitosa
      return true;
    }
  });
  
  // Acceder y modificar propiedades a través del proxy
  console.log(proxyObjeto.nombre); // Accede a la propiedad "nombre" (get)
  proxyObjeto.edad = 35; // Modifica la propiedad "edad" (set)
  console.log(proxyObjeto); // Muestra el objeto proxy completo
  delete proxyObjeto.edad; // Elimina la propiedad "edad" (deleteProperty)
  console.log(proxyObjeto); // Muestra el objeto proxy actualizado
  