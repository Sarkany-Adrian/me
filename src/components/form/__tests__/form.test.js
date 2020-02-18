import React from 'react';
import {mount} from 'enzyme';
import Form from 'components/form';

/*
 *
 */
describe('form component: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(<Form />);

    expect(wrapper).toHaveLength(1);

    wrapper.unmount();
  });
});
