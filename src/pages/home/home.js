// @flow
import React from 'react';

import HeroText from 'components/hero-text';
import Image from 'atoms/image';
import HeroImage from 'assets/images/hero.jpg';

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
      <section className="home-page__content">
        <div className="home-page__content__left">
          <Image source={HeroImage} alt="recruiter hero image" />
        </div>
        <div className="home-page__content__right">
          <HeroText />
        </div>
      </section>
    </div>
  );
};

export default Home;
