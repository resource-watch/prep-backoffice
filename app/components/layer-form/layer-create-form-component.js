import React from 'react';
import Form from 'react-jsonschema-form';
import CodeField from 'components/form/code-field/code-field-component';

const schema = {
  title: 'Create layer',
  type: 'object',
  required: ['dataset', 'title', 'provider'],
  properties: {
    dataset: {
      type: 'string',
      title: 'Dataset',
      enum: [],
      enumNames: []
    },
    title: {
      type: 'string',
      title: 'Title',
      minLength: 3
    },
    provider: {
      type: 'string',
      title: 'Provider',
      default: 'cartodb',
      enum: ['cartodb', 'featureservice', 'leaflet', 'wms', 'gee'],
      enumNames: ['Carto', 'Argics Feature Service', 'Leaflet', 'WMS', 'GEE']
    },
    description: {
      type: 'string',
      title: 'Description'
    },
    layerConfig: {
      type: 'string',
      default: '{}'
    },
    legendConfig: {
      type: 'string',
      default: '{}'
    },
    interactionConfig: {
      type: 'string',
      default: '{}'
    },
    default: {
      type: 'boolean',
      title: 'Default',
      description: 'Do you want to set this layer as the default one. (Only one default layer per dataset is allowed at a time)',
      default: false
    }
  }
};

const uiSchema = {
  dataset: {
    'ui:widget': 'select'
  },
  description: {
    'ui:widget': 'textarea'
  },
  layerConfig: {
    'ui:widget': CodeField,
    'ui:help': 'This must be valid JSON.'
  },
  legendConfig: {
    'ui:widget': CodeField,
    'ui:help': 'This must be valid JSON.'
  },
  interactionConfig: {
    'ui:widget': CodeField,
    'ui:help': 'This must be valid JSON.'
  }
};

export default class LayerCreateForm extends React.PureComponent {
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
