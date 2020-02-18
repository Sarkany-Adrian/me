import React from 'react';
import {mount} from 'enzyme';

import Footer from 'containers/layout/footer';

/**
 *
 */
describe('footer component: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(<Footer />);

    expect(wrapper).toHaveLength(1);

    wrapper.unmount();
  });
});
