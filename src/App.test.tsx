import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    //screen.debug();
  });
});

test('renders h1', () => {
  render(<App />);
  const h1= screen.getByText(/spent time/i);
  expect(h1).toBeInTheDocument();
});