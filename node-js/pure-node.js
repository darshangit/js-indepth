const http = require('http');

const server = http.createServer((request, response) => {
  let body = [];
  console.log(request.method, request.url);
  request.on('data', (chunk) => {
    body.push(chunk);
  });
  request.on('end', () => {
    body = Buffer.concat(body).toString();
    let userName = 'Unknown';
    if (body) {
      userName = body.split('=')[1];
    }
    console.log(body);
    response.setHeader('Content-Type', 'text/html');
    response.write(
      `<h1>Hi ${userName}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></input></form>`
    );
    response.end();
  });
});

server.listen(3000); // Starts the server
