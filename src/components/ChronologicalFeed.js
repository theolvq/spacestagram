import {PropTypes} from "prop-types";
import React, {useEffect, useState} from "react";

import useEvent from "../hooks/useEvent";
import {FeedContainer} from "../styles/Feed.style";
import {substractTenDays} from "../utils/helpers";

import Feed from "./Feed";

const ChronologicalFeed = ({
  images,
  setImages,
  baseUrl,
  fetchData,
  isLoading,
}) => {
  const [dates, setDates] = useState({
    start: "2021-09-05",
    end: "2021-09-15",
  });

  const chronoUrl = `${baseUrl}&start_date=${dates.start}&end_date=${dates.end}`;
  // const [datesUrl, setDatesUrl] = useState(chronoUrl);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(chronoUrl);
  };

  const handleChange = ({target}) => {
    const [name, value] = target;
    setDates((prev) => ({
      ...prev,
      [name]: [value],
    }));
  };

  const handleScroll = (url) => {
    if (isLoading) {
      return;
    }
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
      setDates((prev) => ({
        ...prev,
        start: substractTenDays(prev.start),
        end: substractTenDays(prev.end),
      }));
      // setDatesUrl(`${baseUrl}&start_date=${dates.start}&end_date=${dates.end}`);
      // fetchData(url);
    }
  };

  useEvent("scroll", () => {
    handleScroll(chronoUrl);
  });

  useEffect(() => {
    fetchData(chronoUrl);

    // return () => {
    //   setImages([]);
    // };
  }, [chronoUrl]); // eslint-disable-line react-hooks/exhaustive-deps
  // just need to load on component mount and cleanup on dismount

  return (
    <FeedContainer images={images} setImages={setImages}>
      <form onSubmit={handleSubmit}>
        <input type="date" onChange={handleChange} autoComplete={new Date()} />
        <input type="date" onChange={handleChange} autoComplete={new Date()} />
        <button type="submit">Submit</button>
      </form>
      <h1>Chrono Feed</h1>
      <Feed images={images} setImages={setImages} />
    </FeedContainer>
  );
};

ChronologicalFeed.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  setImages: PropTypes.func.isRequired,
  baseUrl: PropTypes.string,
  fetchData: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default ChronologicalFeed;
