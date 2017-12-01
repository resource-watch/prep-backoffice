import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-jsonschema-form';

const DatasetCreateForm = ({ schema, uiSchema, formData, widgets, onSubmit, onChange }) => (
  <Form
    noHtml5Validate
    schema={schema}
    uiSchema={uiSchema}
    onSubmit={onSubmit}
    onChange={onChange}
    formData={formData}
    widgets={widgets}
  />
);

DatasetCreateForm.defaultProps = {
  uiSchema: {},
  formData: {}
};

DatasetCreateForm.propTypes = {
  schema: PropTypes.object.isRequired,
  uiSchema: PropTypes.object,
  formData: PropTypes.object,
  widgets: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DatasetCreateForm;
