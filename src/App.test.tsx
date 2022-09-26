import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1', () => {
  render(<App />);
  const h1= screen.getByText(/spent time/i);
  expect(h1).toBeInTheDocument();
});
