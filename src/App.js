import axios from 'axios';
import { useEffect, useState } from 'react';
import Picture from './components/Picture';
import { Container } from './styles/App.style';
import { v4 as uuid } from 'uuid';

function App() {
  const [APIResponse, setAPIResponse] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState('');

  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = 'https://api.nasa.gov/planetary/apod';

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${URL}?api_key=${API_KEY}&count=10`);
      const filterImages = data
        .filter((obj) => obj.media_type === 'image')
        .map((image) => ({
          ...image,
          likes: 0,
          id: uuid(),
        }));
      setImages(filterImages);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const like = () => null;
  const unlike = () => null;

  useEffect(() => {
    fetchData();
  }, []);

  // setImages(
  //   APIResponse.filter((obj) => obj.media_type === 'image').map((image) => ({
  //     ...image,
  //     likes: 0,
  //     id: uuid(),
  //   }))
  // );

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <Container>
      <h1>Spacestagram</h1>
      <p>Brought to you by NASA's Astronomy Picture Of the Day (APOD) API</p>
      <input
        type='date'
        name='date'
        value={date}
        onChange={({ target }) => {
          setDate(target.value);
        }}
      />
      {images &&
        images.map((image) => (
          <Picture key={image.id} picture={image} like={like} unlike={unlike} />
        ))}
    </Container>
  );
}

export default App;
