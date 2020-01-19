// @flow
import React from 'react';
import {Link} from 'react-router-dom';

import './hero-text.scss';

/**
 *
 * @returns {*}
 * @constructor
 */
const HeroText = () => {
  /**
   *
   */
  return (
    <div className="hero-text">
      <h2>
        Hi! My name is <span className="hero-text__standout">whatever</span>,
      </h2>
      <h1>recruiter based in Munich.</h1>
      <Link to="/contact">contact me</Link>
    </div>
  );
};

export default HeroText;
