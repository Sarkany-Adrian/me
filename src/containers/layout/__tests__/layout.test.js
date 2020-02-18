import React from 'react';
import {mount} from 'enzyme';
import {BrowserRouter as Router} from 'react-router-dom';

import Layout from 'containers/layout';

/**
 *
 */
describe('layout container: ', () => {
  // mocks
  const MockComponent = () => <div>foo</div>;

  /**
   *
   */
  it('takes a component and renders it', () => {
    const wrapper = mount(
      <Router>
        <Layout component={MockComponent} />
      </Router>
    );

    const component = wrapper.find('MockComponent');

    expect(component).toHaveLength(1);

    wrapper.unmount();
  });
});
