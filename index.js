const http = require('http');

let lineNumber = 1;

const PORT = process.env.PORT || 3000;

// Create HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Node server is running...\n');
});

// Start the server on port 3000
server.listen(PORT, () => {
  console.log('Server running at port 3000');
});

// Print line number every 2 seconds
setInterval(() => {
  console.log(`Line ${lineNumber}`);
  lineNumber++;
}, 2000);
