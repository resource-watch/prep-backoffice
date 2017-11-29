import * as actions from './dataset-form-actions';

export const initialState = {
  formData: {
    title: '',
    subtitle: '',
    application: [],
    type: 'tabular',
    provider: '',
    connectorType: '',
    connectorUrlHint: '',
    published: false,
    geoInfo: false,
    verified: false,
    env: 'prepproduction',
    tableName: '',
    widgetRelevantProps: [],
    layerRelevantProps: [],
    connectorUrl: '',
    dataPath: '',
    columnFields: [],
    legend: {
      lat: undefined,
      long: undefined,
      date: [],
      country: []
    }
  }
};

export default {
  [actions.setFormValues]: (state, { payload }) =>
    ({ ...state, formData: { ...state.formData, ...payload } })
};
