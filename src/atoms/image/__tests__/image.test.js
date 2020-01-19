import React from 'react';
import {mount} from 'enzyme';
import Image from '../index';

/**
 *
 */
describe('image atom: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(<Image source={'foo'} alt={'baz'} />);

    expect(wrapper).toHaveLength(1);

    wrapper.unmount();
  });
});
