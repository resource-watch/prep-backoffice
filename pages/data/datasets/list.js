import React from 'react';
import withRedux from 'next-redux-wrapper';
import { initStore } from 'app/store';
import Page from 'app/layouts/Page';

class DatasetsListPage extends React.PureComponent {
  static getInitialProps() {
  }

  render() {
    return (
      <Page>
        <h1>Datasets</h1>
      </Page>
    );
  }
}

export default withRedux(initStore, null, null)(DatasetsListPage);
