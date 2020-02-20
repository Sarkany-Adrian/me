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
      <div className="app-footer__terms">

      </div>
      <ul className="app-footer__social">
        {FOOTER_ITEMS.map((item, index) => (
          <FooterItem key={index} item={item} icon={item.icon} />
        ))}
      </ul>
    </div>
  );
};

export default Footer;
