import * as actions from './dataset-form-actions';

const fileState = {
  validations: [],
  value: '',
  accepted: [],
  rejected: [],
  dropzoneActive: false,
  loading: false
};

export const initialState = {
  datasetUpload: { ...fileState }
};

export default {
  [actions.onDragEnter]: state => ({ ...state, dropzoneActive: true }),
  [actions.onDragLeave]: state => ({ ...state, currentFilter: false }),
  [actions.onDrop]: (state, { payload }) => {
    const { accepted, rejected, id } = payload;
    return ({
      ...state,
      [id]: {
        ...state[id],
        accepted,
        rejected,
        dropzoneActive: false
      }
    });
  }
};
