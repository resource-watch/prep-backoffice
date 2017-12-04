import * as actions from './dataset-form-actions';

const application = (process.env.APPLICATIONS || []).split(',');

export const initialState = {
  formData: {
    name: '',
    subtitle: '',
    application,
    type: 'tabular',
    provider: '',
    connectorType: '',
    // connectorUrlHint: '',
    published: false,
    geoInfo: false,
    verified: false,
    env: 'preproduction',
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
