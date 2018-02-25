let http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Test</title>
  </head>
  <body>
    <div align="center">
        <h1>This is your homepage</h1>
  
        <p>My favorite websites are:</p>
        <ul style="width: 200px; text-align: left;">
            <li><a href="https://www.github.com">Github</a></li>
            <li><a href="https://www.stackoverflow.com">StackOverflow</a></li>
            <li><a href="https://www.twitter.com">Twitter</a></li>
        </ul>
    </div>
  </body>
  </html>
  `);
  response.end();
}).listen(8080);

console.log('Running server on http://localhost:8080');