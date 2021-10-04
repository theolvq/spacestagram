import React from "react";

import {Button, LikeButton, SaveButton} from "../../styles/Buttons.style";
import {Image} from "../../types/image";

import HeartIcon from "./HeartIcon";
import CommentIcon from "./CommentIcon";
import ShareIcon from "./ShareIcon";
import SaveIcon from "./SaveIcon";

interface ImageFooterProps {
  isHeartClicked: boolean;
  isLiked: boolean;
  handleLikeClick: (id: string) => void;
  handleCommentClick: () => void;
  handleSaveClick: (id: string) => void;
  isSaved: boolean;
  picture: Image;
}

const ImageFooter: React.FC<ImageFooterProps> = ({
  isHeartClicked,
  isLiked,
  handleLikeClick,
  handleCommentClick,
  handleSaveClick,
  isSaved,
  picture,
}) => {
  return (
    <section className="footer">
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
    </section>
  );
};

export default ImageFooter;
