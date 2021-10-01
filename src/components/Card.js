import React, {useState} from "react";
import PropTypes from "prop-types";

import {formatDate} from "../utils/helpers";
import {Button, LikeButton} from "../styles/Buttons.style";
import {CardContainer} from "../styles/Card.style";

import Modal from "./Modal";
import HeartIcon from "./HeartIcon.tsx";

const Card = ({picture, like, unlike}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLikeClick = (id) => {
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
  const moreOptionsLabel = "More options";

  return (
    <CardContainer>
      {showModal && <Modal handleClick={handleMoreOptionsClick} />}
      <header className="user">
        <div className="container">
          <img src={picture.user.picture} alt={profilePicAlt} />
          <span>{picture.user.username}</span>
        </div>
        <Button type="button" onClick={handleMoreOptionsClick}>
          <svg
            aria-label={moreOptionsLabel}
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>{moreOptionsLabel}</title>
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="6.5" cy="12" r="1.5" />
            <circle cx="17.5" cy="12" r="1.5" />
          </svg>
        </Button>
      </header>
      <figure>
        <img src={picture.url} alt={picture.title} />
        <figcaption>{picture.title}</figcaption>
        <p className="date">{dateLabel}</p>
        <p className="desc">{picture.explanation} </p>
      </figure>
      <section className="like">
        <LikeButton
          isClicked={isHeartClicked}
          isLiked={isLiked}
          onClick={() => handleLikeClick(picture.id)}
        >
          <HeartIcon isLiked={isLiked} />
        </LikeButton>
        <p>
          {picture.likes} {likeLabel}
        </p>
      </section>
    </CardContainer>
  );
};

Card.propTypes = {
  picture: PropTypes.object.isRequired,
  like: PropTypes.func.isRequired,
  unlike: PropTypes.func.isRequired,
};

export default Card;
