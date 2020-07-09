// @flow
import * as React from 'react';
import './layout.scss';

// components
// import TopHat from 'layout/top-hat';
import Navigation from 'layout/navigation';
import Footer from 'layout/footer';

import './layout.scss';

/**
 *
 */
type TProps = {
  children: React.Node
};

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Layout = ({children}: TProps) => {
  /**
   *
   */
  return (
    <main className="site-wrapper">
      {/*<TopHat />*/}
      <Navigation />
      <div className="site-content">{children}</div>
    </main>
  );
};

export default Layout;
