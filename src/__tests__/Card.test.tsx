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

  describe('Likes', () => {
    it('when like button is clicked, like function should be called', () => {
      const likeButton = screen.getByLabelText(/Like/i);
      fireEvent.click(likeButton);
      expect(mockLike).toHaveBeenCalledTimes(1);
    });
    it('when like button is clicked, background changes to red and label changes to unlike', () => {
      const likeButton = screen.getByLabelText(/Like/i);
      fireEvent.click(likeButton);
      expect(likeButton).toHaveStyle('fill: var(--red)');
      expect(likeButton).toHaveStyle('stroke: var(--red)');
      expect(likeButton).toHaveAccessibleName(/Unlike/i);
    });

    it('when unlike button is clicked, unlike function should be called', () => {
      const likeButton = screen.getByLabelText(/Like/i);
      fireEvent.click(likeButton);
      fireEvent.click(likeButton);
      expect(mockUnlike).toHaveBeenCalledTimes(1);
    });

    it('when unlike button is clicked, background changes to white and label changes to like', () => {
      const likeButton = screen.getByLabelText(/Like/i);
      fireEvent.click(likeButton);
      fireEvent.click(likeButton);
      expect(likeButton).toHaveStyle('stroke: var(--dark-grey)');
      expect(likeButton).toHaveAccessibleName(/Like/i);
    });
  });

  describe('Save', () => {
    it('when save button is clicked, label changes to remove', () => {
      const saveButton = screen.getByLabelText(/Save/i);

      fireEvent.click(saveButton);
      expect(saveButton).toHaveAccessibleName(/Remove/i);
    });

    it('when save button is clicked, save function should be called', () => {
      const saveButton = screen.getByLabelText(/Save/i);
      fireEvent.click(saveButton);
      expect(mockSave).toHaveBeenCalledTimes(1);
    });
  });
});
