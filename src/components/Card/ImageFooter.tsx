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
  picture: Image;
}

const ImageFooter: React.FC<ImageFooterProps> = ({
  isHeartClicked,
  isLiked,
  handleLikeClick,
  picture,
}) => {
  return (
    <section className="like">
      <LikeButton
        isClicked={isHeartClicked}
        isLiked={isLiked}
        onClick={() => handleLikeClick(picture.id)}
      >
        <HeartIcon isLiked={isLiked} />
      </LikeButton>
      <Button>
        <CommentIcon />
      </Button>
      <Button>
        <ShareIcon />
      </Button>
      <SaveButton>
        <SaveIcon />
      </SaveButton>
    </section>
  );
};

export default ImageFooter;
