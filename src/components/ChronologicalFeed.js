import {PropTypes} from "prop-types";
import React, {useEffect, useState} from "react";

import useEvent from "../hooks/useEvent";
import {FeedContainer} from "../styles/Feed.style";
import {substractTenDays} from "../utils/helpers";

import Feed from "./Feed.tsx";

const ChronologicalFeed = ({baseUrl, fetchData, isLoading}) => {
  const today = new Date().toLocaleDateString("en-CA", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const [images, setImages] = useState([]);
  const [dates, setDates] = useState({
    start: substractTenDays(today),
    end: today,
  });

  const chronoUrl = `${baseUrl}&start_date=${dates.start}&end_date=${dates.end}`;

  const handleScroll = () => {
    if (isLoading) {
      return;
    }
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
      setDates((prev) => ({
        ...prev,
        start: substractTenDays(prev.start),
        end: substractTenDays(prev.end),
      }));
    }
  };

  useEvent("scroll", handleScroll);

  useEffect(() => {
    fetchData(chronoUrl, setImages);
  }, [fetchData, chronoUrl]);

  return (
    <FeedContainer>
      <Feed images={images} setImages={setImages} />
    </FeedContainer>
  );
};

ChronologicalFeed.propTypes = {
  baseUrl: PropTypes.string,
  fetchData: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default ChronologicalFeed;
