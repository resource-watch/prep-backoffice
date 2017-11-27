import React, { PureComponent } from 'react';

import FileContainer from 'components/form/file/file';

// utils
// import { post } from 'utils/request';

const COLUMN_FORMAT = ['csv', 'tsv'];

export default class DatasetUploadFile extends PureComponent {
  constructor(props) {
    super(props);

    // bindings
    this.onUploadDataset = this.onUploadDataset.bind(this);
  }

  // onDrop(accepted, rejected) {
  //   console.log(accepted, rejected);
  // }

  onUploadDataset(file) {
    // const formData = new FormData();
    // const { provider } = this.props.properties || {};
    // formData.append('dataset', file);
    // formData.append('provider', provider);

    // this.setState({ loading: true, errors: [] });

    // post({
    //   type: 'POST',
    //   url: `${process.env.WRI_API_URL}/dataset/upload`,
    //   headers: [{
    //     key: 'Authorization', value: this.props.properties.authorization
    //   }],
    //   body: formData,
    //   multipart: true,
    //   onSuccess: ({ connectorUrl, fields }) => {
    //     this.setState({
    //       value: connectorUrl,
    //       validations: ['required'],
    //       loading: false
    //     }, () => {
    //       // Publish the new value to the form
    //       if (this.props.onChange) {
    //         this.props.onChange({
    //           ...COLUMN_FORMAT.includes(provider) && {
    //             // filters non-empty fields
    //             fields: fields.filter(field => (field || '').length)
    //           },
    //           value: connectorUrl
    //         });
    //       }
    //       // Trigger validation
    //       this.triggerValidate();
    //     });
    //   },
    //   onError: (err) => {
    //     this.setState({
    //       accepted: [],
    //       loading: false
    //     });
    //     if (this.props.onValid) this.props.onValid(false, err);
    //   }
    // });
  }

  render() {
    return (
      <FileContainer
        {...this.props}
        uploadFile={this.onUploadDataset}
        properties={{
          name: 'dataset-upload'
        }}
      />
    );
  }
}
