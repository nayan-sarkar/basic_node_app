const http = require('http');

let lineNumber = 1;

// Create HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Node server is running...\n');
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server running at port 3000');
});

// Print line number every 2 seconds
setInterval(() => {
  console.log(`Line ${lineNumber}`);
  lineNumber++;
}, 2000);
