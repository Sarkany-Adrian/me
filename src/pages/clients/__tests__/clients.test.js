import React from 'react';
import {mount} from 'enzyme';
import Clients from '../index';

/**
 *
 */
describe('clients page: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(<Clients />);

    expect(wrapper).toHaveLength(1);

    wrapper.unmount();
  });
});
