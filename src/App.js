import axios from "axios";
import React, {useCallback, useEffect, useState} from "react";

import {GlobalStyles} from "./styles/Global.style";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Error from "./components/Error";
import useEvent from "./hooks/useEvent";
import {processData} from "./utils/helpers";

const API_KEY = process.env.REACT_APP_API_KEY;
const APOD_URL = "https://api.nasa.gov/planetary/apod";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = useCallback(async () => {
    const url = `${APOD_URL}?api_key=${API_KEY}&count=10`;

    setIsLoading(true);

    try {
      const {data} = await axios.get(url);
      const processedData = processData(data);
      setImages((prev) => prev.concat(processedData));
    } catch (err) {
      setErrorMessage(err.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleScroll = () => {
    if (isLoading) {
      return;
    }
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
      fetchData();
    }
  };

  useEvent("scroll", handleScroll);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <main>
      <GlobalStyles />
      {isLoading && <Loader />}
      <Header />
      {errorMessage && <Error error={errorMessage} />}
      <Feed images={images} setImages={setImages} />
      <Footer isLoading={isLoading} fetchData={fetchData} />{" "}
    </main>
  );
}

export default App;
