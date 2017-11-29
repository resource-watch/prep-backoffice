import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import FileComponent from 'components/form/file';
import { post } from 'utils/request';

const FORMATS_WITH_COLUMNS = ['csv', 'tsv'];

const mapStateToProps = state => state.datasetForm;

class DatasetUploadFile extends FileComponent {
  constructor(props) {
    super(props);

    // bindings
    this.onUploadDataset = this.onUploadDataset.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onUploadDataset(files) {
    const { formData, user, id, setFormValues } = this.props;

    const formSend = new FormData();
    const file = files[0] || {};
    const { provider } = formData;

    formSend.append('dataset', file);
    formSend.append('provider', provider);

    this.setState({
      loading: true
    }, () => {
      post({
        type: 'POST',
        url: `${process.env.WRI_API_URL}/dataset/upload`,
        headers: [{
          key: 'Authorization',
          value: (user || {}).token
        }],
        body: formSend,
        multipart: true,
        onSuccess: ({ connectorUrl, fields }) => {
          setFormValues({
            ...FORMATS_WITH_COLUMNS.includes(provider) && {
              // filters non-empty fields
              columnFields: fields.filter(field => (field || '').length)
            },
            [id]: connectorUrl
          });

          this.setState({ loading: false });
        },
        onError: (err) => {
          toastr.error(err[0].detail);
          this.setState({
            accepted: [],
            loading: false
          });
        }
      });
    });
  }

  onDropCallback(accepted) {
    this.onUploadDataset(accepted);
  }
}

export default connect(mapStateToProps, {})(DatasetUploadFile);
