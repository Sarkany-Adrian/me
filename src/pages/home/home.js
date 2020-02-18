// @flow
import React from 'react';

import HeroText from 'components/hero-text';
// import Image from 'atoms/image';
// import HeroImage from 'assets/images/hero.jpg';

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
      <div className="home-page__row">
        <div className="home-page__row__column">
          <HeroText />
        </div>
        <div className="home-page__row__column">2</div>
      </div>
    </div>
  );
};

export default Home;
