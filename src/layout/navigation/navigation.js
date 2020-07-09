// @flow
import React from 'react';
import NavigationItem from './navigation-item';
import {items as NAV_ITEMS} from 'constants/navigation-items';

import './navigation.scss';

/**
 *
 * @returns {*}
 * @constructor
 */
const Navigation = () => {
  /**
   *
   */
  return (
    <nav role="navigation" className="app-navigation">
      <ul>
        {NAV_ITEMS.map(item => (
          <NavigationItem
            key={item.name}
            route={item.path}
            name={item.name}
            bordered={false}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
