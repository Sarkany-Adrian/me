// @flow
import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import cx from 'classnames';

import './navigation-item.scss';

/**
 *
 */
type TProps = {
  route: string,
  name: string,
  bordered: boolean
};

/**
 *
 * @constructor
 */
const NavigationItem = ({route, name, bordered}: TProps) => {
  const history = useHistory();

  return (
    <li
      className={cx('navigation-item', {
        active: history.location.pathname === route,
        bordered: bordered
      })}
    >
      <Link to={route}>{name}</Link>
    </li>
  );
};

export default NavigationItem;
