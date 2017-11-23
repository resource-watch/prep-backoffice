import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

const AceEditor = dynamic(import('react-ace'), { ssr: false });
dynamic(import('brace/mode/json'), { ssr: false });
dynamic(import('brace/theme/github'), { ssr: false });

class Code extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onCodeChange = this.onCodeChange.bind(this);
  }

  onCodeChange(value) {
    this.props.onChange(value);
  }

  render() {
    const { name, value } = this.props;
    return (
      <AceEditor
        name={name}
        value={value}
        mode="json"
        theme="github"
        tabSize={2}
        width="100%"
        wrapEnabled
        showPrintMargin={false}
        editorProps={{ $blockScrolling: true }}
        onChange={this.onCodeChange}
      />
    );
  }
}

Code.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func
};

Code.defaultProps = {
  name: '{}'
};

export default Code;
