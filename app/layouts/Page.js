import Toastr from 'react-redux-toastr';

import React from 'react';
import Head from './Head';

export default ({ children }) => (
  <div>
    <Head />

    <div className="container">
      <div className="row">
        <div className="col col-md-8 col-md-offset-2">
          { children }
        </div>
      </div>
    </div>

    <Toastr
      preventDuplicates
      transitionIn="fadeIn"
      transitionOut="fadeOut"
    />
  </div>
);
