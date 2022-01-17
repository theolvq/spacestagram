import {render, screen} from '@testing-library/react';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from '../components/Header';

const MockHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

describe('<Header />', () => {
  it('renders header', () => {
    render(<MockHeader />);
    const header = screen.getByText(/Spacestagram/i);
    expect(header).toBeInTheDocument();
  });
});
