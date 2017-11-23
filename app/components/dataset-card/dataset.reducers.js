import actions from './datasets-selector.actions';

export const initialState = {
  data: {}, // layer data
  error: null,
  loading: false,
  ready: false
};

const setLoading = (state, loading) => ({ ...state, loading });
const setReady = (state, ready) => ({ ...state, ready });
const setError = (state, error) => ({ ...state, error });
const setData = (state, payload) => setReady(setLoading({ ...state, data: payload }, false), true);

export default {
  [actions.fetchDatasetLoading]: (state, isLoading) => setLoading(state, isLoading),
  [actions.fetchDatasetReady]: (state, isReady) => setLoading(state, isReady),
  [actions.fetchDatasetError]: (state, errorMessage) => setError(state, errorMessage),
  [actions.fetchDatasetData]: (state, payload) => setData(state, payload),
  [actions.setDatasetData]: (state, data) => setData(state, data)
};
