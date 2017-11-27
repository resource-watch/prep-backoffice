import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-jsonschema-form';

const DatasetCreateForm = ({ schema, uiSchema, onSubmit }) => (
  <Form
    noHtml5Validate
    schema={schema}
    uiSchema={uiSchema}
    onSubmit={onSubmit}
  />
);

DatasetCreateForm.defaultProps = {
  uiSchema: {}
};

DatasetCreateForm.propTypes = {
  schema: PropTypes.object.isRequired,
  uiSchema: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
};

export default DatasetCreateForm;
