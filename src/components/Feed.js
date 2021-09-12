import React from "react";
import PropTypes from "prop-types";

import {FeedContainer} from "../styles/Feed.style";

import Card from "./Card";

const Feed = ({images, setImages}) => {
  const like = (id) => {
    setImages((prev) =>
      prev.map((image) =>
        image.id === id ? {...image, likes: image.likes + 1} : image
      )
    );
  };

  const unlike = (id) => {
    setImages((prev) =>
      prev.map((image) =>
        image.id === id ? {...image, likes: image.likes - 1} : image
      )
    );
  };
  return (
    <FeedContainer>
      {images.map((image) => (
        <Card key={image.id} picture={image} like={like} unlike={unlike} />
      ))}
    </FeedContainer>
  );
};

Feed.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  setImages: PropTypes.func.isRequired,
};

export default Feed;
