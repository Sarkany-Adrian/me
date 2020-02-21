// @flow

import React, {useState, useRef, useEffect} from 'react';
import cx from 'classnames';
import {useHistory} from 'react-router-dom';

import {items as NAV_ITEMS} from 'constants/navigation-items';
import NavigationItem from 'containers/layout/navigation/navigation-item/';

import './navigation.scss';

/**
 *
 * @param isNavOpen
 * @param toggleNav
 */
export const handleNavVisibility = (
  isNavOpen: boolean,
  toggleNav: Function
) => {
  if (document.body && document.body.style) {
    if (!isNavOpen) {
      document.body.style.overflow = 'hidden';
      toggleNav(true);
    } else {
      document.body.style.overflow = 'initial';
      toggleNav(false);
    }
  }
};

/**
 *
 * @returns {*}
 * @constructor
 */
const Navigation = () => {
  const [isNavOpen, toggleNav] = useState(false);
  const history = useHistory();
  const prevCountRef = useRef();

  useEffect(() => {
    if (prevCountRef.current !== history.location.pathname) {
      toggleNav(false);
    }

    prevCountRef.current = history.location.pathname;
  }, [history.location.pathname]);

  /**
   *
   */
  return (
    <nav role="navigation" className="app-navigation">
      <div id="menuToggle" className="app-navigation__toggle">
        <input
          type="checkbox"
          className={cx(
            'app-navigation__toggle__checkbox',
            isNavOpen ? 'open' : 'closed'
          )}
          onClick={() => handleNavVisibility(isNavOpen, toggleNav)}
        />

        <span />
        <span />
        <span />

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
