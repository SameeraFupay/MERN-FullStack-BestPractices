import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders without crashing', () => {
    shallow(<MyComponent />);
  });

  it('displays the correct message', () => {
    const wrapper = shallow(<MyComponent message="Hello, World!" />);
    expect(wrapper.text()).toEqual('Hello, World!');
  });
});