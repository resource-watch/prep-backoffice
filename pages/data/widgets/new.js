import React from 'react';
import withRedux from 'next-redux-wrapper';
import { initStore } from 'app/store';
import Page from 'app/layouts/Page';
import { WidgetCreateForm } from 'app/components/widget-form';

class WidgetsNewPage extends React.PureComponent {
  static getInitialProps() {
  }

  render() {
    return (
      <Page>
        <h1>New Widget</h1>
        <WidgetCreateForm />
      </Page>
    );
  }
}

export default withRedux(initStore, null, null)(WidgetsNewPage);
