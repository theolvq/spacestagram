import React, {useRef, useState} from 'react';
import {CardContainer, StyledDate} from '../../styles/Card.style';
import {Comment} from '../../types/comment';
import {Image} from '../../types/image';
import {formatDate} from '../../utils/helpers';
import Modal from '../Modal';
import CardHeader from './CardHeader';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import ImageFooter from './ImageFooter';
import LikeLabel from './LikeLabel';

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
          handleLikeClick={handleLikeClick}
          handleCommentClick={handleCommentClick}
          handleSaveClick={handleSaveClick}
          picture={picture}
          isHeartClicked={isHeartClicked}
          isLiked={isLiked}
          isSaved={isSaved}
        />
        <LikeLabel picture={picture} />
        <figcaption>{picture.title}</figcaption>
        <StyledDate>Published on ${formatDate(picture.date)}</StyledDate>
        <p className="desc">{picture.explanation} </p>
      </figure>
      <CommentList comments={comments} />
      <CommentForm commentRef={commentRef} setComments={setComments} />
    </CardContainer>
  );
};

export default Card;
