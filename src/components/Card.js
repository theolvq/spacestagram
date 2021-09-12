import React, {useState} from "react";
import PropTypes from "prop-types";

import {formatDate} from "../utils/helpers";
import {LikeButton} from "../styles/Buttons.style";
import {CardContainer} from "../styles/Card.style";

const Card = ({picture, like, unlike}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleLikeClick = (id) => {
    let timeoutid;
    setIsClicked(true);
    if (isLiked) {
      unlike(id);
      setIsLiked(false);
    } else {
      like(id);
      setIsLiked(true);
    }
    if (!timeoutid) {
      timeoutid = setTimeout(() => {
        setIsClicked(false);
      }, 150);
    }
  };
  const likeLabel = picture.likes > 1 ? "Likes" : "Like";
  const dateLabel = `Published on ${formatDate(picture.date)}`;

  return (
    <CardContainer>
      <figure>
        <img src={picture.url} alt={picture.title} />
        <figcaption>{picture.title}</figcaption>
        <p className="date">{dateLabel}</p>
        <p className="desc">{picture.explanation} </p>
      </figure>
      <section className="like">
        <LikeButton
          aria-label="like button"
          isClicked={isClicked}
          isLiked={isLiked}
          onClick={() => handleLikeClick(picture.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
          </svg>
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
