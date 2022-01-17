import {render, screen} from '@testing-library/react';
import React from 'react';
import Error from '../components/Error';

describe('<Error />', () => {
  it('renders error with the correct error', () => {
    const error = 'Oops, it looks like we ran into the following error: Error';
    render(<Error error={error} />);
    const errorText = screen.getByText(
      /Oops, it looks like we ran into the following error:/i,
    );
    expect(errorText).toBeInTheDocument();
  });
});
