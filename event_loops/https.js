const http = require("http");
const server = http.createServer((req, res) => {
  console.log("Server is up");
  res.end("Its up");
});

server.listen(5000);
