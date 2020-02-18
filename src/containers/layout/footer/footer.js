// @flow
import React from 'react';
import {items as FOOTER_ITEMS} from 'constants/footer-items';

import FooterItem from 'containers/layout/footer/footer-item';

import './footer.scss';

/**
 *
 * @returns {*}
 * @constructor
 */
const Footer = () => {
  /**
   *
   */
  return (
    <div className="app-footer">
      <ul>
        {FOOTER_ITEMS.map((item, index) => (
          <FooterItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Footer;
