import http from 'node:http';

const server = http.createServer((request, response) => {
  let url = request.url.split('/');
  if (url[1] === '' ) {
    if (request.method === 'GET') {
      response.end("Hello World");
    }
  }
  if (url[1] === 'authors' ) {
    if (request.method === 'GET') {
      response.end("CM");
    }
  }
  response.statusCode = 404;
  response.end();
});

server.listen(3000, "localhost", () => {
  console.log(`Server running at http://localhost:3000/`);
});
