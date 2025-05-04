import { createServer } from 'node:http';
import fs from 'fs';

const PORT = process.env.PORT || 8080; // Use the port that GCP provides, or default to 8080

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  fs.readFile("./index.html", null, function(error, data) {
    if(error) {
      res.status(404).end("File not found!");
    } else {
      res.write(data);
      res.end();
    }
  })
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Server running at ${PORT}/`);
});