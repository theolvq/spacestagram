import {render, screen} from '@testing-library/react';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from '../App';

const MockApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

describe('<App />', () => {
  it('should render app', () => {
    render(<MockApp />);
    const title = screen.getByText(/Spacestagram/i);
    expect(title).toBeInTheDocument();
  });
});
