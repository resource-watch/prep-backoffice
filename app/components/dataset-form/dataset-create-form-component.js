import React from 'react';
import Form from 'react-jsonschema-form';
import CodeField from 'components/form/code-field/code-field-component';

const schema = {
  title: 'Create dataset',
  type: 'object',
  required: ['title', 'environment', 'provider'],
  properties: {
    title: {
      type: 'string',
      title: 'Title',
      minLength: 3
    },
    subtitle: {
      type: 'string',
      title: 'Subtitle'
    },
    environment: {
      type: 'string',
      title: 'Environment',
      default: 'prepproduction',
      enum: ['prepproduction', 'production']
    },
    geo: {
      type: 'boolean',
      title: 'Does this dataset contain geographical features such as points, polygons or lines?',
      default: false
    },
    provider: {
      type: 'string',
      title: 'Provider',
      default: 'cartodb',
      enum: ['cartodb', 'gee', 'featureservice', 'nexgddp', 'json', 'csv', 'tsv', 'xml', 'wms'],
      enumNames: ['Carto', 'Google Earth Engine', 'Argics Feature Service', 'NexGDDP', 'JSON',
        'CSV', 'TSV', 'XML', 'WMS']
    },
    config: {
      type: 'string',
      default: '{}'
    },
    published: {
      type: 'boolean',
      title: 'Published',
      default: false
    }
  },
  dependencies: {
    provider: {
      oneOf: [
        {
          properties: {
            provider: {
              enum: ['nexgddp']
            },
            tablename: {
              title: 'Table name',
              type: 'string'
            }
          }
        },
        {
          properties: {
            provider: {
              enum: ['cartodb']
            },
            tablename: {
              title: 'Table name',
              type: 'string'
            },
            username: {
              title: 'User name',
              type: 'string'
            }
          }
        }
      ]
    }
  }
};

const uiSchema = {
  environment: {
    'ui:help': 'Choose "preproduction" to see this dataset it only as admin, "production" option will show it in public site.'
  },
  config: {
    'ui:widget': CodeField,
    'ui:help': 'This must be valid JSON.'
  }
};

export default class DatasetCreateForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(formData) {
    console.log(formData);
  }

  render() {
    return (
      <Form
        schema={schema}
        uiSchema={uiSchema}
        noHtml5Validate
        onSubmit={this.onSubmit}
      />
    );
  }
}
