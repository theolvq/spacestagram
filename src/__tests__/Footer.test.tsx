import {render, screen} from '@testing-library/react';
import React from 'react';
import Footer from '../components/Footer';

describe('<Footer />', () => {
  it('renders footer', () => {
    render(<Footer />);
    const footer = screen.getByTitle(/Back to Top/i);
    expect(footer).toBeInTheDocument();
  });
});
