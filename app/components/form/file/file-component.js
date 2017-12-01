import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Dropzone from 'react-dropzone';

import Spinner from 'components/spinner';

class File extends PureComponent {
  constructor(props) {
    super(props);

    // files are saved locally because redux can't serialize them.
    // more info: https://github.com/reactjs/redux/issues/2276#issuecomment-283995164
    this.state = {
      accepted: [],
      rejected: [],
      dropzoneActive: false,
      loading: false
    };

    // bindings
    this.triggerBrowseOrCancel = this.triggerBrowseOrCancel.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  /**
   * UI EVENTS
   * - triggerBrowseOrCancel
   * - triggerChange
  */
  /**
   * DROPZONE EVENTS
   * - onDragEnter
   * - onDragLeave
   * - onDrop
  */
  onDragEnter() {
    this.setState({
      dropzoneActive: true
    });
  }

  onDragLeave() {
    this.setState({
      dropzoneActive: false
    });
  }

  onDrop(accepted, rejected) {
    this.setState({
      accepted,
      rejected,
      dropzoneActive: false
    }, () => {
      if (this.onDropCallback) this.onDropCallback(accepted);
    });
  }

  triggerChange(e) {
    const value = e.currentTarget.value;
    const { onChange, id } = this.props;

    if (onChange) onChange(id, value);
  }

  triggerBrowseOrCancel() {
    const { accepted } = this.state;
    const { id, value, onChange } = this.props;
    if (accepted.length || value.length) {
      this.setState({
        accepted: []
      }, () => {
        // Publish the new value to the form
        if (onChange) onChange(id);
      });
    } else {
      this.dropzone.open();
    }
  }

  render() {
    const {
      properties,
      value,
      onDragEnter,
      onDragLeave
    } = this.props;

    const { accepted, loading } = this.state;

    const inputClassName = classnames({
      [properties.className]: !!properties.className
    });

    return (
      <div className="c-file">
        <Dropzone
          ref={(node) => { this.dropzone = node; }}
          className="file-dropzone"
          multiple={false}
          disableClick
          disablePreview
          onDrop={this.onDrop}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
        >
          <input
            className={`input ${inputClassName}`}
            value={value}
            id={`input-${properties.name}`}
            readOnly={!!accepted.length}
            onChange={e => this.triggerChange(e)}
          />

          <button
            type="button"
            className="c-button -primary -compressed file-button"
            onClick={() => this.triggerBrowseOrCancel()}
          >
            {loading &&
              <Spinner className="-light -small" />}
            {(accepted.length || value.length) ? 'Cancel' : 'Browse file'}
          </button>
        </Dropzone>
      </div>
    );
  }
}

File.defaultProps = {
  onChange: () => {},
  onDragLeave: () => {},
  onDragEnter: () => {}
};

File.propTypes = {
  properties: PropTypes.object.isRequired,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDragEnter: PropTypes.func
};

export default File;
