//Paquetes
const fs = require("node:fs/promises");
const path = require("node:path");
const pc = require("picocolors");

const folder = process.argv[2] ?? "."; // <-- Recupera el nombre del directorio o en el que esta

//fs.readdir(folder) <-- Retorna una promesa (si se una /promises) o un callback, donde regresa un arreglo con los ficheros y/o directorios del "folder (path)" que se dio como parametro
(async function ls(folder) {
  let files;
  try {
    files = await fs.readdir(folder); //<-- Intentamos recuperar los ficheros y/o archivos en un array
  } catch (err) {
    console.log(`No se pudo leer la carpeta "${folder}"\n`, err);
    process.exit(1); //<-- Terminamos el proceso si hubo error
  }

  const filesPromises = files.map(async (file) => {
    let stats;
    try {
      filePath = path.join(folder, file); //<-- Unimos el "path del folder" con el "archivo"
      stats = await fs.stat(filePath); // Regresa un objeto con informacion del archivo o directorio (es asincrono)
    } catch (err) {
      console.log(`ERROR al leer el archivo ${file}`);
      process.exit(1);
    }
    if (file.length > 15) {
      file = file.slice(0, 10) + ".." + path.extname(file);
    }
    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? "d" : "f";
    const fileSize = stats.size.toString();
    const fileModified = stats.mtime.toLocaleString();
    return `${pc.green(fileType)} ${pc.blue(file.padEnd(20))} ${pc.bgMagenta(fileSize.padStart(10))} ${pc.yellow(fileModified)}`;
  });
  const filesInfo = await Promise.all(filesPromises);
  filesInfo.forEach((fileInfo) => console.log(fileInfo));
})(folder);
