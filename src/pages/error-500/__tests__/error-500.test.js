import React from 'react';
import {mount} from 'enzyme';

import Error500 from 'pages/error-500';

/**
 *
 */
describe('404 page: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(<Error500 />);

    expect(wrapper).toHaveLength(1);

    wrapper.unmount();
  });
});