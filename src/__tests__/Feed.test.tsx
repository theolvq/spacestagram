import React from 'react';
import {render, screen} from '@testing-library/react';
import Feed from '../components/Feed';
import {mockImages} from '../utils/testHelper';

describe('<Feed />', () => {
  it('renders feed with the correct amount of images', () => {
    render(<Feed images={mockImages} setImages={jest.fn()} />);
    const cards = screen.getAllByTestId('card');
    expect(cards.length).toBe(mockImages.length);
  });
});
