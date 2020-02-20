// @flow
import React from 'react';
import {Route} from 'react-router-dom';

// components
// import TopHat from 'containers/layout/top-hat';
import Footer from 'containers/layout/footer';
import Navigation from 'containers/layout/navigation';

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
    <main className="app">
      {/*<TopHat />*/}
      <Navigation />

      <app className="app__content">
        <Route component={Comp} />
      </app>

      <Footer />
    </main>
  );
};

export default Layout;
