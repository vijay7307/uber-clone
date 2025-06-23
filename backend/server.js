
const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000

http.createServer(app).listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// This code creates an HTTP server using the Express app defined in app.js and listens on a specified port.    

