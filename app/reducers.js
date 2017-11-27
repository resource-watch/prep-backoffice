import { combineReducers } from 'redux';
import { handleModule } from 'redux-actions';

import * as datasetFormModule from 'components/dataset-form';
// import allActions from './actions';

// import { reducers as datasetsSelectorReducers } from './components/DatasetsSelector';
// import { reducers as storiesReducers } from './components/Stories';
export default combineReducers({
  datasetForm: handleModule(datasetFormModule)
  // datasetsSelector: handleActions('datasetsSelector', allActions, datasetsSelectorReducers, {}),
  // admin: {
  //   stories: handleActions('stories', allActions, storiesReducers, {})
  // }
});
