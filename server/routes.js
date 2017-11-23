const routes = require('next-routes')();

/**
 * Datasets routes
 */
routes
  .add('list_datasets', '/data/datasets', 'data/dataset/list')
  .add('new_dataset', '/data/datasets/new', 'data/datasets/new')
  .add('edit_dataset', '/data/datasets/:id/edit', 'data/dataset/edit');

/**
 * Some routes should not be accesible even if they exist
 */
routes
  .add('/data/dataset/edit', '404');

module.exports = routes;
