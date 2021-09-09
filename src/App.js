import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [APIResponse, setAPIResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState('');

  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = 'https://api.nasa.gov/planetary/apod';

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `${URL}?api_key=${API_KEY}&date=${date}`
      );

      setAPIResponse(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = ({ target }) => {
    setDate(target.value);
  };

  useEffect(() => {
    fetchData();
  }, [date]);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div className='App'>
      <h1>Hello</h1>
      <input
        type='date'
        name='date'
        value={date}
        onChange={({ target }) => {
          setDate(target.value);
        }}
      />
      <img src={APIResponse.url} alt={APIResponse.title} />
    </div>
  );
}

export default App;
