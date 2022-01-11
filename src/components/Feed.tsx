import React, {FC, SetStateAction} from 'react';
import {FeedContainer} from '../styles/Feed.style';
import {Image} from '../types/image';
import Card from './Card';

interface FeedProps {
  images: Image[];
  setImages: React.Dispatch<SetStateAction<Image[]>>;
}

const Feed: FC<FeedProps> = ({images, setImages}) => {
  const like = (id: string): void => {
    setImages((prev: Image[]) =>
      prev.map((image: Image) =>
        image.id === id ? {...image, likes: image.likes + 1} : image,
      ),
    );
  };

  const unlike = (id: string): void => {
    setImages((prev: Image[]) =>
      prev.map((image: Image) =>
        image.id === id ? {...image, likes: image.likes - 1} : image,
      ),
    );
  };

  const save = (id: string): void => {
    setImages((prev: Image[]) =>
      prev.map((image: Image) =>
        image.id === id ? {...image, isSaved: true} : image,
      ),
    );
  };

  const remove = (id: string): void => {
    setImages((prev: Image[]) =>
      prev.map((image: Image) =>
        image.id === id ? {...image, isSaved: false} : image,
      ),
    );
  };

  return (
    <FeedContainer>
      {images.map((image) => (
        <Card
          key={image.id}
          picture={image}
          like={like}
          unlike={unlike}
          save={save}
          remove={remove}
        />
      ))}
    </FeedContainer>
  );
};

export default Feed;
