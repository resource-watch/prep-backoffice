import { PureComponent, createElement } from 'react';
import PropTypes from 'prop-types';

import FileComponent from './file-component';

class FileContainer extends PureComponent {
  constructor(props) {
    super(props);

    // bindings
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onDragEnter() {
    this.props.onDragEnter();
  }

  onDragLeave() {
    this.props.onDragLeave();
  }

  onDrop(accepted = [], rejected) {
    const { id, onDrop } = this.props;
    onDrop({ id, accepted, rejected });
  }

  render() {
    return createElement(FileComponent, {
      ...this.props,
      onDragEnter: this.onDragEnter,
      onDragLeave: this.onDragLeave,
      onDrop: this.onDrop
    });
  }
}

FileContainer.propTypes = {
  id: PropTypes.string.isRequired,
  onDragEnter: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDrop: PropTypes.func
};

FileContainer.defaultProps = {
  onDragEnter: () => {},
  onDragLeave: () => {},
  onDrop: () => {},
  onChange: () => {}
};

export default FileContainer;
