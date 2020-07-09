import React from 'react';
import {mount} from 'enzyme';

import TopHat from '../index';

/**
 *
 */
describe('navigation component: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(<TopHat />);

    expect(wrapper).toHaveLength(1);

    wrapper.unmount();
  });
});
