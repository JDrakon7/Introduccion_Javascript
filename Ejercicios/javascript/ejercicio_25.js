// Usar un proxy para la validación de los valores de propiedades
// • Cuando declaremos que el atributo es numérico solo perimimos que ingresen
// números
// • Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
// letras
// • Cuando declaremos que el atributo es un email, solo permitimos que ingresen
// correos
// • Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
// fechas
// • Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
// al final de estos y se debe mostrar el error personalizado por consola



// Función para validar valores numéricos
function validarNumero(valor) {
    return !isNaN(parseFloat(valor)) && isFinite(valor);
  }
  
  // Función para validar valores alfanuméricos
  function validarAlfanumerico(valor) {
    return /^[a-zA-Z]+$/.test(valor);
  }
  
  // Función para validar emails
  function validarEmail(valor) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
  }
  
  // Función para validar fechas
  function validarFecha(valor) {
    return !isNaN(Date.parse(valor));
  }
  
  // Crear un objeto proxy para la validación
  const proxyValidacion = new Proxy({}, {
    set: function(target, propiedad, valor) {
      if (propiedad === 'numerico') {
        if (!validarNumero(valor)) {
          console.error('Error: el valor debe ser numérico');
          return false;
        }
      } else if (propiedad === 'alfanumerico') {
        if (!validarAlfanumerico(valor)) {
          console.error('Error: el valor debe ser alfanumérico');
          return false;
        }
      } else if (propiedad === 'email') {
        if (!validarEmail(valor)) {
          console.error('Error: el valor debe ser un email válido');
          return false;
        }
      } else if (propiedad === 'fecha') {
        if (!validarFecha(valor)) {
          console.error('Error: el valor debe ser una fecha válida');
          return false;
        }
      } else {
        if (typeof valor === 'string' && (valor.trim() !== valor || valor.trim().length === 0)) {
          console.error('Error: no se permiten espacios en blanco al inicio o al final');
          return false;
        }
      }
  
      target[propiedad] = valor;
      return true;
    }
  });
  
  // Ejemplo de uso del proxy para la validación
  proxyValidacion.numerico = 123; // Correcto: valor numérico
  proxyValidacion.numerico = 'abc'; // Error: el valor debe ser numérico
  proxyValidacion.alfanumerico = 'abcd'; // Correcto: valor alfanumérico
  proxyValidacion.alfanumerico = '123'; // Error: el valor debe ser alfanumérico
  proxyValidacion.email = 'correo@dominio.com'; // Correcto: email válido
  proxyValidacion.email = 'correoinvalido.com'; // Error: el valor debe ser un email válido
  proxyValidacion.fecha = '2024-05-25'; // Correcto: fecha válida
  proxyValidacion.fecha = 'fecha'; // Error: el valor debe ser una fecha válida
  proxyValidacion.otro = '  texto  '; // Error: no se permiten espacios en blanco al inicio o al final
  