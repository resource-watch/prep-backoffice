import React from 'react';
import PropTypes from 'prop-types';

const Table = props => (
  <table>
    <thead>
      {props.headers.map(head => (<th>{head}</th>))}
      {props.enableActions && <th>Actions</th>}
    </thead>

    <tbody>
      {props.data.map(d => (
        <tr>
          {.fields.map(field => (
            <td>{field.value}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  headers: PropTypes.array,
  fields: PropTypes.array,
  data: PropTypes.array,
  enableActions: PropTypes.bool
};

Table.defaultProps = {
  headers: [{ title: 'Name' }],
  fields: ['name', 'env', 'provider', 'verified'],
  data: [],
  enableActions: true
};

export default Table;
