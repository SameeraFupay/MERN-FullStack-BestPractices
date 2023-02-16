import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders without crashing', () => {
    shallow(<MyComponent data={[{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]} />);
  });

  it('renders the correct number of items', () => {
    const wrapper = shallow(<MyComponent data={[{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]} />);
    expect(wrapper.find('div').length).toBe(2);
  });
});