// @flow
import React from 'react';
import {Route} from 'react-router-dom';

// components
import TopHat from '../../components/top-hat';
import Header from '../../components/header';
import Footer from '../../components/footer';

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
  return (
    <div className="app-wrapper">
      <TopHat />

      <Header />

      <Route component={Comp} />

      <Footer />
    </div>
  );
};

export default Layout;
