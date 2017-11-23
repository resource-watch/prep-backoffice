import React from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { initStore } from 'app/store';
import Page from 'app/layouts/Page';
import { WidgetCreateForm } from 'app/components/widget-form';

class WidgetsNewPage extends React.PureComponent {
  static getInitialProps() {
    // replace with an API call
    const datasetsSampleList = [
      { label: 'Dataset 1', value: 'dataset-1' },
      { label: 'Dataset 2', value: 'dataset-2' },
      { label: 'Dataset 3', value: 'dataset-3' }
    ];

    // prototype object used to replace properties in form schema
    const newDataForm = {
      dataset: {
        enum: datasetsSampleList.map(ds => ds.value),
        enumNames: datasetsSampleList.map(ds => ds.label),
        default: (datasetsSampleList[0] || {}).value || null
      }
    };

    return {
      newDataForm
    };
  }
  render() {
    const { newDataForm } = this.props;

    return (
      <Page>
        <h1>New Widget</h1>
        <WidgetCreateForm
          data={newDataForm}
        />
      </Page>
    );
  }
}

WidgetsNewPage.defaultProps = {
  newDataForm: {}
};

WidgetsNewPage.propTypes = {
  newDataForm: PropTypes.object
};

export default withRedux(initStore, null, null)(WidgetsNewPage);
