import React from "react";

import {FeedContainer} from "../styles/Feed.style";

import Card from "./Card";

interface User {
  picture: string;
  username: string;
}

interface Image {
  likes: number;
  user: User;
  date: Date;
  url: string;
  title: string;
  explanation: string;
  id: string;
}

interface FeedProps {
  images: Image[];
  setImages: (prevState: React.SetStateAction<Image[]>) => Image[];
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
