import React from 'react';
import {mount} from 'enzyme';

import Expertise from 'pages/expertise';

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
