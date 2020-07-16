import React from 'react';
import {mount} from 'enzyme';
import {BrowserRouter as Router} from 'react-router-dom';

import Error404 from 'pages/error-404';

/**
 *
 */
describe('404 page: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(
      <Router>
        <Error404 />
      </Router>
    );

    expect(wrapper).toHaveLength(1);

    wrapper.unmount();
  });

  /**
   *
   */
  it('renders title', () => {
    const wrapper = mount(
      <Router>
        <Error404 />
      </Router>
    );

    const title = wrapper.find('.not-found-page__title');
    expect(title).toHaveLength(1);

    wrapper.unmount();
  });
});
