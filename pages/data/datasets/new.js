import React from 'react';
import withRedux from 'next-redux-wrapper';
import { initStore } from 'app/store';
import Page from 'app/layouts/Page';
import DatasetCreateForm from 'app/components/dataset-form';

class DatasetsNewPage extends React.PureComponent {
  static getInitialProps() {
  }

  render() {
    return (
      <Page>
        <h1>New dataset</h1>
        <DatasetCreateForm />
      </Page>
    );
  }
}

export default withRedux(initStore, null, null)(DatasetsNewPage);
