import React from 'react';
import {mount} from 'enzyme';
import {BrowserRouter as Router} from 'react-router-dom';

import Home from 'pages/home';

/**
 *
 */
describe('home page: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(
      <Router>
        <Home />
      </Router>
    );

    expect(wrapper.find('Home')).toHaveLength(1);

    wrapper.unmount();
  });
});
