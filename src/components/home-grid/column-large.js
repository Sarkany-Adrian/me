// @flow

import React from 'react';
import Image from 'atoms/image';

import './column-large.scss';

/**
 *
 */
type TProps = {
  item: {
    imgSrc: string,
    imgAlt: string
  }
};

/**
 *
 * @param item
 * @returns {*}
 * @constructor
 */
const ColumnLarge = ({item}: TProps) => {
  console.log(item);
  return (
    <div className="home-grid__row__column-large">
      <Image source={item.imgSrc} alt={item.imgAlt} />
    </div>
  );
};

export default ColumnLarge;
