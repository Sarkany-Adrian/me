// @flow
import React from 'react';

import './footer-item.scss';

/**
 *
 */
type TProps = {
  item: {
    name: string,
    url: string,
    icon: string
  }
};

/**
 *
 * @returns {*}
 * @constructor
 */
const FooterItem = ({item}: TProps) => {
  console.log('item', item.icon);
  /**
   *
   */
  return (
    <a
      href={item.url}
      className="footer-item"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={item.icon} />
    </a>
  );
};

export default FooterItem;
