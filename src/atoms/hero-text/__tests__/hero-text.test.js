import React from 'react';
import {mount} from 'enzyme';
import HeroText from '../index';

/**
 *
 */
describe('hero text: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(<HeroText />);

    expect(wrapper).toHaveLength(1);

    wrapper.unmount();
  });
});
