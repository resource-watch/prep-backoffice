import React from 'react';
import { initStore } from '../app/store';
import withRedux from 'next-redux-wrapper';
import Page from '../app/layouts/Page';

class ExploreIndex extends React.PureComponent {
  static getInitialProps() {
    const datasets = {

    };
    return { datasets };
  }

  render() {
    const { datasets } = this.props;
    return (
      <Page>
        <Map datasets={datasets} />
      </Page>
    );
  }
}

export default withRedux(initStore, null, null)(ExploreIndex);
