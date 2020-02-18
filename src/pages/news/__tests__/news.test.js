import React from 'react';
import {mount} from 'enzyme';

import News from 'pages/news';

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
