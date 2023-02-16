import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

jest.mock('./api', () => ({
  fetchData: jest.fn(() => Promise.resolve({ data: 'mocked data' })),
}));

describe('MyComponent', () => {
  it('renders without crashing', () => {
    shallow(<MyComponent />);
  });

  it('fetches data from the API', async () => {
    const wrapper = shallow(<MyComponent />);
    await wrapper.instance().componentDidMount();
    expect(wrapper.state('data')).toEqual('mocked data');
  });
});