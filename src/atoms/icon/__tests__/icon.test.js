import React from 'react';
import {mount} from 'enzyme';
import Icon from 'atoms/icon';

/**
 *
 */
describe('icon atom: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(<Icon />);

    expect(wrapper).toHaveLength(1);

    wrapper.unmount();
  });
});
