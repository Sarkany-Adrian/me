import React from 'react';
import {mount} from 'enzyme';
import Input from '../index';

const mockOnChange = jest.fn();
const event = {
  target: {
    value: 'value'
  }
};

/**
 *
 */
describe('input atom: ', () => {
  /**
   *
   */
  it('renders', () => {
    const wrapper = mount(<Input value="foo" onChange={mockOnChange} />);

    expect(wrapper).toHaveLength(1);

    wrapper.unmount();
  });

  /**
   *
   */
  it('invokes the onChange prop', () => {
    const wrapper = mount(<Input value="foo" onChange={mockOnChange} />);

    wrapper.find('input').simulate('change', event);
    expect(mockOnChange).toHaveBeenCalled();

    wrapper.unmount();
  });
});
