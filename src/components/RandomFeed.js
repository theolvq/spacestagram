import React, {useEffect, useState} from "react";
import {PropTypes} from "prop-types";

import {FeedContainer} from "../styles/Feed.style";
import useEvent from "../hooks/useEvent";

import Feed from "./Feed.tsx";

const RandomFeed = ({isLoading, fetchData, baseUrl}) => {
  const [images, setImages] = useState([]);

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

RandomFeed.propTypes = {
  baseUrl: PropTypes.string,
  fetchData: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default RandomFeed;
