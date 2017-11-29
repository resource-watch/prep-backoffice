import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';

import DatasetUploadFile from 'components/dataset-form/custom/dataset-upload-component';

import * as actions from './dataset-form-actions';
import reducers, { initialState } from './dataset-form-reducers';
import DatasetCreateForm from './dataset-create-form-component';
import { schema, uiSchema } from './dataset-form-constants';

const mapStateToProps = state => state.datasetForm;

const COLUMN_FORMAT = ['csv', 'tsv'];

class DatasetCreateFormContainer extends Component {
  constructor(props) {
    super(props);

    this.widgets = {};

    this.setCustomWidgets();

    // bindings
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const isFormDataEqual = isEqual(this.props.formData, nextProps.formData);

    return !isFormDataEqual;
  }

  onSubmit({ formData }) {
    this.props.setFormValues(formData);
  }

  onChange({ formData }) {
    this.props.setFormValues(formData);
  }

  setCustomWidgets() {
    const {
      onDragEnter,
      onDragLeave,
      setFormValues
    } = this.props;

    const customFileProps = {
      onDragEnter,
      onDragLeave,
      setFormValues,
      onChange: (id, value = '') => {
        this.props.setFormValues({ [id]: value });
      }
    };

    // custom widgets
    const customFileInput = props =>
      (<DatasetUploadFile
        {...{
          ...customFileProps,
          value: props.value,
          properties: {},
          // formData,
          id: 'connectorUrl'
        }}
      />);

    this.widgets = {
      customFileInput
    };
  }

  render() {
    const { formData } = this.props;
    return createElement(DatasetCreateForm, {
      schema,
      formData,
      uiSchema,
      widgets: this.widgets,
      onSubmit: this.onSubmit,
      onChange: this.onChange
    });
  }
}

DatasetCreateFormContainer.defaultProps = {
  formData: {}
};

DatasetCreateFormContainer.propTypes = {
  formData: PropTypes.object,
  setFormValues: PropTypes.func,
  onDragEnter: PropTypes.func,
  onDragLeave: PropTypes.func,
  onUploadFile: PropTypes.func,
  setFileLoading: PropTypes.func
};

export { initialState, reducers, actions };

export default connect(mapStateToProps, actions)(DatasetCreateFormContainer);
