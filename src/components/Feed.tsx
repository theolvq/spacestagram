import React, {SetStateAction} from "react";

import {FeedContainer} from "../styles/Feed.style";
import {Image} from "../types/image";

import Card from "./Card/Card";

interface FeedProps {
  images: Image[];
  setImages: React.Dispatch<SetStateAction<Image[]>>;
}

const Feed: React.FC<FeedProps> = ({images, setImages}) => {
  const like = (id: string): void => {
    setImages((prev: Image[]) =>
      prev.map((image: Image) =>
        image.id === id ? {...image, likes: image.likes + 1} : image
      )
    );
  };

  const unlike = (id: string): void => {
    setImages((prev: Image[]) =>
      prev.map((image: Image) =>
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

export default Feed;
