import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-jsonschema-form';

const schema = {
  title: 'New widget',
  type: 'object',
  required: ['dataset', 'title'],
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
    description: {
      type: 'string',
      title: 'Description'
    },
    published: {
      type: 'boolean',
      title: 'Published',
      description: 'Do you want to set this widget as published?',
      default: false
    },
    default: {
      type: 'boolean',
      title: 'Default',
      description: 'Do you want to set this widget as default?',
      default: false
    },
    defaultEditable: {
      type: 'boolean',
      title: 'Default editable widget',
      description: 'Do you want to set this widget as the default editable widget?',
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
  }
};

export default class WidgetCreateForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    const { data } = this.props;
    const schemaProperties = schema.properties || {};

    // Perhaps do a function with this as we will need it in several places...
    // Updates properties of the schema with incoming values
    Object.keys(data).forEach(field =>
      Object.assign(
        schemaProperties,
        { [field]: { ...schemaProperties[field], ...data[field] } }
      )
    );

    // replaces new schema's properties with new values
    Object.assign(schema, { properties: schemaProperties });
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

WidgetCreateForm.defaultProps = {
  data: {}
};

WidgetCreateForm.propTypes = {
  data: PropTypes.object
};
