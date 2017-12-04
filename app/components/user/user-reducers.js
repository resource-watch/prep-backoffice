import * as actions from './user-actions';

export const initialState = {};

export default {
  [actions.setFormValues]: (state, { payload }) =>
    ({ ...state, formData: { ...state.formData, ...payload } })
};

