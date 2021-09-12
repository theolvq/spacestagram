import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Container } from './styles/App.style';
import { v4 as uuid } from 'uuid';
import Spin from './components/Spin';
import { randomLikes } from './utils/helpers';
import { GlobalStyles } from './styles/Global.style';
import Header from './components/Header';
import Feed from './components/Feed';
import Footer from './components/Footer';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const APOD_URL = 'https://api.nasa.gov/planetary/apod';

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `${APOD_URL}?api_key=${API_KEY}&count=10`
      );
      const processedData = data
        .filter((obj) => obj.media_type === 'image')
        .reverse()
        .map((image) => ({
          ...image,
          likes: randomLikes(),
          id: uuid(),
        }));
      setImages(processedData);
    } catch (err) {
      console.error('GET error', err);
    } finally {
      setIsLoading(false);
    }
  }, [API_KEY]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container>
      <GlobalStyles />
      {isLoading && <Spin />}
      <Header />
      <Feed images={images} setImages={setImages} />
      <Footer isLoading={isLoading} fetchData={fetchData} />
    </Container>
  );
}

export default App;
