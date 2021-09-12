import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import Card from './components/Card';
import { Container } from './styles/App.style';
import { v4 as uuid } from 'uuid';
import { Header } from './styles/Header.style';
import Spin from './components/Spin';
import { MoreButton } from './styles/MoreButton.style';
import { ArrowButton } from './styles/ArrowButton.style';
import { randomLikes } from './utils/helpers';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = 'https://api.nasa.gov/planetary/apod';

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${URL}?api_key=${API_KEY}&count=10`);
      const processedData = data
        .filter((obj) => obj.media_type === 'image')
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

  const like = (id) => {
    setImages((prev) =>
      prev.map((image) =>
        image.id === id ? { ...image, likes: image.likes + 1 } : image
      )
    );
  };

  const unlike = (id) => {
    setImages((prev) =>
      prev.map((image) =>
        image.id === id ? { ...image, likes: image.likes - 1 } : image
      )
    );
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <Header>
        <h1>Spacestagram</h1>
      </Header>
      {isLoading && <Spin />}
      {images.map((image) => (
        <Card key={image.id} picture={image} like={like} unlike={unlike} />
      ))}

      <MoreButton
        aria-label='load more pictures button'
        onClick={() => !isLoading && fetchData()}>
        More Pictures
      </MoreButton>
      <ArrowButton aria-label='back to top button' onClick={backToTop}>
        <svg
          className='arrow'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'>
          <path d='M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z' />
        </svg>
      </ArrowButton>
    </Container>
  );
}

export default App;
