import React from 'react';
import {mount} from 'enzyme';
import Clients from 'pages/clients/index';

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
