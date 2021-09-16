import axios from "axios";
import React, {useCallback, useState} from "react";
import {Route, Switch} from "react-router-dom";

import {GlobalStyles} from "./styles/Global.style";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Error from "./components/Error";
// import useEvent from "./hooks/useEvent";
import {processData} from "./utils/helpers";
import ChronologicalFeed from "./components/ChronologicalFeed";
import RandomFeed from "./components/RandomFeed";

const API_KEY = process.env.REACT_APP_API_KEY;
const APOD_URL = "https://api.nasa.gov/planetary/apod";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const baseUrl = `${APOD_URL}?api_key=${API_KEY}`;
  // const randomUrl = `${baseUrl}&count=10`;

  const fetchData = useCallback(async (url) => {
    setIsLoading(true);
    try {
      const {data} = await axios.get(url);
      const processedData = processData(data);
      setImages((prev) => prev.concat(processedData));
    } catch (err) {
      setErrorMessage(err.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 10000);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // useEvent("scroll", () => handleScroll(randomUrl));

  // useEffect(() => {
  //   fetchData(randomUrl);
  //   return () => {
  //     setImages([]);
  //   };
  // }, [fetchData, randomUrl]);

  return (
    <main>
      <GlobalStyles />
      <Header />
      {isLoading && <Loader />}
      {errorMessage && <Error error={errorMessage} />}
      <Switch>
        <Route exact path="/">
          <Feed images={images} setImages={setImages} />
        </Route>
        <Route path="/chrono">
          <ChronologicalFeed
            images={images}
            setImages={setImages}
            baseUrl={baseUrl}
            fetchData={fetchData}
            isLoading={isLoading}
          />
        </Route>
        <Route path="/random">
          <RandomFeed
            images={images}
            setImages={setImages}
            baseUrl={baseUrl}
            fetchData={fetchData}
            isLoading={isLoading}
          />
        </Route>
      </Switch>
      <Footer isLoading={isLoading} fetchData={fetchData} />
    </main>
  );
}

export default App;
