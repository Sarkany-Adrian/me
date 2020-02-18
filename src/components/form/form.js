// @flow
import React from 'react';
import cx from 'classnames';

import Input from 'atoms/input';

/**
 *
 */
type TProps = {
  className?: string
};

/**
 *
 * @returns {*}
 * @constructor
 */
const Form = ({className}: TProps) => {
  /**
   *
   */
  return (
    <form className={cx(className)}>
      <fieldset>
        <Input value="foo" onChange={() => console.log('changed')} />
      </fieldset>
    </form>
  );
};

export default Form;
