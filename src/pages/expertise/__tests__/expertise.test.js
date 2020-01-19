import React from 'react';
import {mount} from 'enzyme';
import Expertise from '../index';

/**
 *
 */
describe('expertise page: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(<Expertise />);

    expect(wrapper).toHaveLength(1);

    wrapper.unmount();
  });
});
