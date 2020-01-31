const http = require('http');
const monitor = require('./services/monitor.js')
const hostname = '127.0.0.1';
const port = 8000;
// Run server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Node js E-mail warning');
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    //monitor.monitor();
  });

  setInterval(() => { monitor.monitor(); }, 50000);
