import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Chart } from './Chart';

test('renders name input', () => {
  const { getByLabelText } = render(
    <MemoryRouter>
      <Chart />
    </MemoryRouter>
  );
  const inputElement = getByLabelText(/name/i);
  expect(inputElement).toBeInTheDocument();
});

test('it should allow letters to be in the input', () => {
  const { getByLabelText } = render(
    <MemoryRouter>
      <Chart />
    </MemoryRouter>
  );
  const input: HTMLInputElement = getByLabelText(/name/i) as HTMLInputElement;
  fireEvent.change(input, { target: { value: 'Olena' } });
  expect(input.value).toBe('Olena');
});