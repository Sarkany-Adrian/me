import React from 'react';
import {mount} from 'enzyme';

import About from 'pages/about';

/**
 *
 */
describe('about page: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(<About />);

    expect(wrapper.find('About')).toHaveLength(1);

    wrapper.unmount();
  });
});
