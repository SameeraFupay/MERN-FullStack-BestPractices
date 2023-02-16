const express = require('express');
const winston = require('winston');
const app = express();

// Configure winston logger with a console transport
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
});

// Define a route that logs a message
app.get('/hello', (req, res) => {
  logger.info('Received a request for /hello');
  return res.send('Hello, world!');
});

// Start the server
app.listen(3000, () => {
  logger.info('Server running on port 3000');
});