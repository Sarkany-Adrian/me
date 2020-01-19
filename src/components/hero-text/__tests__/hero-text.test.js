import React from 'react';
import {mount} from 'enzyme';
import {BrowserRouter as Router} from 'react-router-dom';

import HeroText from '../index';

/**
 *
 */
describe('hero text: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(
      <Router>
        <HeroText />
      </Router>
    );

    expect(wrapper.find('HeroText')).toHaveLength(1);

    wrapper.unmount();
  });
});
