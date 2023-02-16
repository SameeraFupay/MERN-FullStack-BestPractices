import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments the count when the button is clicked', () => {
  const { getByText } = render(<Counter />);
  const button = getByText('Increment');
  fireEvent.click(button);
  expect(getByText('Count: 1')).toBeInTheDocument();
});