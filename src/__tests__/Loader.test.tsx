import React from 'react';
import {render, screen} from '@testing-library/react';
import Loader from '../components/Loader';

describe('<Loader />', () => {
  it('renders loader', () => {
    render(<Loader />);
    const loader = screen.getByLabelText(/Loading/i);
    expect(loader).toBeInTheDocument();
  });
  it('is spinning', () => {
    render(<Loader />);
    const loader = screen.getByLabelText(/Loading/i);
    expect(loader).toHaveStyle('animation: fgOwHZ infinite 2s linear');
  });
});
