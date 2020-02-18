import React from 'react';
import {mount} from 'enzyme';
import Logo from 'atoms/logo';

/**
 *
 */
describe('logo atom: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(<Logo />);

    expect(wrapper).toHaveLength(1);

    wrapper.unmount();
  });
});
