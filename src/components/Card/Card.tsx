import React, {useState} from "react";

import {formatDate} from "../../utils/helpers";
import {Button} from "../../styles/Buttons.style";
import {CardContainer} from "../../styles/Card.style";
import {Image} from "../../types/image";
import Modal from "../Modal";

import MoreOptionsIcon from "./MoreOptionsIcon";
import ImageFooter from "./ImageFooter";

interface CardProps {
  picture: Image;
  like: (id: string) => void;
  unlike: (id: string) => void;
}

const Card: React.FC<CardProps> = ({picture, like, unlike}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLikeClick = (id: string) => {
    let timeoutid;
    setIsHeartClicked(true);
    if (isLiked) {
      unlike(id);
      setIsLiked(false);
    } else {
      like(id);
      setIsLiked(true);
    }
    if (!timeoutid) {
      timeoutid = setTimeout(() => {
        setIsHeartClicked(false);
      }, 450);
    }
  };

  const handleMoreOptionsClick = () => {
    setShowModal(!showModal);
  };

  const likeLabel = picture.likes > 1 ? "Likes" : "Like";
  const dateLabel = `Published on ${formatDate(picture.date)}`;
  const profilePicAlt = `${picture.user.username}'s profile picture`;

  return (
    <CardContainer>
      {showModal && <Modal handleClick={handleMoreOptionsClick} />}
      <header className="user">
        <div className="container">
          <img src={picture.user.picture} alt={profilePicAlt} />
          <span>{picture.user.username}</span>
        </div>
        <Button type="button" onClick={handleMoreOptionsClick}>
          <MoreOptionsIcon />
        </Button>
      </header>
      <figure>
        <img src={picture.url} alt={picture.title} />
        <figcaption>{picture.title}</figcaption>
        <p className="date">{dateLabel}</p>
        <p className="desc">{picture.explanation} </p>
      </figure>
      <ImageFooter
        isHeartClicked={isHeartClicked}
        handleLikeClick={handleLikeClick}
        picture={picture}
        isLiked={isLiked}
      />
      <p>
        {picture.likes} {likeLabel}
      </p>
    </CardContainer>
  );
};

export default Card;
