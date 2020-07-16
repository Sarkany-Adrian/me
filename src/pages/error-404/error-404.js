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
      <h1 className="not-found-page__title">page not found</h1>
      <Link to="/" className="not-found-page__redirect">
        go home
      </Link>
    </div>
  );
};

export default Error404;
