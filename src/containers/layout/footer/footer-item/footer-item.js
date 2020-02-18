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
      <img src={item.icon} alt={item.name} />
    </a>
  );
};

export default FooterItem;
