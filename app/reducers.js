import { combineReducers } from 'redux';
import { handleActions } from './utils/redux';
import allActions from './actions';

import { reducers as datasetsSelectorReducers } from './components/DatasetsSelector';
import { reducers as storiesReducers } from './components/Stories';

export default combineReducers({
  datasetsSelector: handleActions('datasetsSelector', allActions, datasetsSelectorReducers, {}),
  admin: {
    stories: handleActions('stories', allActions, storiesReducers, {})
  }
});
