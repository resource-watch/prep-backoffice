import React from 'react';
import withRedux from 'next-redux-wrapper';
import { initStore } from 'app/store';
import Page from 'app/layouts/Page';
import { LayerCreateForm } from 'app/components/layer-form';

class LayersNewPage extends React.PureComponent {
  static getInitialProps() {
  }

  render() {
    return (
      <Page>
        <h1>New Layer</h1>
        <LayerCreateForm />
      </Page>
    );
  }
}

export default withRedux(initStore, null, null)(LayersNewPage);
