import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders without crashing', () => {
    shallow(<MyComponent />);
  });

  it('displays the provided message', () => {
    const wrapper = shallow(<MyComponent message="Hello, World!" />);
    expect(wrapper.text()).toEqual('Hello, World!');
  });

  it('calls the onClick callback when clicked', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<MyComponent onClick={onClick} />);
    wrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});