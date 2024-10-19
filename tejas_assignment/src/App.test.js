import { render, screen } from '@testing-library/react';
import App from './App';

test('renders textbox to enter string for finding the sum', () => {
  render(<App />);
  const linkElement = screen.getByRole("textbox");
  expect(linkElement).toBeInTheDocument();
});
