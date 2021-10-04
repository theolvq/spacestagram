import React, {useRef, useState} from "react";

import {formatDate} from "../../utils/helpers";
import {CardContainer} from "../../styles/Card/Card.style";
import {Image} from "../../types/image";
import {Comment} from "../../types/Comment";
import Modal from "../Modal";

import ImageFooter from "./ImageFooter";
import CardHeader from "./CardHeader";
import CommentForm from "./CommentForm";

interface CardProps {
  picture: Image;
  like: (id: string) => void;
  unlike: (id: string) => void;
  save: (id: string) => void;
  remove: (id: string) => void;
}

const Card: React.FC<CardProps> = ({picture, like, unlike, save, remove}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  const commentRef = useRef<null | HTMLTextAreaElement>(null);

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

  const handleCommentClick = () => {
    commentRef.current?.focus();
  };

  const handleSaveClick = (id: string) => {
    if (isSaved) {
      remove(id);
      setIsSaved(false);
    } else {
      save(id);
      setIsSaved(true);
    }
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
          handleCommentClick={handleCommentClick}
          picture={picture}
          isLiked={isLiked}
          handleSaveClick={handleSaveClick}
          isSaved={isSaved}
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
      {comments.map((comment) => (
        <div key={comment.text}>
          <a href={`/${comment.author}`}>{comment.author}</a>{" "}
          <span>{comment.text}</span>
        </div>
      ))}
      <CommentForm commentRef={commentRef} setComments={setComments} />
    </CardContainer>
  );
};

export default Card;
