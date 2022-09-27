import { render, screen } from '@testing-library/react';
import { Chart } from './Chart';


describe('Chart', () => {
    test('renders Chart component', () => {
      render(<Chart />);
      //screen.debug();
    });
  });
test('renders button', () => {
  render(<Chart />);
  const button= screen.getByRole('button', {name: /submit/i});
  expect(button).toBeInTheDocument();
});
 
test('renders inputDeal', () => {
  render(<Chart />);
  expect(screen.getByDisplayValue(/deal/i)).toBeInTheDocument();
});
test('renders inputConfigurator', () => {
  render(<Chart />);
  expect(screen.getByDisplayValue(/configurator/i)).toBeInTheDocument();
});
test('renders inputCheckout', () => {
  render(<Chart />);
  expect(screen.getByDisplayValue(/check-out/i)).toBeInTheDocument();
});
