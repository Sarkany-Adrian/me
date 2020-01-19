// @flow
import React from 'react';

import HeroText from '../../atoms/hero-text';

import './home.scss';

/**
 *
 * @returns {*}
 * @constructor
 */
const Home = () => {
  /**
   *
   */

  return (
    <div className="home-page">
      <div className="home-page__left">
        <HeroText />
      </div>
      <div className="home-page__right">picture here</div>
    </div>
  );
};

export default Home;
