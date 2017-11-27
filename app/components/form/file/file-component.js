import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import omit from 'lodash/omit';

import Dropzone from 'react-dropzone';

// Utils
// import { post } from 'utils/request';

// Components
// import Spinner from 'components/ui/Spinner';

// import FormElement from './FormElement';

// constants
// const COLUMN_FORMAT = ['csv', 'tsv'];

class File extends PureComponent {
  constructor(props) {
    super(props);

    // this.state = {
    //   ...this.state,
    //   validations: props.validations,
    //   accepted: [],
    //   rejected: [],
    //   dropzoneActive: false,
    //   loading: false
    // };

    // BINDINGS
    // this.triggerBrowseOrCancel = this.triggerBrowseOrCancel.bind(this);
    // this.onDragEnter = this.onDragEnter.bind(this);
    // this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = (acceptedFiles, rejectedFiles) => this.props.onDrop(acceptedFiles, rejectedFiles);
  }

  componentWillReceiveProps(nextProps) {
    const { uploadFile } = this.props;
    const { accepted } = nextProps;

    if (accepted.length) uploadFile(accepted[0]);
  }

  /**
   * DROPZONE EVENTS
   * - onDragEnter
   * - onDragLeave
   * - onDrop
  */
  // onDragEnter() {
  //   this.setState({
  //     dropzoneActive: true
  //   });
  // }

  // onDragLeave() {
  //   this.setState({
  //     dropzoneActive: false
  //   });
  // }

  // onDrop(accepted, rejected) {
  //   this.setState({
  //     accepted,
  //     rejected,
  //     dropzoneActive: false
  //   }, () => {
  //     if (this.state.accepted.length) {
  //       this.uploadFile(this.state.accepted[0]);
  //     }
  //   });
  // }

  /**
   * UI EVENTS
   * - triggerBrowseOrCancel
   * - triggerChange
  */
  triggerChange(e) {
    this.setState({
      value: e.currentTarget.value
      // validations: ['required', 'url']
    }, () => {
      // Publish the new value to the form
      if (this.props.onChange) {
        this.props.onChange({
          value: this.state.value
        });
      }
      // Trigger validation
      this.triggerValidate();
    });
  }

  triggerBrowseOrCancel() {
    // const { accepted, value } = this.props;
    // if (accepted.length) {
    //   this.setState({
    //     accepted: [],
    //     value: '',
    //     validations: ['required', 'url']
    //   }, () => {
    //     // Publish the new value to the form
    //     if (this.props.onChange) {
    //       this.props.onChange({
    //         value
    //       });
    //     }
    //     // Trigger validation
    //     // this.triggerValidate();
    //   });
    // } else {
    //   this.dropzone.open();
    // }
    this.dropzone.open();
  }

  /**
   * HELPERS
   * - getFileName
   * - uploadFile
  */
  // getFileName() {
  //   const { accepted } = this.props;

  //   if (accepted.length) {
  //     const current = accepted[0];
  //     return current.name;
  //   }

  //   return 'Select file to import data';
  // }

  // uploadFile(file) {
  //   const formData = new FormData();
  //   const { provider } = this.props.properties || {};
  //   formData.append('dataset', file);
  //   formData.append('provider', provider);

  //   this.setState({ loading: true, errors: [] });

  //   post({
  //     type: 'POST',
  //     url: `${process.env.WRI_API_URL}/dataset/upload`,
  //     headers: [{
  //       key: 'Authorization', value: this.props.properties.authorization
  //     }],
  //     body: formData,
  //     multipart: true,
  //     onSuccess: ({ connectorUrl, fields }) => {
  //       this.setState({
  //         value: connectorUrl,
  //         validations: ['required'],
  //         loading: false
  //       }, () => {
  //         // Publish the new value to the form
  //         if (this.props.onChange) {
  //           this.props.onChange({
  //             ...COLUMN_FORMAT.includes(provider) && {
  //               // filters non-empty fields
  //               fields: fields.filter(field => (field || '').length)
  //             },
  //             value: connectorUrl
  //           });
  //         }
  //         // Trigger validation
  //         this.triggerValidate();
  //       });
  //     },
  //     onError: (err) => {
  //       this.setState({
  //         accepted: [],
  //         loading: false
  //       });
  //       if (this.props.onValid) this.props.onValid(false, err);
  //     }
  //   });
  // }

  render() {
    const {
      accepted,
      properties,
      loading,
      value,
      onDragEnter,
      onDragLeave
    } = this.props;

    const inputClassName = classnames({
      [properties.className]: !!properties.className
    });

    return (
      <div className="c-file">
        <Dropzone
          ref={(node) => { this.dropzone = node; }}
          className="file-dropzone"
          multiple={false}
          disableClick
          disablePreview
          onDrop={this.onDrop}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
        >
          {/* {dropzoneActive &&
            <div className="dropzone-active">
              Drop files...
            </div>
          } */}

          <input
            className={`input ${inputClassName}`}
            value={value}
            id={`input-${properties.name}`}
            readOnly={!!accepted.length}
            onChange={() => this.triggerChange()}
          />

          <button
            type="button"
            className="c-button -primary -compressed file-button"
            onClick={() => this.triggerBrowseOrCancel()}
          >
            {/* <Spinner className="-light -small" isLoading={loading} /> */}
            {(accepted.length) ? 'Cancel' : 'Browse file'}
          </button>
        </Dropzone>
      </div>
    );
  }
}

File.defaultProps = {
  accepted: [],
  validations: [],
  value: '',
  loading: false
};

File.propTypes = {
  properties: PropTypes.object.isRequired,
  validations: PropTypes.array,
  value: PropTypes.string,
  loading: PropTypes.bool,
  accepted: PropTypes.array,
  uploadFile: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDragLeave: PropTypes.func.isRequired,
  onDragEnter: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired
};

export default File;
