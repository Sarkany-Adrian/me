// @flow
import React from 'react';

import './input.scss';

/**
 *
 */
type TProps = {
  value: string,
  onChange: (value: string) => void,
  maxLength?: number
};

/**
 *
 * @param value
 * @param onChange
 * @param maxLength
 * @returns {*}
 * @constructor
 */
const Input = ({value, onChange, maxLength}: TProps) => {
  // defaults
  const MAX_LENGTH = 20;

  // handler
  const handleChange = e => {
    let value = e.target.value;

    onChange(value);
  };

  /**
   *
   */
  return (
    <div className="input-atom">
      <label>label</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        maxLength={maxLength ? maxLength : MAX_LENGTH}
      />
    </div>
  );
};

export default Input;
