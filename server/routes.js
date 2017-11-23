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
 * Widgets
 */
routes
  .add('list_widgets', '/data/widgets', 'data/widgets/list')
  .add('new_widget', '/data/widgets/new', 'data/widgets/new')
  .add('edit_widget', '/data/widgets/:id/edit', 'data/widgets/edit');

/**
 * Layers
 */
routes
  .add('list_layers', '/data/layers', 'data/layers/list')
  .add('new_layer', '/data/layers/new', 'data/layers/new')
  .add('edit_layer', '/data/layers/:id/edit', 'data/layers/edit');

/**
 * Some routes should not be accesible even if they don`t exist
 */
routes
  .add('/home', '404')
  .add('/data/datasets/edit', '404');

module.exports = routes;
