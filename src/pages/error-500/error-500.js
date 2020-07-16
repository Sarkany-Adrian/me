// @flow
import React from 'react';
import {Link} from 'react-router-dom';
import './error-500.scss';

/**
 *
 * @returns {*}
 * @constructor
 */
const Error500 = () => {
  /**
   *
   */
  return (
    <div className="error-page">
      <h1 className="error-page__title">500</h1>
      <h2 className="error-page__subtitle">Shoot, something went wrong...</h2>
      <Link to="/" className="error-page__redirect">
        go home
      </Link>
    </div>
  );
};

export default Error500;
