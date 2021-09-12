import axios from "axios";
import React, {useCallback, useEffect, useState} from "react";
import {v4 as uuid} from "uuid";

import {randomLikes} from "./utils/helpers";
import {Container} from "./styles/App.style";
import {GlobalStyles} from "./styles/Global.style";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Error from "./components/Error";

const API_KEY = process.env.REACT_APP_API_KEY;
const APOD_URL = "https://api.nasa.gov/planetary/apod";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const {data} = await axios.get(`${APOD_URL}?api_key=${API_KEY}&count=10`);
      const processedData = data
        .filter((obj) => obj.media_type === "image")
        .reverse()
        .map((image) => ({
          ...image,
          likes: randomLikes(),
          id: uuid(),
        }));
      setImages(processedData);
    } catch (err) {
      setErrorMessage(err.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container>
      <GlobalStyles />
      {isLoading && <Loader />}

      <Header />
      {errorMessage && <Error error={errorMessage} />}
      <Feed images={images} setImages={setImages} />
      <Footer isLoading={isLoading} fetchData={fetchData} />
    </Container>
  );
}

export default App;
