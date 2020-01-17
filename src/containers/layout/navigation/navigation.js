// @flow
import React from 'react';
import {Link} from 'react-router-dom';

import './navigation.scss';

/**
 *
 * @returns {*}
 * @constructor
 */
const Navigation = () => {
  /**
   *
   */
  return (
    <div className="app-navigation">
      <div className="app-navigation__left">
        <ul className="app-navigation__left__list">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="app-navigation__right">right</div>
    </div>
  );
};

export default Navigation;
