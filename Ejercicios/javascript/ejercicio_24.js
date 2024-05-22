// Crear un objeto proxy usando la clase Proxy

// Objeto objetivo
const objeto_Objetivo = {
  nombre: 'Juan',
  edad: 23
};

// Crear un objeto proxy
const proxy_Objeto = new Proxy(objeto_Objetivo, {
  // Handler que define el comportamiento del proxy
  get: function (target, propiedad) {
    console.log(`Obteniendo propiedad "${propiedad}"`);
    // Retornamos el valor de la propiedad del objeto objetivo
    return target[propiedad];
  },
  set: function (target, propiedad, valor) {
    console.log(`Estableciendo propiedad "${propiedad}" a "${valor}"`);
    // Actualizamos la propiedad en el objeto objetivo
    target[propiedad] = valor;
    // Indicamos que la operación fue exitosa
    return true;
  },
  deleteProperty: function (target, propiedad) {
    console.log(`Eliminando propiedad "${propiedad}"`);
    // Eliminamos la propiedad del objeto objetivo
    delete target[propiedad];
    // Indicamos que la operación fue exitosa
    return true;
  }
});

// Acceder y modificar propiedades a través del proxy
console.log(proxy_Objeto.nombre); // Accede a la propiedad "nombre" (get)
console.log(proxy_Objeto.edad); // Accede a la propiedad "edad" (get)

proxy_Objeto.edad = 27; // Modifica la propiedad "edad" (set)
console.log(proxy_Objeto); // Muestra el objeto proxy completo
delete proxy_Objeto.edad; // Elimina la propiedad "edad" (deleteProperty)
console.log(proxy_Objeto); // Muestra el objeto proxy actualizado
