import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const setup = () => {
  render(<App />);
};

describe('App Component', () => {
  beforeEach(() => {
    setup(); // Call the setup function to render the component
  });

  test('renders the input label', () => {
    const labelElement = screen.getByLabelText(/Input String/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('calculates sum of positive numbers', () => {
    const textarea = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /Compute/i });

    fireEvent.change(textarea, { target: { value: '1,2,3' } });
    fireEvent.click(button);

    const sumElement = screen.getByText(/Sum of the numbers is:/i);
    expect(sumElement).toHaveTextContent('6'); // 1 + 2 + 3 = 6
  });

  test('handles empty input', () => {
    const button = screen.getByRole('button', { name: /Compute/i });
    fireEvent.click(button);

    const sumElement = screen.getByText(/Sum of the numbers is:/i);
    expect(sumElement).toHaveTextContent('0'); // should return 0 for empty input
  });

  test('displays an error for negative numbers', () => {
    const textarea = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /Compute/i });

    fireEvent.change(textarea, { target: { value: '-1,2,3' } });
    fireEvent.click(button);

    const errorElement = screen.getByText(/Negative numbers not allowed:/i);
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent('-1'); // should show the negative number
  });

  test('calculates sum correctly with new lines and commas', () => {
    const textarea = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /Compute/i });

    fireEvent.change(textarea, { target: { value: '1\n2,3' } });
    fireEvent.click(button);

    const sumElement = screen.getByText(/Sum of the numbers is:/i);
    expect(sumElement).toHaveTextContent('6'); // 1 + 2 + 3 = 6
  });
});
