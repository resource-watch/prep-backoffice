const routes = require('next-routes')();

/**
 * Static pages
 */
routes
  .add('home', '/', 'home');

/**
 * Datasets
 */
routes
  .add('list_datasets', '/data/datasets', 'data/datasets/list')
  .add('new_dataset', '/data/datasets/new', 'data/datasets/new')
  .add('edit_dataset', '/data/datasets/:id/edit', 'data/datasets/edit');

/**
 * Some routes should not be accesible even if they don`t exist
 */
routes
  .add('/home', '404')
  .add('/data/datasets/edit', '404');

module.exports = routes;
