import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders calculate button', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Calculate/i);
  expect(linkElement).toBeInTheDocument();
});