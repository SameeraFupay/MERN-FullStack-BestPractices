import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('matches the previous snapshot', () => {
    const wrapper = shallow(<MyComponent data={[{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});