import axios from 'axios';
import { useEffect, useState } from 'react';
import Picture from './components/Picture';
import { Container } from './styles/App.style';
import { v4 as uuid } from 'uuid';
import { Header } from './styles/Header.style';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = 'https://api.nasa.gov/planetary/apod';

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${URL}?api_key=${API_KEY}&count=10`);
      const processedData = data
        .filter(obj => obj.media_type === 'image')
        .map(image => ({
          ...image,
          likes: 0,
          id: uuid(),
        }));
      setImages(processedData);
    } catch (err) {
      console.error('GET error', err);
    } finally {
      setIsLoading(false);
    }
  };

  const like = id => {
    setImages(prev =>
      prev.map(image =>
        image.id === id ? { ...image, likes: image.likes + 1 } : image
      )
    );
  };

  const unlike = id => {
    setImages(prev =>
      prev.map(image =>
        image.id === id ? { ...image, likes: image.likes - 1 } : image
      )
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchOnScroll = async () => {
    // console.log(window.innerHeight);
    // console.log(window.pageYOffset);
    // console.log(document.body.offsetHeight);
    if (
      window.innerHeight + Math.ceil(window.pageYOffset) >=
      document.body.offsetHeight
    ) {
      if (!isLoading) {
        console.log('hit rock bottom');
        setIsLoading(true);
        try {
          const { data } = await axios.get(
            `${URL}?api_key=${API_KEY}&count=10`
          );
          const processedData = data
            .filter(obj => obj.media_type === 'image')
            .map(image => ({
              ...image,
              likes: 0,
              id: uuid(),
            }));
          setImages(prev => prev.concat(processedData));
        } catch (err) {
          console.error('GET error', err);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <Container onWheel={fetchOnScroll}>
      <Header>
        <h1>Spacestagram</h1>
      </Header>
      {images.map(image => (
        <Picture key={image.id} picture={image} like={like} unlike={unlike} />
      ))}
    </Container>
  );
}

export default App;
