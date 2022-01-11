import {render} from '@testing-library/react';
import React from 'react';
import Card, {CardProps} from '../components/Card';

describe('<Card />', () => {
  it('should render', () => {
    render(<Card />);
  });
});
