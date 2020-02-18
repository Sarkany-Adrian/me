// @flow
import React from 'react';
import {items as NAV_ITEMS} from 'constants/navigation-items';

import NavigationItem from 'containers/layout/navigation/navigation-item';

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
    <div className="app-navigation">
      <ul className="app-navigation__list">
        {NAV_ITEMS.map((item: Object) => (
          <NavigationItem
            route={item.path}
            name={item.name}
            key={item.name}
            bordered={item.bordered}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
