// @flow
import React from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import cx from 'classnames';

import './navigation-item.scss';

/**
 *
 */
type TProps = {
  route: string,
  name: string
};

/**
 *
 * @constructor
 */
const NavigationItem = ({route, name}: TProps) => {
  const history = useHistory();

  return (
    <li
      className={cx('navigation-item', {
        'active': history.location.pathname === route
      })}
    >
      <Link to={route}>{name}</Link>
    </li>
  );
};

export default NavigationItem;
