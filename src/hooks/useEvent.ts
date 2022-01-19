import {useEffect} from 'react';

const useEvent = (event: string, callback: () => void): void => {
  useEffect(() => {
    window.addEventListener(event, callback);
    return () => window.removeEventListener(event, callback);
  });
};

export default useEvent;
