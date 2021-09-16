import React, {useEffect} from "react";
import {PropTypes} from "prop-types";

import {FeedContainer} from "../styles/Feed.style";
import useEvent from "../hooks/useEvent";

import Feed from "./Feed";

const RandomFeed = ({images, setImages, isLoading, fetchData, baseUrl}) => {
  const randomUrl = `${baseUrl}&count=10`;

  const handleScroll = (url) => {
    if (isLoading) {
      return;
    }
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
      fetchData(url);
    }
  };
  useEffect(() => {
    fetchData(randomUrl);
    return () => {
      setImages([]);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEvent("scroll", () => handleScroll(randomUrl));
  return (
    <FeedContainer images={images} setImages={setImages}>
      <h1>Random Feed</h1>
      <Feed images={images} setImages={setImages} />
    </FeedContainer>
  );
};

RandomFeed.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  setImages: PropTypes.func.isRequired,
  baseUrl: PropTypes.string,
  fetchData: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default RandomFeed;
