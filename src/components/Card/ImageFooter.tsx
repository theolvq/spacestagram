import React from "react";
import {Button, LikeButton, SaveButton} from "../../styles/Buttons.style";
import {StyledImageFooter} from "../../styles/Card.style";
import {Image} from "../../types/image";
import CommentIcon from "./CommentIcon";
import HeartIcon from "./HeartIcon";
import SaveIcon from "./SaveIcon";
import ShareIcon from "./ShareIcon";

interface ImageFooterProps {
  handleLikeClick: (id: string) => void;
  handleCommentClick: () => void;
  handleSaveClick: (id: string) => void;
  picture: Image;
  isHeartClicked: boolean;
  isLiked: boolean;
  isSaved: boolean;
}

const ImageFooter: React.FC<ImageFooterProps> = ({
  handleLikeClick,
  handleCommentClick,
  handleSaveClick,
  picture,
  isHeartClicked,
  isLiked,
  isSaved,
}) => {
  return (
    <StyledImageFooter>
      <LikeButton
        isClicked={isHeartClicked}
        isLiked={isLiked}
        onClick={() => handleLikeClick(picture.id)}
      >
        <HeartIcon isLiked={isLiked} />
      </LikeButton>
      <Button onClick={handleCommentClick}>
        <CommentIcon />
      </Button>
      <Button>
        <ShareIcon />
      </Button>
      <SaveButton onClick={() => handleSaveClick(picture.id)} isSaved={isSaved}>
        <SaveIcon isSaved={isSaved} />
      </SaveButton>
    </StyledImageFooter>
  );
};

export default ImageFooter;
