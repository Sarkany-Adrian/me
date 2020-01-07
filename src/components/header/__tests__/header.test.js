import React from 'react';
import {mount} from 'enzyme';

import Header from '../index';

/**
 *
 */
describe('Header component: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(<Header />);

    expect(wrapper).toHaveLength(1);

    wrapper.unmount();
  });
});
