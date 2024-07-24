const net = require("node:net");

function findPort(desirablePort) {
  const server = net.createServer();

  return new Promise((resolve, reject) => {
    server.listen(desirablePort, () => {
      const { port } = server.address();
      server.close(() => resolve(port));
    });
    server.on("error", (err) => {
      if (err.code == "EADDRINUSE") {
        findPort(desirablePort + 1).then((port) => resolve(port));
      }
    });
  });
}

module.exports = { findPort };
