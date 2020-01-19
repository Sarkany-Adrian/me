// @flow
import React from 'react';

/**
 *
 */
type TProps = {
  value: string,
  onChange: (value: string) => void
};

/**
 *
 * @param value
 * @param onChange
 * @returns {*}
 * @constructor
 */
const Input = ({value, onChange}: TProps) => {
  const handleChange = e => {
    let value = e.target.value;

    onChange(value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
};

export default Input;
