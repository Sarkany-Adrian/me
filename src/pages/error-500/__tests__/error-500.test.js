import React from 'react';
import {mount} from 'enzyme';
import {BrowserRouter as Router} from 'react-router-dom';

import Error500 from 'pages/error-500';

/**
 *
 */
describe('500 page: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(
      <Router>
        <Error500 />
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
        <Error500 />
      </Router>
    );

    const title = wrapper.find('.error-page__title');
    expect(title).toHaveLength(1);

    wrapper.unmount();
  });
});
