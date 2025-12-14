import { render, screen } from '@testing-library/react';
import App from './App';
import { HashRouter } from 'react-router-dom';

describe('App navigation and rendering', () => {
  test('renders main navigation links', () => {
    render(
      <HashRouter>
        <App />
      </HashRouter>
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByText(/OPI/i)).toBeInTheDocument();
    expect(screen.getByText(/VRI/i)).toBeInTheDocument();
    expect(screen.getByText(/In Person/i)).toBeInTheDocument();
    expect(screen.getByText(/Book Your Session/i)).toBeInTheDocument();
  });

  test('renders Home page by default', () => {
    render(
      <HashRouter>
        <App />
      </HashRouter>
    );
    expect(screen.getByText(/Voice Line Services offers professional interpretation/i)).toBeInTheDocument();
  });
});
