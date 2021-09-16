import axios from "axios";
import React, {useCallback, useState} from "react";
import {Route, Switch} from "react-router-dom";

import {GlobalStyles} from "./styles/Global.style";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import {processData} from "./utils/helpers";
import ChronologicalFeed from "./components/ChronologicalFeed";
import RandomFeed from "./components/RandomFeed";

const API_KEY = process.env.REACT_APP_API_KEY;
const APOD_URL = "https://api.nasa.gov/planetary/apod";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const baseUrl = `${APOD_URL}?api_key=${API_KEY}`;

  const fetchData = useCallback(async (url, setState) => {
    setIsLoading(true);
    try {
      const {data} = await axios.get(url);
      const processedData = processData(data);
      setState((prev) => prev.concat(processedData));
    } catch (err) {
      setErrorMessage(err.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 10000);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <main>
      <GlobalStyles />
      <Header />
      {isLoading && <Loader />}
      {errorMessage && <Error error={errorMessage} />}
      <Switch>
        <Route exact path="/">
          <ChronologicalFeed
            baseUrl={baseUrl}
            fetchData={fetchData}
            isLoading={isLoading}
          />
        </Route>
        <Route path="/random">
          <RandomFeed
            baseUrl={baseUrl}
            fetchData={fetchData}
            isLoading={isLoading}
          />
        </Route>
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
