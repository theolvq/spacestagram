import React, {FC, useEffect, useState} from 'react';
import useEvent from '../hooks/useEvent';
import {FeedContainer} from '../styles/Feed.style';
import {HighLevelFeedProps} from '../types/feed';
import {Image} from '../types/image';
import {substractTenDays} from '../utils/helpers';
import Feed from './Feed';

const ChronologicalFeed: FC<HighLevelFeedProps> = ({
  baseUrl,
  fetchData,
  isLoading,
}) => {
  const today = new Date().toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  const [images, setImages] = useState<Image[]>([]);
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

  useEvent('scroll', handleScroll);

  useEffect(() => {
    fetchData(chronoUrl, setImages);
  }, [fetchData, chronoUrl]);

  return (
    <FeedContainer>
      <Feed images={images} setImages={setImages} />
    </FeedContainer>
  );
};

export default ChronologicalFeed;
