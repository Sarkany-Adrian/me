// @flow
import React from 'react';

import HeroText from 'components/hero-text';
import Image from 'atoms/image';
import HeroImage from 'assets/images/hero.jpg';
import HomeGrid from 'components/home-grid';
import HomeBioSection from "components/home-bio-section"

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
      <section className="home-page__content__top">
        <div className="home-page__content__top__left">
          <Image source={HeroImage} alt="recruiter hero image" />
        </div>
        <div className="home-page__content__top__right">
          <HeroText />
        </div>
      </section>
      <HomeBioSection />
      <section className="home-page__content__grid">
        <HomeGrid />
      </section>
    </div>
  );
};

export default Home;
