// @flow
import React from 'react';

import HeroText from '../../components/hero-text';
import Image from '../../atoms/image';
// import HeroImage from '../../images/hero.jpg';

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
      <div className="home-page__right">
        <div className="home-page__right__hero-image">
          <Image source={'../../images/hero.jpg'} alt="recruiter hero image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
