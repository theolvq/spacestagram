import React, {useEffect, useState} from "react";

import {FeedContainer} from "../styles/Feed.style";
import useEvent from "../hooks/useEvent";
import {HighLevelFeedProps} from "../types/feed";
import {Image} from "../types/image";

import Feed from "./Feed";

const RandomFeed: React.FC<HighLevelFeedProps> = ({
  isLoading,
  fetchData,
  baseUrl,
}) => {
  const [images, setImages] = useState<Image[]>([]);

  const randomUrl = `${baseUrl}&count=10`;

  const handleScroll = () => {
    if (isLoading) {
      return;
    }
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
      fetchData(randomUrl, setImages);
    }
  };

  useEffect(() => {
    fetchData(randomUrl, setImages);
  }, [fetchData, randomUrl]);

  useEvent("scroll", handleScroll);

  return (
    <FeedContainer>
      <Feed images={images} setImages={setImages} />
    </FeedContainer>
  );
};

export default RandomFeed;
