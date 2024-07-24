const http = require("node:http");
const { findPort } = require("./10.find_port");

const server = http.createServer((req, res) => {
  console.log("request recieved");
  res.end("Hola Mundo");
});

findPort(80).then((port) => {
  server.listen(port, () => console.log(`port http://localhost:${port}`));
});
