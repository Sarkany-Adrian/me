// @flow
import React from 'react';
import {Link} from 'react-router-dom';

import './error-404.scss';

/**
 *
 * @returns {*}
 * @constructor
 */
const Error404 = () => {
  /**
   *
   */
  return (
    <div className="not-found-page">
      <h1 className="not-found-page__title">404</h1>
      <h2 className="not-found-page__subtitle">oh no! page not found</h2>
      <Link to="/" className="not-found-page__redirect">
        go home
      </Link>
    </div>
  );
};

export default Error404;
