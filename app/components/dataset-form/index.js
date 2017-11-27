import { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withProps } from 'recompose';

import DatasetUploadFile from 'components/dataset-form/custom/dataset-upload-component';

import * as actions from './dataset-form-actions';
import reducers, { initialState } from './dataset-form-reducers';
import DatasetCreateForm from './dataset-create-form-component';
import { schema } from './dataset-form-constants';

const mapStateToProps = state => state;

class DatasetCreateFormContainer extends Component {
  static onSubmit(formData) {
    // TO-DO
  }

  constructor(props) {
    super(props);

    const {
      onDragEnter,
      onDragLeave,
      onDrop,
      datasetForm
    } = props;

    const inputProps = {
      onDragEnter,
      onDragLeave,
      onDrop
    };

    const UploadField = withProps({
      ...inputProps,
      data: datasetForm.datasetUpload,
      id: 'datasetUpload'
    })(DatasetUploadFile);

    this.uiSchema = {
      environment: {
        'ui:help': 'Choose "preproduction" to see this dataset it only as admin, "production" option will show it in public site.'
      },
      type: {
        'ui:widget': 'select'
      },
      featureServiceUrlDataEndpoint: {
        'ui:widget': UploadField,
        'ui:options': {
          inputType: 'url'
        }
      }
    };

    // bindings
    this.onSubmit = DatasetCreateFormContainer.onSubmit.bind(this);
  }


  render() {
    return createElement(DatasetCreateForm, {
      schema,
      uiSchema: this.uiSchema,
      onSubmit: this.onSubmit
    });
  }
}

DatasetCreateFormContainer.defaultProps = {
  datasetForm: {}
};

DatasetCreateFormContainer.propTypes = {
  onDragEnter: PropTypes.func,
  onDrop: PropTypes.func,
  onDragLeave: PropTypes.func,
  datasetForm: PropTypes.object
};

export { initialState, reducers, actions };

export default connect(mapStateToProps, actions)(DatasetCreateFormContainer);
