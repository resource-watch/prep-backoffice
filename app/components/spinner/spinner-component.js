import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// import styles from './spinner-styles.scss';

class Spinner extends PureComponent {
  render() {
    const { className, style } = this.props;

    const spinnerClass = classnames('c-spinner', {
      [className]: !!className
    });

    return (
      <div className={spinnerClass}>
        <div className="spinner-box" style={style}>
          <div className="icon" />
        </div>
      </div>
    );
  }
}

Spinner.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

export default Spinner;
