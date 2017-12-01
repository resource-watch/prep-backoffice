import { createAction, createThunkAction } from 'redux-actions';
import qs from 'query-string';

const fetchDatasetLoading = createAction('fetchDatasetLoading');
const fetchDatasetError = createAction('fetchDatasetError');
const fetchDatasetReady = createAction('fetchDatasetReady');
const setLayerData = createAction('setLayerData');

const datasetAPIPath = `${process.env.API}/api/v1/dataset/`;

const fetchDatasetData = createThunkAction('fetchDatasetData', (datasetId, params) => (dispatch) => {
  dispatch(fetchDatasetLoading(true));
  return fetch(`${datasetAPIPath}/${datasetId}?${qs.stringify(params)}`)
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
