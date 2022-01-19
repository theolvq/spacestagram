import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Card from '../components/Card';
import {mockImages} from '../utils/testHelper';

const mockLike = jest.fn();
const mockUnlike = jest.fn();
const mockSave = jest.fn();
const mockRemove = jest.fn();

describe('<Card />', () => {
  const image = mockImages[0];
  beforeEach(() => {
    render(
      <Card
        picture={image}
        like={mockLike}
        unlike={mockUnlike}
        save={mockSave}
        remove={mockRemove}
      />,
    );
  });
  it('should render card', () => {
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
  });

  it('should display the correct title', () => {
    const title = screen.getByText(image.title);
    expect(title).toBeInTheDocument();
  });

  it('should display the correct description', () => {
    const description = screen.getByText((content) =>
      content.startsWith(image.explanation.substring(0, 200)),
    );
    expect(description).toBeInTheDocument();
  });
  describe('Comments', () => {
    it('should allow for comments to be written, once text is present in input, button should be enabled', () => {
      const input = screen.getByPlaceholderText(
        /Add a comment.../i,
      ) as HTMLTextAreaElement;
      const button = screen.getByLabelText(/Add comment/i);
      fireEvent.change(input, {target: {value: 'test comment'}});
      expect(input.value).toBe('test comment');
      expect(button).toBeEnabled();
    });

    it('should allow for comments to be added', () => {
      const input = screen.getByPlaceholderText(
        /Add a comment.../i,
      ) as HTMLTextAreaElement;
      const button = screen.getByLabelText(/Add comment/i);
      const comment = 'test comment';
      const commentList = screen.getByTestId('comment-list');
      fireEvent.change(input, {target: {value: comment}});
      fireEvent.click(button);
      expect(commentList).toHaveTextContent(comment);
    });

    it('if no text is present in input, add comment button should be disabled', () => {
      const button = screen.getByLabelText(/Add comment/i);
      expect(button).toBeDisabled();
    });

    it('input has focus when comment button is clicked', () => {
      const input = screen.getByPlaceholderText(
        /Add a comment.../i,
      ) as HTMLTextAreaElement;
      const commentButton = screen.getByLabelText(/Write a comment/i);
      fireEvent.click(commentButton);
      expect(input).toHaveFocus();
    });
  });
});
