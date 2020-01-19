// @flow
import React from 'react';

import './contact.scss';

///
import Input from '../../atoms/input';

/**
 *
 * @returns {*}
 * @constructor
 */
const Contact = () => {
  /**
   *
   */
  return (
    <div className="contact-page">
      <div>
        contact page <Input value="test" onChange={() => undefined} />
      </div>
    </div>
  );
};

export default Contact;
