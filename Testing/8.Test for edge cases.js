import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders without crashing with an empty list of items', () => {
    shallow(<MyComponent data={[]} />);
  });

  it('renders an error message when there is an error in the data', () => {
    const wrapper = shallow(<MyComponent data={[{ id: 1, name: 'Item 1' }, { id: 2, error: 'An error occurred' }]} />);
    expect(wrapper.text()).toContain('An error occurred');
  });
});