import axios from 'axios';
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import {Route, Switch} from 'react-router-dom';
import ChronologicalFeed from './components/ChronologicalFeed';
import ErrorSnackbar from './components/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import Loader from './components/Loader';
import RandomFeed from './components/RandomFeed';
import {GlobalStyles} from './styles/Global.style';
import {Image} from './types/image';
import {processData} from './utils/helpers';

const API_KEY = process.env.REACT_APP_API_KEY;
const APOD_URL = 'https://api.nasa.gov/planetary/apod';

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const baseUrl = `${APOD_URL}?api_key=${API_KEY}`;

  const fetchImages = useCallback(
    async (url: string, setState: Dispatch<SetStateAction<Image[]>>) => {
      setIsLoading(true);
      try {
        const {data} = await axios.get(url);
        const processedData = processData(data);
        setState((prev: Image[]) => prev.concat(processedData));
      } catch (err) {
        if (err instanceof Error) {
          setErrorMessage(err.message);
          setTimeout(() => {
            setErrorMessage('');
          }, 10000);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  return (
    <main>
      <GlobalStyles />
      <Header />
      {isLoading && <Loader />}
      {errorMessage && <ErrorSnackbar error={errorMessage} />}
      <Switch>
        <Route exact path="/">
          <ChronologicalFeed
            baseUrl={baseUrl}
            fetchData={fetchImages}
            isLoading={isLoading}
          />
        </Route>
        <Route path="/random">
          <RandomFeed
            baseUrl={baseUrl}
            fetchData={fetchImages}
            isLoading={isLoading}
          />
        </Route>
      </Switch>
      <Footer />
    </main>
  );
};

export default App;
