import http from 'node:http';
const server = http.createServer((request, response) => {
      response.end("Hello Galvanize!");
});
server.listen(3000, "localhost", () => {
  console.log(`Server is running on http://localhost:3000/`);
});
