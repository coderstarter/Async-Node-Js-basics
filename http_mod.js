const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Gi");
  }
  if (req.url === "/about") {
    res.end("Its coming from abouts");
  }
  res.end(`
  <h1>Hello h1 </h1>`);
});

server.listen(5000);
