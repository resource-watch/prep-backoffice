import React from 'react';
import { initStore } from '../app/store';
import withRedux from 'next-redux-wrapper';
import Select from '../components/form/Select';
import Page from '../app/layouts/Page';

class Home extends React.PureComponent {
  static getInitialProps() {
    const options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' }
    ];
    return { options };
  }

  render() {
    const { options } = this.props;

    return (
      <Page>
        <Select name="dataset" options={options} />
      </Page>
    );
  }
}

export default withRedux(initStore, null, null)(Home);
