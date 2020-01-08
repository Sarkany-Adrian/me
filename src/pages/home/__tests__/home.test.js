import React from 'react';
import {mount} from 'enzyme';
import Home from '../index';

/**
 *
 */
describe('about page: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(<Home />);

    expect(wrapper).toHaveLength(1);

    wrapper.unmount();
  });
});
