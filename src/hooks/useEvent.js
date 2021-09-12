import {useEffect} from "react";

const useEvent = (event, callback) => {
  useEffect(() => {
    window.addEventListener(event, callback);
    return () => window.removeEventListener(event, callback);
  });
};

export default useEvent;
