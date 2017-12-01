import Toastr from 'react-redux-toastr';

import React from 'react';
import Head from './Head';

export default ({ children }) => (
  <div>
    <Head />
    { children }

    <Toastr
      preventDuplicates
      transitionIn="fadeIn"
      transitionOut="fadeOut"
    />
  </div>
);
