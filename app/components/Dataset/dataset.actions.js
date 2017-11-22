import { createAction } from 'redux-actions';
import { createThunkAction } from 'utils/redux';
import qs from 'query-string';

const fetchDatasetLoading = createAction('fetchDatasetLoading');
const fetchDatasetError = createAction('fetchDatasetError');
const fetchDatasetReady = createAction('fetchDatasetReady');
const setLayerData = createAction('setLayerData');

const fetchDatasetData = createThunkAction('fetchDatasetData', (layerId, params) => (dispatch) => {
  dispatch(fetchDatasetLoading(true));
  return fetch(`${process.env.API}/api/v1/dataset/${layerId}?${qs.stringify(params)}`)
    .then((response) => {
      if (response.ok) return response.json();
      throw Error(response.statusText);
    })
    .then((data) => {
      dispatch(fetchDatasetData(data));
    })
    .catch((errorMessage) => {
      console.error(errorMessage);
      dispatch(fetchDatasetError(errorMessage));
    });
});

export default {
  fetchDatasetLoading,
  fetchDatasetError,
  fetchDatasetReady,
  fetchDatasetData,
  setLayerData
};
