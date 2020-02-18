import React from 'react';
import {mount} from 'enzyme';

import Error404 from 'pages/error-404';

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
