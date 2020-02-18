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
    <nav role="navigation" className="app-navigation">
      <div id="menuToggle" className="app-navigation__toggle">
        <input type="checkbox" className="app-navigation__toggle__checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="app-menu" className="app-navigation__toggle__list">
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
    </nav>
  );
};

export default Navigation;
