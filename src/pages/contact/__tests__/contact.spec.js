import React from 'react';
import {mount} from 'enzyme';
import Contact from '../index';

/**
 *
 */
describe('about page: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(<Contact />);

    expect(wrapper).toHaveLength(1);

    wrapper.unmount();
  });
});
