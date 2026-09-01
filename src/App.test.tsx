import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the projects section', () => {
  render(<App />);
  const projectsHeading = screen.getByRole('heading', { name: /projetos/i });
  expect(projectsHeading).toBeInTheDocument();
});
