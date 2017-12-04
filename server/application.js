require('es6-promise').polyfill();

const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');
const routes = require('./routes');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const server = express();
const handle = routes.getRequestHandler(app);

// Configuring express server
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

app.prepare()
  .then(() => {
    // Next routes
    server.use(handle);

    // Starting server
    server.listen(port, (err) => {
      if (err) throw err;
      console.info(`> Ready on http://localhost:${port}`);
    });
  });

module.exports = app;
