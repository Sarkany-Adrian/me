import React from 'react';
import {mount} from 'enzyme';
import Contact from 'pages/contact';

/**
 *
 */
describe('contact page: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(<Contact />);

    expect(wrapper).toHaveLength(1);

    wrapper.unmount();
  });
});
