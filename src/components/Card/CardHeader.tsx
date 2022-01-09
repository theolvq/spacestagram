import React from "react";
import {Button} from "../../styles/Buttons.style";
import {StyledCardHeader} from "../../styles/Card.style";
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
  return (
    <StyledCardHeader>
      <div className="container">
        <img
          src={picture.user.picture}
          alt={`${picture.user.username}'s profile pic`}
        />
        <span>{picture.user.username}</span>
      </div>
      <Button type="button" onClick={handleMoreOptionsClick}>
        <MoreOptionsIcon />
      </Button>
    </StyledCardHeader>
  );
};

export default CardHeader;
