const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');
const path = require('path');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
// const rootPath = path.normalize(`${__dirname}/..`);

const app = next({ dev });
const server = express();
const handle = app.getRequestHandler();

// Configuring express server
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

app.prepare()
  .then(() => {
    // Next routes
    server.get('*', (req, res) => handle(req, res));

    // Starting server
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });

module.exports = app;
