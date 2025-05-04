import { createServer } from 'node:http';

const PORT = process.env.PORT || 8080; // Use the port that GCP provides, or default to 8080


const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Test Deploy From Workflow');
});

server.listen(PORT, () => {
  console.log(`Server running at ${PORT}/`);
});