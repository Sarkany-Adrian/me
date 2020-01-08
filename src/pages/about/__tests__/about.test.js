import React from 'react';
import {mount} from 'enzyme';
import About from '../index';

/**
 *
 */
describe('about page: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(<About />);

    expect(wrapper).toHaveLength(1);

    wrapper.unmount();
  });
});
