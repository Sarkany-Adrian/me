// @flow
import React from 'react';
import {Route} from 'react-router-dom';

// components
import TopHat from './top-hat';
import Footer from './footer';
import Navigation from './navigation';

import './layout.scss';

/**
 *
 */
type TProps = {
  component: React$ComponentType<*>
};

/**
 *
 * @returns {*}
 * @constructor
 */
const Layout = ({component: Comp}: TProps) => {
  /**
   *
   */
  return (
    <div className="app-wrapper">
      <TopHat />

      <Navigation />

      <Route component={Comp} />

      <Footer />
    </div>
  );
};

export default Layout;
