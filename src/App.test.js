import { render, screen } from '@testing-library/react';
import App from './App';

test('posts count', () => {
  render(<App />);
  const Element = screen.getByText(/posts sur un total de/i);
  expect(Element).toBeInTheDocument();
});
