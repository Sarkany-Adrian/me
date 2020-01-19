import React from 'react';
import {mount} from 'enzyme';
import Error404 from '../index';

/**
 *
 */
describe('404 page: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(<Error404 />);

    expect(wrapper).toHaveLength(1);

    wrapper.unmount();
  });
});
