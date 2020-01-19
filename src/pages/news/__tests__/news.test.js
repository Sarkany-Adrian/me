import React from 'react';
import {mount} from 'enzyme';
import News from '../index';

/**
 *
 */
describe('news page: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(<News />);

    expect(wrapper).toHaveLength(1);

    wrapper.unmount();
  });
});
