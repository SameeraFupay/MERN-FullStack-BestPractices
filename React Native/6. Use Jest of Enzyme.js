import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { getByText } = render(<MyComponent />);
    expect(getByText('Hello World')).toBeTruthy();
  });
});