// @flow
import React from 'react';

/**
 *
 */
type TProps = {
  source: string,
  alt: string
};

/**
 *
 * @param source
 * @param alt
 * @returns {*}
 * @constructor
 */
const Image = ({source, alt}: TProps) => {
  return <img src={source} alt={alt} />;
};

export default Image;
