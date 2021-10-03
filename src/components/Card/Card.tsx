import React, {useState} from "react";

import {formatDate} from "../../utils/helpers";
import {CardContainer} from "../../styles/Card/Card.style";
import {Image} from "../../types/image";
import Modal from "../Modal";

import ImageFooter from "./ImageFooter";
import CardHeader from "./CardHeader";
import CommentForm from "./CommentForm";

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
  const randomUser = "hummingbird";
  // const likeLabel = `Liked by ${randomUser} and ${picture.likes - 1} others`;
  const dateLabel = `Published on ${formatDate(picture.date)}`;

  return (
    <CardContainer>
      {showModal && <Modal handleClick={handleMoreOptionsClick} />}
      <CardHeader
        handleMoreOptionsClick={handleMoreOptionsClick}
        picture={picture}
      />
      <figure>
        <img src={picture.url} alt={picture.title} />
        <ImageFooter
          isHeartClicked={isHeartClicked}
          handleLikeClick={handleLikeClick}
          picture={picture}
          isLiked={isLiked}
        />
        {/*  eslint-disable-next-line @shopify/jsx-no-hardcoded-content */}
        <p>
          Liked by{" "}
          <span>
            <a href="/randomUser">{randomUser}</a>
          </span>{" "}
          and{" "}
          {/*  eslint-disable-next-line @shopify/jsx-no-hardcoded-content */}
          <a href="/likes">{picture.likes - 1} others </a>
        </p>
        <figcaption>{picture.title}</figcaption>
        <p className="date">{dateLabel}</p>
        <p className="desc">{picture.explanation} </p>
      </figure>

      <CommentForm />
    </CardContainer>
  );
};

export default Card;
