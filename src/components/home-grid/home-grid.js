// @flow

import React from 'react';
import ColumnLarge from './column-large';
import ColumnSmall from './column-small';
import {items as GRID_ITEMS} from 'constants/home-page-grid-items';

import './home-grid.scss';

/**
 *
 * @returns {*}
 * @constructor
 */
const HomeGrid = () => {
  /**
   *
   */
  return (
    <div className="home-grid">
      {GRID_ITEMS.map((item: Object, index: number) => {
        if (index % 2 === 0) {
          return (
            <div className="home-grid__row" key={index}>
              <ColumnLarge item={item} />
              <ColumnSmall />
            </div>
          );
        }

        return (
          <div className="home-grid__row" key={index}>
            <ColumnSmall />
            <ColumnLarge item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default HomeGrid;
