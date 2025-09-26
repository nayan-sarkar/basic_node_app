const http = require('http');

const PORT = process.env.PORT || 3000;

// Create HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>Node Server Page Logs</title>
      <style>
        body { font-family: sans-serif; padding: 20px; }
        #log { white-space: pre-wrap; }
      </style>
    </head>
    <body>
      <h1>Live Logs on Page</h1>
      <div id="log"></div>

      <script>
        let lineNumber = 1;
        const logDiv = document.getElementById('log');

        setInterval(() => {
          const line = document.createElement('div');
          line.textContent = 'Line ' + lineNumber;
          logDiv.appendChild(line);
          lineNumber++;
        }, 2000);
      </script>
    </body>
  </html>
`);
});

// Start the server
server.listen(PORT, () => {
  console.log('Server running at port', PORT);
});
