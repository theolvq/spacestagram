import React from "react";

import {Button} from "../../styles/Buttons.style";
import {StyledCardHeader} from "../../styles/Card/CardHeader.style";
import {Image} from "../../types/image";

import MoreOptionsIcon from "./MoreOptionsIcon";

interface CardHeaderProps {
  picture: Image;
  handleMoreOptionsClick: () => void;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  picture,
  handleMoreOptionsClick,
}) => {
  const profilePicAlt = `${picture.user.username}'s profile picture`;

  return (
    <StyledCardHeader>
      <div className="container">
        <img src={picture.user.picture} alt={profilePicAlt} />
        <span>{picture.user.username}</span>
      </div>
      <Button type="button" onClick={handleMoreOptionsClick}>
        <MoreOptionsIcon />
      </Button>
    </StyledCardHeader>
  );
};

export default CardHeader;
