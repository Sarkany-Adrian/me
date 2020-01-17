import React from 'react';
import {mount} from 'enzyme';
import {BrowserRouter as Router} from 'react-router-dom';

import Navigation from '../index';

/**
 *
 */
describe('navigation component: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(
      <Router>
        <Navigation />
      </Router>
    );

    const navigation = wrapper.find('Navigation');

    expect(navigation).toHaveLength(1);

    wrapper.unmount();
  });
});
