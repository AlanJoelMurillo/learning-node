const path = require("node:path");

// barra separadora de carpetas segun SO
console.log(path.sep);

// unir rutas con path.join
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

// Recuperar el fin de un path, por lo general el nombre del archivo
const base = path.basename("/tmp/midu-secret-files/password.txt");
console.log(base);

//Recupera el nombre del archivo (2do parametro para quitar extension)
const filename = path.basename("/tmp/midu-secret-files/password.txt", ".txt");
console.log(filename);

//Recupera la extension del archivo
const extension = path.extname("my.super.image.jpg");
console.log(extension);
