import React from 'react';
import {mount} from 'enzyme';

import Footer from '../index';

/**
 *
 */
describe('Footer component: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(<Footer />);

    expect(wrapper).toHaveLength(1);

    wrapper.unmount();
  });
});
