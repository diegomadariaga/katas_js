const fs = require('fs');

// Nombre del archivo a codificar
const nombreArchivo = 'holamundo.txt';

// Leemos el contenido del archivo
fs.readFile(nombreArchivo, (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  // Codificamos el contenido a base64
  const contenidoBase64 = data.toString('base64');

  console.log('Contenido codificado en base64:', contenidoBase64);
});